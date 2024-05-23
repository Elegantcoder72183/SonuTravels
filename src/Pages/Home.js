import React from 'react'
import Header from '../organisms/Header'
import PackagesForm from '../molecules/PackagesForm'
import TopDestinations from '../molecules/TopDestinations'
import Footer from '../organisms/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <PackagesForm />
      <TopDestinations />
      <Footer/>
    </div>
  )
}

export default Home
