export interface Prod_data_Computer_type {
    _id: string,
    name: string,
    shortdescription: string,
    description: string,
    showprice: number,
    price: number,
    includevat: boolean,
    coverimg: string,
    add_date: string,
    mofified_date: string
}

export const Prod_data_Computer = [
    {
        _id: '1',
        name: 'ASUS ROG STRIX HERO III G531GW-AZ288T',
        shortdescription: 'CPU : INTEL CORE I7-9750H RAM : 16 GB (8GB X2) DDR4 2666MHz STORAGE : 512 GB PCIe/NVMe M.2 SSD',
        description: 'test',
        showprice: 56900,
        price: 55900,
        includevat: true,
        coverimg: '20200108104513_36247_287_1.png',
        add_date: '1571646592',
        mofified_date: '1575001620'
    },
    {
        _id: '2',
        name: 'ANDA SEAT DARK SERIES (AD12XL-DARK-B-PV/C-PRO) (DARK KNIGHT)',
        shortdescription: 'GAMING CHAIR',
        description: 'test',
        showprice: 16900,
        price: 15900,
        includevat: true,
        coverimg: '2019012213202132803_1.png',
        add_date: '1571646592',
        mofified_date: '1575001620'
    },
    {
        _id: '3',
        name: 'ASUS ZENBOOK FLIP 14 UX463FL-AI024T (GRAY)',
        shortdescription: 'CPU : INTEL CORE I7-10510U RAM : 8 GB (ON-BOARD) STORAGE : 512 GB PCIe/NVMe M.2 SSD',
        description: 'test',
        showprice: 36900,
        price: 35900,
        includevat: true,
        coverimg: '2020010311281836224_1.png',
        add_date: '1571646592',
        mofified_date: '1575001620'
    }
] as Array<Prod_data_Computer_type>
