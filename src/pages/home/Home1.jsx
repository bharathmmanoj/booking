import React from 'react'
import "./home1.css"
import Navbar from '../../components1/navbar/Navbar'
import Header from '../../components1/header/Header'
import Featured from '../../components1/featured/Featured'
import PropertyList from '../../components1/propertyList/PropertyList'
import FeaturedProperties from '../../components1/featuredProperties/FeaturedProperties'
import MailList from '../../components1/mailList/MailList'
import Footer from '../../components1/footer/Footer'

function Home1() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home1