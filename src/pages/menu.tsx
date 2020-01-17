import { useState } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import { CSSTransition } from 'react-transition-group'
import { MDBIcon } from 'mdbreact'
import Top_menu_data from '../lib/top_menu_data'
import AnimateHeight from 'react-animate-height'
import { MDBRow, MDBCol } from 'mdbreact'

const Menu_test = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="/testmenu.css" />
                <link rel="stylesheet" type="text/css" href="/testmenu_mobile.css" />
            </Head>
            <div id="top_menu_container" className="d-none d-md-block">
                <MDBRow className="m-0">
                    {/* normal menu (left section) */}
                    <MDBCol size="7">
                        {Top_menu_data.map(v => (
                            v.dropdown.length ?
                                /** is dropdown */

                                <div className="top_menu">
                                    <button className="top_menu_btn">{v.name} <MDBIcon icon="caret-down" /></button>

                                    <div className="top_menu_content">

                                        {v.dropdown.map(vd => (

                                            <Link href={vd.link}>
                                                {vd.dropdown.length ?
                                                    /** stack menu */
                                                    <a className="top_menu_stack">
                                                        {/* <div> */}
                                                        {vd.name} <MDBIcon icon="caret-right" />
                                                        <div className="top_menu_content_stack">
                                                            {vd.dropdown.map(vdd => (
                                                                <Link href={vdd.link}><a>{vdd.name}</a></Link>
                                                            ))}
                                                        </div>
                                                        {/* </div> */}

                                                    </a>
                                                    :
                                                    <a>{vd.name}</a>
                                                }
                                            </Link>

                                        ))}
                                    </div>

                                </div>

                                :
                                /** normal */
                                <div className="top_menu">
                                    <Link href={v.link}>
                                        <a><button className="top_menu_btn">{v.name}</button></a>
                                    </Link>
                                </div>


                        ))}
                    </MDBCol>
                    {/* end normal menu (left section) */}

                    {/* member menu (right section) */}
                    <MDBCol size="5">
                        <div className="top_menu_member_container">

                            {/** search container */}
                            {/* <form action="/search"> */}
                            <div id="top_menu_search_container">
                                <input id="top_menu_search_input" type="text" placeholder="ค้นหาสินค้า" />
                            </div>
                            {/* </form> */}
                            {/** cart icon */}<Link href="#"><a><span id="top_menu_member_item_cart"><MDBIcon hover icon="shopping-cart" size="2x" /></span></a></Link>
                            {/** badge cart */}  <div id="top_menu_member_item_cart_badge" className="top_menu_member_item">99</div>
                        </div>
                    </MDBCol>
                    {/* end member menu (right section) */}
                </MDBRow>

            </div>

            {/* mobile menu */}
            <Menu_test_mobile_component />
        </>
    )
}

const Menu_test_mobile_component = () => {
    const [isOpen, setisOpen] = useState(false) /** open toggle mobile */
    const [isOpenIDLv0, setisOpenIDLv0] = useState('') /** keep clicked id level 0*/
    const [isOpenIDLv1, setisOpenIDLv1] = useState('') /** keep clicked id level 1*/

    const onClickBtnLevel0 = (props) => {
        if (isOpenIDLv0 == '') {
            setisOpenIDLv0(props._id)
        } else {
            setisOpenIDLv0('')
        }
    }

    const onClickBtnLevel1 = (props) => {
        if (isOpenIDLv1 == '') {
            setisOpenIDLv1(props._id)
        } else {
            setisOpenIDLv1('')
        }
    }

    return (
        <div id="top_menu_mobile_container" className="d-block d-md-none">
            <span onClick={() => setisOpen(!isOpen)}>
                <MDBIcon size="2x" id={isOpen ? 'top_menu_content_mobile_toggle_active' : 'top_menu_content_mobile_toggle'} icon={isOpen ? 'times' : 'bars'} />
            </span>

            <AnimateHeight duration={500} height={isOpen ? 'auto' : '0'}>
                {Top_menu_data.map(v => (
                    v.dropdown.length ?
                        /** is dropdown (mobile) */
                        <div className="top_menu_mobile">
                            <button onClick={() => onClickBtnLevel0(v)} className="top_menu_mobile_btn">{v.name}  <MDBIcon icon="caret-down" /></button>

                            <AnimateHeight height={isOpenIDLv0 == v._id ? 'auto' : '0'}>
                                <div className="top_menu_mobile_content">
                                    {v.dropdown.map(vd => (
                                        vd.dropdown.length ?
                                            /** dropdown with stack menu (mobile) */
                                            <div>
                                                <div onClick={() => onClickBtnLevel1(vd)} className={isOpenIDLv1 == vd._id ? 'top_menu_mobile_stack_active' : 'top_menu_mobile_stack'}>{vd.name}  <MDBIcon icon="caret-down" /></div>
                                                <AnimateHeight height={isOpenIDLv1 == vd._id ? 'auto' : '0'}>
                                                    <div className="top_menu_mobile_content_stack">
                                                        {vd.dropdown.map(vdd => (
                                                            <Link href={vdd.link}><a>{vdd.name}</a></Link>
                                                        ))}
                                                    </div>
                                                </AnimateHeight>
                                            </div>
                                            :
                                            /** normal dropdown */
                                            <a className={isOpenIDLv1 == vd._id ? 'top_menu_mobile_stack_active' : 'top_menu_mobile_stack'}><div style={{ color: 'white' }}>{vd.name}</div></a>
                                    ))}
                                </div>
                            </AnimateHeight>

                        </div>

                        :
                        /** normal menu (mobile) */
                        <div className="top_menu_mobile">
                            <Link href={v.link}>
                                <a><button className="top_menu_mobile_btn">{v.name}</button></a>
                            </Link>
                        </div>
                ))}
                {/** badge cart and icon */}<div id="top_menu_mobile_member_item_cart">99<Link href="#"><a><span id="top_menu_mobile_member_item_cart_icon"><MDBIcon hover icon="shopping-cart" size="2x" /></span></a></Link></div>
                {/** search container */}
                {/* <form action="/search"> */}
                <div id="top_menu_mobile_search_container">
                    <input id="top_menu_mobile_search_input" type="text" placeholder="ค้นหาสินค้า" />
                </div>
                {/* </form> */}

            </AnimateHeight>
        </div>
    )
}

export default Menu_test