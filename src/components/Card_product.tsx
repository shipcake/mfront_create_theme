import React, { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import NumberFormat from 'react-number-format'
import { MutationFn, } from 'react-apollo-hooks'
import { OperationVariables } from 'apollo-boost'
import Link from 'next/link'
// import HandleCart from './handle/savecart'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface Card_Type {
    data: {
        _id: string,
        name: string,
        shortdescription?: string,
        coverimg?: string,
        price: number,
        showprice: number,
        includevat: boolean,
    }
}

const Card_product = ({ data }: Card_Type) => {
    const Rename = data.name

    /* trurncate string more 45 charactor */
    const truncate_name = (name: string) => {
        // if (name.length > 45) {
        //     return name.substring(0, 45) + '...'
        // } else {
        //     return name
        // }
        return name
    }

    /* trurncate string more 80 charactor */
    const truncate_short = (text: string) => {
        // if (text && text.length > 45) {
        //     return text.substring(0, 80) + '...'
        // } else {
        //     return text
        // }
        return text
    }

    /* not load */

    return (

        <div className="prod_card_frame m-1">
            <Head>
                <link rel="stylesheet" type="text/css" href="theme/product_card.css" />
            </Head>
            <>
                {/* content */}
                <Link href={`/product_detail?id=${data._id}`}>
                    <a style={{ color: 'black' }}>
                        <div className="prod_card_container">
                            <div className="d-flex justify-content-center">
                                <Cover>
                                    <Imgcover effect="blur" className="xl-4" src={data.coverimg ? `/computer/${data.coverimg}` : '/static/no_img_cover.gif'} draggable={false} alt={data.name} title={data.name} />
                                </Cover>

                            </div>
                            <div className="prod_card_title"><span className="align-middle">{truncate_name(data.name)}</span></div>
                            <div className="prod_card_desc"><p>{truncate_short(data.shortdescription)}</p></div>
                            <div className="prod_card_showprice text-right"> <del><NumberFormat value={data.showprice} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} /></del></div>
                            <div className="prod_card_price text-right font-weight-bold"><NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} />.-</div>
                            <div> {data.includevat ? <div style={{ color: '#2e7d32', fontSize: 12 }}>ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว</div> : <div style={{ color: '#c62828', fontSize: 12 }}>ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่ม</div>}</div>
                        </div>
                    </a>
                </Link>
            </>
            <>
                {/* button */}
                <div className="prod_card_container">

                    <div className="prod_card_btn_buy p-2"><div className="d-flex justify-content-center"> สั่งซื้อ</div></div>

                </div>
            </>
        </div>

    )

}


const Cover = styled.div`
display:block;
margin:10px;
// min-height:170px;
width: 100%;
height: auto;
overflow: hidden;
text-align:center;
`
const Imgcover = styled(LazyLoadImage)`
width:100%;
height: 100%;
objectFit:cover;
`


///mobile sm size
const Div_sl_sm = styled.div`
width: 100%;
height: 320px;
// max-width:200px;
background:#f5f5f5;
padding:5px;
margin:3px;
cursor:pointer;
user-select: none;
:hover{
    background:#eeeeee;
}
`

export default Card_product