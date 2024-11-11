import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <>
    {/* head */}

      <Row className="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
        <h1 style={{color:"white",fontSize:"40px"}}>Welcome to <span className='text-warning'>Rubix Media Player</span>
        </h1>
        <p>Play all your favorite videos and music effortlessly. With intuitive controls, playlist options, 
          and high-quality playback, Rubix makes enjoying your media simple and seamless. 
          Dive into an unmatched viewing and listening experience!"</p>
          <Link style={{textDecoration:"none"}} to={'/home'} className="btn btn-info">Get Started</Link>
        </Col>
        <Col lg={5}>
        <img src="https://img.freepik.com/free-vector/social-media-video-player-template-design_1017-36896.jpg" alt="" />  
        </Col>
        <Col></Col>
      </Row>
    {/* Cards */}

      <div className='container mt-3 mb-5 d-flex justify-content-center align-items-center flex-column w-100'>
       <h2 className='text-center text-warning'>Features</h2>
       <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://upload.wikimedia.org/wikipedia/commons/3/38/VLC_icon.png" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://upload.wikimedia.org/wikipedia/en/9/98/FinderBigSur.png" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://cdn-icons-png.flaticon.com/512/4404/4404094.png" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

       </div>
      </div>

      {/* details */}

      <div className="container border d-flex align-items-center justify-content-center mt-5 p-4">
        <div className="col-1g-5">
        <h4 className='text-warning fw-bolder'>Simple, Powerful & Fast</h4>
        <h6 className='m-5'><span className='text-warning fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nemo recusandae sit consequuntur voluptatum est quam, sequi aperiam mollitia esse vero beatae doloribus incidunt amet voluptates distinctio odit non tempore.
        </h6>

        <h6 className='m-5'><span className='text-warning fw-bolder'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nemo recusandae sit consequuntur voluptatum est quam, sequi aperiam mollitia esse vero beatae doloribus incidunt amet voluptates distinctio odit non tempore.
        </h6>
 
        <h6 className='m-5'><span className='text-warning fw-bolder'>Managing Videos</span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nemo recusandae sit consequuntur voluptatum est quam, sequi aperiam mollitia esse vero beatae doloribus incidunt amet voluptates distinctio odit non tempore.
        </h6>

        </div>

        <div className="col-1g-5 ms-2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/61zI4eE92xM?si=C1FpNwy_rkhXcpdp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/S6qznDLlHRQ?si=NitTYwnBcqnBpi3P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>


    </>
  )
}

export default LandingPage
