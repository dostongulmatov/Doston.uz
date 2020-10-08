import React from 'react'
import dostonImg from './images/dostonImg.jpg';
import {GitIcon, EmailIcon, TeleIcon, InstaIcon, TwitIcon, FaceIcon } from './icons'
import DostonGulmatov from "./images/DostonGulmatov.pdf"


const CenteredDiv = () => {
  return (
    <div className="centered-div">
      <img className="doston-img" src={dostonImg} alt="..." />
      <h1>Doston Gulmatov</h1>
      <p>Student and Front-end Developer</p>
      <div className="icons">
        <a className="social-icons" href="https://github.com/dostongulmatov"><GitIcon /></a>
        <a className="social-icons" href="mailto:icreateuz@gmail.com"><EmailIcon /></a>
        <a className="social-icons" href="https://t.me/gulmatovdoston"><TeleIcon /></a>
        <a className="social-icons" href="https://instagram.com/doston.gulmatov.01"><InstaIcon /></a>
        <a className="social-icons" href="https://twitter.com/doston2206"><TwitIcon /></a>
        <a className="social-icons" href="https://www.facebook.com/doston.gulmatov.7"><FaceIcon /></a>
      </div>
      <a href={ DostonGulmatov } alt="..." type="button" className="download-btn btn btn-outline-light">Download Resume</a>
    </div>
  )
}

export default CenteredDiv
