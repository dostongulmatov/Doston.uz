import React from 'react'
import skillImg from "./images/skillImg.png"

const Skills = () => {
  return (
  <div className="skills-part" id="skills-part">
    <div className ="row">
      <div className="skills col-lg-6">
      <h1 className="skills-heading">Skills</h1>
        <div className="row">
          <h5 className="learned-skills col-lg-5">
          HTML5</h5>
          <h5 className="learned-skills col-lg-5">
          CSS, SaSS and LESS</h5>
        </div>
        <div className="row">
          <h5 className="learned-skills col-lg-5">
          Bootstrap 4, React-Bootstrap</h5>
          <h5 className="learned-skills col-lg-5">
          Material UI</h5>
        </div>
        <div className="row">
          <h5 className="learned-skills col-lg-5">
          JavaScript</h5>
          <h5 className="learned-skills col-lg-5">
          React and Redux</h5>
        </div>
      <img src={skillImg} alt="..." width="100%" height="300px"/>
      </div>
      <div className="education col-lg-6">
        <div>
        <h1 className="skills-heading">Education</h1>

          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box">2017-2019, Studied Angren Academic Lyceum(Natural Sciences faculty)</p>
          </div>
          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box">2020-current, Studying in the field of 
            Computer Science and engineering(4 year course).</p>
          </div>
          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box">2019-2020, Finished 1 year foundation course 
            At Amity university Tashkent(In this course we learned Math, English and some concepts of programming.)</p>
          </div>
          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box">Now learning Back-end development and Database Development(Node.js, Express.js, MongoDB, Sql)</p>
          </div>
          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box">2020 - Finished Udemy Full-stack 
            Web development Bootcamp(only front-end part) Learned. JS, Bootstrap, React</p>
          </div>
          <div className="education-containers col-lg-6 col-sm-12">
            <p className="education-box"> “No two things have been combined better than knowledge and patience.” - Prophet Muhammad (peace be upon him)
            So have patience and Never Stop Learning.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills