export const default1 = {
    // charts: [1, 1, 1, 1, 1, 1, 1, 1],
    charts: [
        {
            url: 'http://hartha.com/api/analytics?q=sales',
            priority: 1,
            type: 'sales-analytics'
        },

        {
            url: 'http://hartha.com/api/analytics?q=orders',
            priority: 1,
            type: 'orders-analytics'
        },

        {
            url: 'http://hartha.com/api/analytics?q=users',
            priority: 4,
            type: 'users-analytics'
        },

        {
            url: 'http://hartha.com/api/analytics?q=visitors',
            priority: 4,
            type: 'visitors-analytics'
        },

        {
            url: 'http://hartha.com/api/chart-data/123-linechart',
            priority: 1,
            type: 'linechart'
        },
        {
            url: 'http://hartha.com/api/chart-data/123-barchart',
            priority: 3,
            type: 'barchart'

        },
      

        // {
        //     url: 'http://hartha.com/api/table-data/123-table',
        //     priority: 5,
        //     type: 'table'
        // },
        {
            url: 'http://hartha.com/api/chart-data/123-stackedareachart',
            priority: 5,
            type: 'stackedareachart'
        },
          {
            url: 'http://hartha.com/api/chart-data/123-pichart',
            priority: 2,
            type: 'pichart'
        },
    ],

    layout: {
        cell_width: .25,
        cell_height: '120px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [0, 1],
                to: [1, 2]
            },
            {
                from: [0, 2],
                to: [1, 3]
            },
            {
                from: [0, 3],
                to: [1, 4]
            },

            {
                from: [1, 0],
                to: [4, 2]
            },

            {
                from: [1, 2],
                to: [4, 4],
            },
            {
                from: [4, 0],
                to: [7, 3],
            },
            {
                from: [4, 3],
                to: [7, 4],
            },
        ]
    }, 

    layout_tablet: {
        cell_width: .5,
        cell_height: '140px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [0, 1],
                to: [1, 2]
            },
            {
                from: [1, 0],
                to: [2, 1]
            },
            {
                from: [1, 1],
                to: [2, 2]
            },

            {
                from: [2, 0],
                to: [4, 2]
            },

            {
                from: [4, 0],
                to: [6, 2],
            },
            {
                from: [6, 0],
                to: [8, 2],
            },
            {
                from: [8, 0],
                to: [10, 2],
            },
        ]
    },

    layout_mobile: {
        cell_width: 1,
        cell_height: '140px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [1, 0],
                to: [2, 1]
            },
            {
                from: [2, 0],
                to: [3, 1]
            },
            {
                from: [3, 0],
                to: [4, 1]
            },

            {
                from: [4, 0],
                to: [6, 1]
            },

            {
                from: [6, 0],
                to: [8, 1],
            },
            {
                from: [8, 0],
                to: [10, 1],
            },
            {
                from: [10, 0],
                to: [12, 1],
            },
        ]
    }
}
export const default2 = {
    // charts: [1, 1, 1, 1, 1, 1, 1, 1],
    charts: [
      

        {
            url: 'http://hartha.com/api/chart-data/123-linechart',
            priority: 1,
            type: 'linechart'
        },
        {
            url: 'http://hartha.com/api/chart-data/123-barchart',
            priority: 2,
            type: 'barchart'

        },
      

        // {
        //     url: 'http://hartha.com/api/table-data/123-table',
        //     priority: 5,
        //     type: 'table'
        // },
        {
            url: 'http://hartha.com/api/chart-data/123-stackedareachart',
            priority: 3,
            type: 'stackedareachart'
        },
          {
            url: 'http://hartha.com/api/chart-data/123-pichart',
            priority: 3,
            type: 'pichart'
        },
    ],

    layout: {
        cell_width: .5,
        cell_height: '200px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [0, 1],
                to: [1, 2]
            },
            {
                from: [1, 0],
                to: [2, 1]
            },

            {
                from: [1, 1],
                to: [2, 2]
            },
        ]
    }, 

    layout_tablet: {
        cell_width: .5,
        cell_height: '140px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [0, 1],
                to: [1, 2]
            },
            {
                from: [1, 0],
                to: [2, 1]
            },
            {
                from: [1, 1],
                to: [2, 2]
            },

            {
                from: [2, 0],
                to: [4, 2]
            },

            {
                from: [4, 0],
                to: [6, 2],
            },
            {
                from: [6, 0],
                to: [8, 2],
            },
            {
                from: [8, 0],
                to: [10, 2],
            },
        ]
    },

    layout_mobile: {
        cell_width: 1,
        cell_height: '140px',
        gap: '20px',
        cellsMap: [
            {
                from: [0, 0],
                to: [1, 1]
            },
            {
                from: [1, 0],
                to: [2, 1]
            },
            {
                from: [2, 0],
                to: [3, 1]
            },
            {
                from: [3, 0],
                to: [4, 1]
            },

            {
                from: [4, 0],
                to: [6, 1]
            },

            {
                from: [6, 0],
                to: [8, 1],
            },
            {
                from: [8, 0],
                to: [10, 1],
            },
            {
                from: [10, 0],
                to: [12, 1],
            },
        ]
    }
}