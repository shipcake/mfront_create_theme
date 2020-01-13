import React from 'react'
import styled from 'styled-components'
import { Side_menu_data } from '../lib/side_menu_data'
import Head from 'next/head'
const Side_Menu = () => {
    const id = ''
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="theme/side_menu.css" />
            </Head>
            <div id="side_menu_header"> <h5> ALL CATEGORIES</h5></div>
            {Side_menu_data.map((v, i) => (
                <>
                    <a style={{ color: "#747373" }}>
                        <div id="side_menu_group" className=" " key={i}><b><h6> {v.name} </h6> </b></div>
                    </a>

                    {v.data.map((o, i2) => (
                        <a style={{ color: "#747373" }}>
                            <div id="side_menu_cate" className=" " key={i2}> {o.name}</div>
                        </a>
                    )
                    )}
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