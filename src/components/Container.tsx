import React from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact'
import styled from 'styled-components'

interface Con {
    title?: string
    children: React.ReactNode
    fluid?: boolean
    className?: string
}

const Container_Layout = ({ title, children, fluid, className }: Con) => (
    <MDBContainerCon fluid={fluid} className={className} style={{ minHeight: '100vh', maxWidth: '1500px' }}>
        <body>
            {/* <MDBCard > */}
            {/* <MDBCardBody > */}
            <MDBCardTitle>{title}</MDBCardTitle>
            {/* <MDBCardText > */}
            {children}
            {/* </MDBCardText> */}
            {/* </MDBCardBody> */}
            {/* </MDBCard> */}
        </body>
    </MDBContainerCon>
)

const MDBContainerCon = styled(MDBContainer)`
min-height: 100%;
`

export default Container_Layout