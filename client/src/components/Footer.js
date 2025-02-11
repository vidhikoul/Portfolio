import React from 'react'
import "./Footer.css"
function Footer() {
  const year=new Date().getFullYear()
  return (
   <>
   <div className='footer'>
    <div className="container footer_container d-flex justify-content-around flex-wrap ">
      <div className='first mt-5'>
        <h4>Vidhi koul</h4>
        <p>@{year}Vidhi Koul All Rights Reserved</p>
        <p className='d-flex'>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-facebook mx-3'></i>

        </p>
      </div>
      <div className='second mt-5'>
        <h4> Get in touch</h4>
        <p>Lorem ipsum</p>
        <p>koulvidhi2@gmail.com</p>
        <p>+91 6006919839</p>


      </div>
      <div className="third mt-5"></div>
      <h4>About</h4>
      <p>Resume</p>

    </div>
   </div>
   </>
  )
}

export default Footer
