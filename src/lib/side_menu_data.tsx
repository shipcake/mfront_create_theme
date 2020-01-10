interface Side_menu_data_data_type {
    name: string
}

interface Side_menu_data_type {
    name: string,
    data: Array<Side_menu_data_data_type>
}

export const Side_menu_data = [
    {
        name: 'menu 1',
        data: [
            {
                name: 'sub menu1'
            },
            {
                name: 'sub menu2'
            },
        ]
    },
    {
        name: 'menu 2',
        data: [
            {
                name: 'sub menu1'
            },
            {
                name: 'sub menu2'
            },
        ]
    }
] as Array<Side_menu_data_type>