import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
function Header() {
    const common={
        marginRight:15,
        fontSize:17,
        letterSpacing:".5px"

    }
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <div>
                <h2 className='mt-2 h2_right' style={{color:"#6c63ff"}}>
                <Nav.Link href="#home">Vidhi Koul</Nav.Link>

                </h2>
            </div>
          
          <Nav className>
            <div>
            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
            <NavLink to="/playlist" className="text-decoration-none" style={common}>Projects</NavLink>
            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
           
            </div>
            <div>
            <Button variant="danger">Danger</Button>
            </div>
            
          </Nav>
        </Container>
      </Navbar>
      <br />
      
    </>
  )
}

export default Header
