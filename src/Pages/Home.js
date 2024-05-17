import React from 'react'
import Header from '../organisms/Header'
import PackagesForm from '../molecules/PackagesForm'
import TopDestinations from '../molecules/TopDestinations'

const Home = () => {
  return (
    <div>
      <Header />
      <PackagesForm />
      <TopDestinations />
    </div>
  )
}

export default Home
