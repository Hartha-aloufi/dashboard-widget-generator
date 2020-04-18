import React, { useMemo } from 'react';
import ContentLoader from "react-content-loader"

import { Spin } from 'antd';

const ChartLoader = () => (
    <ContentLoader
        speed={2}
        width={'100%'}
        height={160}
        viewBox="0 0 400 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="-4" y="67" rx="2" ry="2" width="400" height="400" />
    </ContentLoader>
)

const isEmpty = (data) => {
    if (!data)
        return true;
    if (data instanceof Array && data.length === 0)
        return true;
    if (typeof data === 'object' && Object.values(data).length === 0)
        return true;

    return false;
}

const withConentLoader = (WrappedComponent, dataPropsName) => {
    return (props) => {

        /**
        * memoize the wrapped component
        * passing destructred props will always result 
        * a new props object
        * so memoizing it will solve the problem
        */
        const wrappedComponent = useMemo(
            () => (
                <WrappedComponent {...props} />
            ), [props]
        );

        return (
            /* if we dont' have data to render */
            <Spin
                wrapperClassName="content-loader"
                spinning={isEmpty(props[dataPropsName])}
                indicator="loading...">
                {wrappedComponent}
            </Spin>

        )
    }
}

export default withConentLoader;