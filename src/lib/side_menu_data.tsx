interface Side_menu_data_data_type {
    _id: string
    name: string
}

interface Side_menu_data_type {
    _id: string
    name: string
    data: Array<Side_menu_data_data_type>
}

export const Side_menu_data = [
    {
        _id: 'g1',
        name: 'menu 1',
        data: [
            {
                _id:'s1g1',
                name: 'sub menu1'
            },
            {
                _id:'s2g1',
                name: 'sub menu2'
            },
        ]
    },
    {
        _id: 'g2',
        name: 'menu 2',
        data: [
            {
                _id:'s1g2',
                name: 'sub menu1'
            },
            {
                _id:'s2g2',
                name: 'sub menu2'
            },
        ]
    }
] as Array<Side_menu_data_type>