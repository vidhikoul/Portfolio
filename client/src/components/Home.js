import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
function Home() {
  return (
    <>
    <div className="container home_container">
        <div className="home_innerdiv">
        <div className="left_div">
            <h2>Welcome to <span style={{color:"#6c63ff"}}>Vidhi Koul's </span>Portfolio</h2>
            <p style={{color:"#666",letterspacing:".5px",marginTop:2}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!

            </p>
            <div className="btn_div mt-4">
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#2f2d69",marginRight:24}}>Resume</Button>
            <Button variant="danger" style={{letterSpacing:"1px",border:"none",borderRadius:4,background:"#6c63ff",marginRight:24}}>Resume</Button>
            </div>
        </div>
        <div className="right_div">
            <img src="pic.jpeg" alt=""/>
        </div>
     
        </div>
    </div>
    </>
  )
}

export default Home
