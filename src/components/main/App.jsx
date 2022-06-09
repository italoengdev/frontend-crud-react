import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Logo from "../template/Logo"
import Footer from "../template/Footer"
import Nav from "../template/Nav"

export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo/>
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  </BrowserRouter>
  