/** top menu data dummy */

const Top_menu_data = [
    {
        _id: 'm1',
        name: 'home',
        link: '#',
        dropdown: []
    },
    {
        _id: 'm2',
        name: 'how 2 pay',
        link: '#',
        dropdown: []
    },
    {
        _id: 'm3',
        name: 'member',
        link: '#',
        dropdown: [
            {
                _id: 'm1d1',
                name: 'account',
                link: '#0',
                dropdown: []
            },
            {
                _id: 'm1d2',
                name: 'orders',
                link: '#1',
                dropdown: [
                    {
                        _id: 'm1d2dd1',
                        name: 'The callback function accepts the following arguments:                        ',
                        link: '#intransit'
                    },
                    {
                        _id: 'm1d2dd2',
                        name: 'dropped',
                        link: '#dropped'
                    }
                ]
            },
            {
                _id: 'm1d3',
                name: 'address',
                link: '#',
                dropdown: []
            }
        ]
    },
    {
        _id: 'm4',
        name: 'contact us',
        link: '#',
        dropdown: []
    }
]

export default Top_menu_data