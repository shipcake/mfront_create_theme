import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import App, { Container } from "next/app"
//IMPORT MB BOOTSTRAP FOR REACT CSS STYLESHEETS
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"
// Require Font Awesome.
import 'font-awesome/css/font-awesome.css'
//nprogress
Router.events.on('routeChangeStart', url => {
    // console.log(`Loading: ${url}`)
    NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (

            <>
                <Head>
                    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' />
                </Head>
                <Component {...pageProps} />

            </>

        )
    }
}

export default MyApp