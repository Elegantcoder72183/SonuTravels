import React from 'react'
import Header from '../organisms/Header'
import TopDestinations from '../molecules/TopDestinations'
import Test from '../atoms/Test'
import GoBeyoundImagination from '../molecules/GoBeyoundImagination'
import ContactUsNow from '../atoms/ContactUsNow'
import Footer from '../organisms/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <TopDestinations />
      <GoBeyoundImagination />
      <ContactUsNow />
      {/* <Test /> */}
      <Footer/>
    </div>
  )
}

export default Home
