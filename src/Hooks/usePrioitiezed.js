/**
 * this hook will recive array of {url: string, priority: number}
 * and will request the data in a prioritized way, so the data with highter proiority will
 * be loaded first  
 */
import { useEffect, useReducer, useCallback } from 'react';

const initialState = {
    lastIdx: -1, // the index of the last request data
    dataToLoad: [],// a sorted array of the comming data, sorted on its priority
    currLoadingData: [], // contains the data id's that currently in request
    readyData: {}, // contains the response/error of the resolved request ,
    done: true,
};

const actionType = {
    SET_NEW_DATA_TO_LOAD: 'SET_NEW_DATA_TO_LOAD',
    DONE: 'DONE',
    REQUEST_FULLFILED: 'REQUEST_FULLFILED'
}

function reducer(state, action) {
    switch (action.type) {
        case actionType.SET_NEW_DATA_TO_LOAD:
            return {
                ...initialState,
                dataToLoad: action.dataToLoad,
                done: false
            }

        case actionType.REQUEST_FULLFILED:
            return {
                ...state,
                readyData: { ...state.readyData, [action.dataId]: action.res },
                // remove it from the cur loading
                currLoadingData: state.currLoadingData.filter(dataId => dataId !== action.dataId)
            }

        case actionType.SET_CUR_LOADING_DATA:
            return {
                ...state,
                currLoadingData: action.currLoadingData,
                // update the index of last requested data
                lastIdx: state.lastIdx + action.currLoadingData.length
            }

        case actionType.DONE:
            return {
                ...state,
                done: true
            }

        default:
            throw new Error(`Can't recognize action of name ${action.type}`);
    }
}



const usePrioritized = (data) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // no data to load 
        if (!(data instanceof Array)) {
            return
        }

        // avoid mutation
        const dataToSort = [...data];
        // sory data relative to its priority
        const sortedData = dataToSort.sort(function (a, b) {
            if (a.priority < b.priority) return -1;
            if (a.priority > b.priority) return 1;

            return 0;
        });


        dispatch({ type: actionType.SET_NEW_DATA_TO_LOAD, dataToLoad: sortedData });

    }, [data])


    /**
     * load data from the url and update the state 
     * @param {Object} data data to load 
     */
    const loadData = useCallback((data) => {
        fetch(
            data.url
        ).then(res => res.json())
            .then(res => {
                dispatch({ type: actionType.REQUEST_FULLFILED, res, dataId: data.id })
                return res;
            })
            .catch(e => {
                dispatch({ type: actionType.REQUEST_FULLFILED, e, dataId: data.id });
                console.error(e);
                return e;
            });
    }, []);



    /**
     * load next requests
     */
    useEffect(() => {
        // watch if we fulfilled all data
        if (state.lastIdx+1 >= state.dataToLoad.length) {
            dispatch({ type: actionType.DONE });
            return
        }

        // if we are in the loading proceses and we have to jump to the next 
        // data
        if (!state.done && state.currLoadingData.length === 0) {
            const curPriority = state.dataToLoad[state.lastIdx + 1].priority;

            const curLoading = state.dataToLoad
                .filter((data) => data.priority === curPriority)
                // just a loop
                .filter(data => {
                    loadData(data);
                    return true;
                })
                // get onley the ids
                .map(data => data.id)

            // update current loading
            dispatch({ type: actionType.SET_CUR_LOADING_DATA, currLoadingData: curLoading })
        }
    }, [state.lastIdx, state.currLoadingData, state.dataToLoad, loadData, state.done])



    const setDataToLoad = useCallback((data) => {
        dispatch({ type: actionType.SET_NEW_DATA_TO_LOAD, dataToLoad: data })
    }, []);

    return {
        responses: { ...state.readyData },
        loading: !state.done,
        setDataToLoad
    }
}

export default usePrioritized;