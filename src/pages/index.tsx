import React, { useState } from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import Head from 'next/head'
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import Container_Layout from '../components/Container'
import Side_Menu from '../components/side_menu'
import { Prod_data_Computer } from '../lib/products_data'
import Card_product from '../components/Card_product'
import Top_menu_comp from '../components/top_menu'
import Footer from '../components/footer'

const Index_page = () => {
    return (
        <>
            <Head>
                <title>title</title>
            </Head>
            <Top_menu_comp />
            <Container_Layout fluid>
                <MDBRow className="m-0">

                    {/* section left */}
                    <MDBCol size="12" lg="3" className="m-0">
                        <Side_Menu />
                    </MDBCol>
                    {/* end section left */}

                    {/* section right */}
                    <MDBCol size="12" lg="9" className="m-0">
                        <MDBRow>
                            {Prod_data_Computer.map((v, i) => (
                                <MDBCol size="6" lg="3" xl="3" sm="6" className="p-0">
                                    <Card_product data={v} />
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBCol>
                    {/* end section right */}

                </MDBRow>
            </Container_Layout>
            <Footer />
        </>
    )
}

export default Index_page