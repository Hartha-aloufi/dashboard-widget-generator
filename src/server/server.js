import { Server } from "miragejs"
import dummyData from './dummyData'
import { Response } from 'miragejs';

const randomDelay = () => parseInt(300 + Math.random() * 400)


const getChartData = (schema, request) => {
    let id = request.params.id

    return new Response(200, {}, {data: dummyData[id]} || {});
}
const getAnalytics = (schema, request) => {
    let type = request.queryParams.q

    return new Response(200, {}, {data: dummyData[type]} || {});
}


export const start = () => new Server({
    urlPrefix: 'http://hartha.com',
    namespace: 'api',

    routes() {
        this.get('/chart-data/:id', getChartData, { timing: randomDelay() });
        this.get('/table-data/:id', getChartData, { timing: randomDelay() });
        this.get('/analytics', getAnalytics, { timing: randomDelay() });
    }
})




