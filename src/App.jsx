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
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import CauseDetail from './pages/CauseDetail'
import EventDetail from './pages/EventDetail'
import BlogDetail from './pages/BlogDetail'

export default function App() {
  return <>
  <Header/>
  <ScrollToTop/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>}/>
    <Route path='services' element={<Services/>}/>
    <Route path='causes' >
    <Route path='' element={<Causes/>}/>
    <Route path=":slug" element={<CauseDetail />} />
    </Route>
    <Route path='events' >
      <Route path='' element={<Events/>}/>
    <Route path=":slug" element={<EventDetail />} />
    </Route>
    <Route path='contact' element={<Contact/>}/>
    <Route path='blog'>
    <Route path='' element={<Blog/>}/>
    <Route path=":slug" element={<BlogDetail />} />
    </Route>
    <Route path='donation' element={<Donations/>}/>
    <Route path='404' element={<Error/>}/>
    <Route path='gallery' element={<Gallery/>}/>
    <Route path='volunteers' element={<Volunteers/>}/>
  </Routes>
  <Footer/>
  </>
}
