import React, { useState, useGlobal, useEffect } from 'reactn'
import styled from 'styled-components'
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact'
import renderHTML from 'react-render-html'
import Link from 'next/link'
import Head from 'next/head'

const Footer = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="api/theme/footer.css" />
            </Head>
            <MDBContainer fluid className="p-0">
                <div id="footer_container">
                    <MDBRow className="p-0 m-0">
                        <MDBCol size="12" md="6" sm="12" lg="2">
                            <div className="footer_items">
                                <MDBIcon className="footer_mdbicon align-middle" fab icon="facebook-square" size='2x' />
                            </div>
                        </MDBCol>

                        <MDBCol size="12" md="6" sm="12" lg="2">
                            <div className="footer_items">
                                <MDBIcon className="footer_mdbicon align-middle" fab icon="line" size='2x' /> modernsave
                                </div>
                        </MDBCol>

                        <MDBCol size="12" md="6" sm="12" lg="2">
                            <div className="footer_items">
                                <MDBIcon className="footer_mdbicon align-middle" icon="phone" size='2x' /> 02-591-1800
                                    </div>
                        </MDBCol>

                        <MDBCol size="12" md="6" sm="12" lg="2">
                            <div className="footer_items">
                                <MDBIcon className="footer_mdbicon align-middle" icon="mobile" size='2x' />  090-678-6442 คุณท็อป
                                        </div>
                        </MDBCol>

                        <MDBCol size="12" md="6" sm="12" lg="2">
                            <div className="footer_items">
                                <Link href="https://goo.gl/maps/82xCg1nxDvvM1dzY7" >
                                    <a target="_blank">
                                        <MDBIcon id="footer_mdbicon" className="lign-middle" icon="map-marker" size='2x' /> บริษัท โมเดิร์นเซฟ อินเตอร์เทรด จำกัด
                            </a>
                                </Link>
                            </div>

                        </MDBCol>
                    </MDBRow>
                </div>

                <div id="footer_container_copyright">
                    <MDBRow className="p-0 m-0">
                        <MDBCol>
                            <div className="d-flex justify-content-center">
                                <p>© 2019 modernsave Co.,Ltd  All rights reserved.</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        </>
    )
}

export default Footer