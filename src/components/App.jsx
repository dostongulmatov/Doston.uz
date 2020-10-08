import React from 'react'
import CenteredDiv from './CenteredDiv';
import Nav from "./Nav"
import Cards from "./Cards"
import Skills from "./skills"
import Footer from "./Footer"

const App = () => {
  return (
    <div>
      <div id="home-section">
        <Nav />
        <CenteredDiv />
      </div>
        <Cards />
        <Skills />
        <Footer />
    </div>
  )
}

export default App

