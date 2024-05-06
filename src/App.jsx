import React from 'react'
import Header from './components/common/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Causes from './pages/Causes'
import Contact from './pages/Contact'
import About from './pages/About'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Donations from './pages/Donations'
import Gallery from './pages/Gallery'
import Volunteers from './pages/Volunteers'
import Error from './pages/Error'

export default function App() {
  return <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='causes' element={<Causes/>}/>
    <Route path='events' element={<Events/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='donation' element={<Donations/>}/>
    <Route path='404error' element={<Error/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='volunteers' element={<Volunteers/>}/>
  </Routes>
  </>
}
