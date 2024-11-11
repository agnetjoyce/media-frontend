import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
       <Navbar className="bg-warning p-3">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="" className='text-light fw-bolder fs-4 '>
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/2402/2402463.png"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            Rubix Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
