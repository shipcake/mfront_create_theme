import React, { useState, useMemo } from 'react'
import Head from 'next/head'
import NumberFormat from 'react-number-format'
import Link from 'next/link'
import Lightbox from 'react-image-lightbox'
import renderHTML from 'react-render-html'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import styled from 'styled-components'
import Moment from 'react-moment'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Card_product from '../components/Card_product'
import Top_menu_comp from '../components/top_menu'
import Footer from '../components/footer'
import Side_Menu from '../components/side_menu'
import Container_Layout from '../components/Container'
import find from 'lodash/find'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-image-lightbox/style.css'
import { MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact'
Moment.globalLocale = 'th'
import { Prod_data_Computer, } from '../lib/products_data'

const Product_page = (props) => {
    const [data, setdata] = useState({ name: '', description: '', coverimg: '', shortdescription: '', price: 0, showprice: 0, includevat: false })
    const [ImgisOpen, setImgisOpen] = useState(false) /* toggle images array */
    const [ImgisOpenCover, setImgisOpenCover] = useState(false) /* toggle cover image */
    const [attributesection, setattributesection] = useState('description') /* show attribute section */
    const [CoverImg, setCoverImg] = useState([]) /* cover image */
    const [ArrayImgFull, setArrayImgFull] = useState() /* array images */

    useMemo(() => {
        const FindData = find(Prod_data_Computer, { '_id': props.id })
        setdata(FindData)
    }, [])

    return (
        <>
            <Head>
                <title>description</title>
                <link rel="stylesheet" type="text/css" href="api/theme/product_detail.css" />
                <link rel="stylesheet" type="text/css" href="api/theme/body.css" />
            </Head>
            <Top_menu_comp />

            <Container_Layout fluid={true}>

                {/* cover image */}
                {ImgisOpenCover && <Lightbox
                    mainSrc={CoverImg[0]}
                    onCloseRequest={() => setImgisOpenCover(!ImgisOpenCover)}
                />}

                <MDBRow className="m-0">
                    {/* left section */}
                    <MDBCol size="12" lg="3" >
                        <Side_Menu />
                    </MDBCol>

                    {/* right section */}
                    <MDBCol size="12" lg="9" >
                        {/* crumb section */}
                        <MDBRow>
                            <MDBCol>
                                <MDBBreadcrumb id="prod_desc_crumb">
                                    <MDBBreadcrumbItem>สินค้า</MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </MDBCol>
                        </MDBRow>

                        {/* title section */}
                        <MDBRow>
                            <MDBCol><h1 id="prod_desc_title">{data.name}</h1></MDBCol>
                        </MDBRow>

                        {/* product section */}
                        <MDBRow>
                            {/* left product image */}
                            <MDBCol>
                                <MDBCol>
                                    <LazyLoadImage effect="blur" src={`/computer/${data.coverimg}`} className="img-fluid z-depth-1" draggable={false} />
                                </MDBCol>
                            </MDBCol>

                            <MDBCol lg="5" md="5" className="pt-3">
                                { /* short desciption */}
                                <MDBRow>
                                    <MDBCol><div id="prod_desc_shortdesc">{data.shortdescription}</div></MDBCol>
                                </MDBRow>

                                {/* normal price */}
                                <MDBRow>
                                    <MDBCol size="4"><div id="prod_desc_normalprice_txt">ราคาปกติ</div></MDBCol>
                                    <MDBCol> <div id="prod_desc_normalprice"><NumberFormat value={data.showprice} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} /> </div></MDBCol>
                                </MDBRow>

                                {/* price */}
                                <MDBRow>
                                    <MDBCol size="4"><div id="prod_desc_price_txt">ราคา</div></MDBCol>
                                    <MDBCol><div id="prod_desc_price"><NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2} /> </div> </MDBCol>
                                </MDBRow>

                                {/* show include vat */}
                                <MDBRow>
                                    <MDBCol>{data.includevat ? <div style={{ color: '#2e7d32' }}>ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว</div> : <div style={{ color: '#c62828' }}>ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่ม</div>}</MDBCol>
                                </MDBRow>

                                {/* add to cart */}
                                <MDBRow>
                                    <MDBCol size="4" className="p-2">
                                        <input type="number" step="1" min="1" max="99" className="form-control w-1" style={{ width: '70px' }} />
                                    </MDBCol>

                                    <MDBCol>
                                        <div id="prod_desc_btn_addtocart"> ลงตระกร้า</div>
                                    </MDBCol>
                                </MDBRow>

                            </MDBCol>
                        </MDBRow>

                            {/* description section */}
                            <MDBRow>
                                <MDBCol className="p-0" md="2" onClick={() => setattributesection('description')} selected={attributesection == 'description'}>
                                    <div id={attributesection == 'description' ? 'prod_desc_titledesc_frame_active' : 'prod_desc_titledesc_frame_inactive'} className="prod_desc_titledesc_frame">
                                        <h5>รายละเอียด</h5>
                                    </div>

                                </MDBCol>


                                <MDBCol className="p-0" md="2" onClick={() => setattributesection('attribute')}>
                                    <div id={attributesection == 'attribute' ? 'prod_desc_titledesc_frame_active' : 'prod_desc_titledesc_frame_inactive'} className="prod_desc_titledesc_frame">
                                        <h5>คุณสมบัติ</h5>
                                    </div>
                                </MDBCol>

                                <Title_description_line />
                            </MDBRow>

                    </MDBCol>
                </MDBRow>
            </Container_Layout>
                <Footer />
        </>
            )
        }
        
Product_page.getInitialProps = ({query}) => {
    return {id: query.id }
        }
        export default Product_page
        
        
        const Title_description_line = styled(MDBCol)`
        border-bottom: 2px dotted #ec407a;
        line-height: 1.1;
`