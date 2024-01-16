import React, { Fragment } from 'react'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
import Banner from '../banner/Banner'

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>   
      <main  className="min-height margin">
        {props.children}
      </main>   
      <footer>
        <Footer />
      </footer>
    </Fragment>
  )
}

export default Layout
