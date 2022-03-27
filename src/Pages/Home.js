import React from 'react'
import Carousel from '../Components/Layout/Carousel'
import Nav from '../Components/Layout/Nav'
import Footer from '../Footer'
import './home.css'
import Product from './Product'
const Home = () => {
  return (
    <>
    <Nav/>
    <Carousel/>
    <Product/>
    <Footer/>
    </>
  )
}

export default Home