import React from 'react'
import {GitIcon, EmailIcon, TeleIcon, InstaIcon, TwitIcon, FaceIcon } from './icons'



const Footer = () => {
  return (
    <div id="footer-part">
      <div className="row">
        <div className="aboutMe-section col-lg-5">
          <h4>About Me!</h4>
          <p>I am Gulmatov Doston 19 years old boy, who has very high dreams.
          I like Coding and Coffee. I am from Uzbekistan, Tashkent, Angren. You know Angren is Industrial city, 
          but I want to change it into Silicon Valley of Uzbekistan. Thank you for looking at my website.
          Please leave comment if you have any kind of opinions about my website or if you want to work with me.
          (Let's make difference and Make the world better to live together!)</p>
          {/* <ol>
              <li>
                <h3>Find Problem any problem of the World.</h3>
              </li>
              <li>
                <h3>Take Action and solve it.</h3>
              </li>
              <li>
                <h3>Get result</h3>
              </li>

            </ol> */}
          <div className="contact-part">
          <a href="https://github.com/dostongulmatov" className="contact-icon"><GitIcon /></a>
          <a href="mailto:icreateuz@gmail.com" className="contact-icon"><EmailIcon /></a>
          <a href="https://t.me/gulmatovdoston" className="contact-icon"><TeleIcon /></a>
          <a href="https://instagram.com/doston.gulmatov.01" className="contact-icon"><InstaIcon /></a>
          <a href="https://twitter.com/doston2206" className="contact-icon"><TwitIcon /></a>
          <a href="https://www.facebook.com/doston.gulmatov.7" className="contact-icon"><FaceIcon className="icon-class"/></a>        
        </div>

        </div>
        <div className="comment-area col-lg-5">
          <form>
            <input type="email" id="txtEmail" class="email-input" placeholder="Email"/><br /><br />
            <textarea placeholder="SORRY NOT WORKING FOR NOW PLEASE WRITE TO MY TELEGRAM ACCOUNT. THANK YOU!" id="msg" /><br /><br />
            <button class="opinion-submit btn btn-sm btn-primary" type="submit">Send Message</button>
          </form>
        </div>

      </div>
      <p className="copyright-text">Copyright ICreate 2020. All rights reserved</p>
    </div>

  )
}

export default Footer
