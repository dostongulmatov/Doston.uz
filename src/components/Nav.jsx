import React from 'react'

const Nav = () => {
return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="doston-logo navbar-brand" href="https://doston.uz">Doston.uz</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" 
      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="middle-link navbar-nav my-lg-0">
          <li className="nav-item ">
            <a className="nav-link btn-lg" href="Tel: 996368565">

            +998943698565</a>
          </li>
        </ul>
        <ul className="right-link navbar-nav mt-lg-1">
          <li className="nav-item">
            <a className="nav-link" href="#home-section">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-section">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-part">Skills & Edu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer-part">About Me</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>)}

export default Nav
