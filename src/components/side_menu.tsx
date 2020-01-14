import React, { useState } from 'react'
import styled from 'styled-components'
import { Side_menu_data } from '../lib/side_menu_data'
import Head from 'next/head'
const Side_Menu = () => {
    const [click, setclick] = useState('') /** keep id */
    console.log(click)
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="api/theme/side_menu.css" />
            </Head>
            <div id="side_menu_header"> <div id="side_menu_header_content"> <h5> ALL CATEGORIES</h5></div> </div>
            {Side_menu_data.map((v, i) => (
                <>
                    <a style={{ color: "#747373" }}>
                        <div onClick={() => setclick(v._id)} id={v._id == click ? 'side_menu_group_active' : 'side_menu_group'} className=" " key={v._id}><b><h6> {v.name} </h6> </b></div>
                    </a>

                    {
                        v.data.map((o, i2) => (
                            <a style={{ color: "#747373" }}>
                                <div onClick={() => setclick(o._id)} id={o._id == click ? 'side_menu_cate_active' : 'side_menu_cate'} className=" " key={o._id}> {o.name}</div>
                            </a>
                        )
                        )
                    }
                </>
            )
            )}

        </>)
}

// const Group_div = styled.div<{ active?: boolean }>`
// color:white;
// background-color:${props => props.active ? '#59698d' : '#424242'};
// :hover{
//     background-color:${props => props.active ? '#1c2a48' : '#616161'} ;
// }
// `
// const Cate_div = styled.div<{ active?: boolean }>`
// color:${props => props.active ? 'white' : ''};
// background-color:${props => props.active ? '#5d4037' : '#fafafa'};
// :hover{
//     background-color:${props => props.active ? '#6d4c41' : '#efebe9'};
// }
// `
export default Side_Menu