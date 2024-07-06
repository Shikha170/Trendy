import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreCloth from '../../components/ExploreCloth/ExploreCloth'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ExploreCloth/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
