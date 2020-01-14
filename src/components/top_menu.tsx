import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBCol, MDBRow,
    MDBDropdownItem, MDBIcon, MDBBadge, MDBContainer, MDBBtn,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter
} from "mdbreact"
import { useRouter } from 'next/router'
import styled from 'styled-components'



const Top_menu_comp = () => {
    const [isOpen, SetisOpen] = useState(false) /* toggle dropdown */

    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="api/theme/header.css" />
            </Head>
            <MDBNavbar id="top_menu_navbar" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">LOGO</strong>
                </MDBNavbarBrand>
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem className="top_menu_navbar_item">
                            Home
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>

            </MDBNavbar>

        </>
    )
}

export default Top_menu_comp

