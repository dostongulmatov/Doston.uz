import React from 'react'
import IcreateImg from './images/IcreateImg.gif';


const Cards = () => {
  return (
    <div id="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="row">
        <div className="container-for-img col-lg-5">
          <img className="project-img" src={IcreateImg} width="100%"/>
        </div>
        <div className="container-for-project-info col-lg-7">
          <h4 className="projects-heading-container"><a  className="projects-heading" href="https://ICreate.uz">ICreate.uz</a>
          <span className="website-describtion-heading">This is my Portfolio website for only freelancing.</span></h4>
          <p>This is my first website that helped me to feel programming and to love it as a job.
          Maybe it doesn't have very good design
          (because I am not website designer),
          but I think that as my first website it is very good.It is my personal portfolio and it is very similar to 
          my Doston.uz website. I think when I start my freelancing team this website will really help me in order to attract people. The main aim
          of creating this website was "In Central Asia we have many people who are very smart and creative who work for very
          small amount  of money and some of them even can not find a job,
          I want them start their freelancing carrier because when they work for other countries, they can get
          paid more and learn new things every day while making a living"(Sorry for this but
          This project is Not completed and not published yet)</p>
          <div className="row">
            <button className="project-btn btn btn-sm btn-outline-primary col-lg-4">Go to Website</button>
            <button className="project-btn btn btn-sm btn-primary col-lg-4">Check Code</button>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Cards
