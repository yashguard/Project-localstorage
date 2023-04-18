import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
   return (
      <>
         <Navbar className='py-3' bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home">
                  <img
                     alt=""
                     src="https://react-bootstrap.github.io/logo.svg"
                     width="30"
                     height="30"
                     className="d-inline-block align-top"
                  />{' '}
                  React Bootstrap
               </Navbar.Brand>
               <Nav>
                  <Nav.Link className='px-3' href="#home">Home</Nav.Link>
                  <Nav.Link className='px-3' href="#features">Features</Nav.Link>
                  <Nav.Link className='px-3' href="#pricing">Pricing</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <section className='bg-section'>
            <Container>
               <Row className='align-items-center'>
                  <Col>
                     <img src="https://images.pexels.com/photos/3747137/pexels-photo-3747137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </Col>
                  <Col>
                     <h1>Create your list for making life easy.</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem officia sapiente est quibusdam architecto ab voluptatem error debitis nesciunt, molestiae cum deserunt ullam quaerat optio ut illo laborum molestiae cum deserunt ullam quaerat optio ut illo laborum.</p>
                     <button className='login'>Login Page</button>
                     <button>Show List</button>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   )
}

export default Home
