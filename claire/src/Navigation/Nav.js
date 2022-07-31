import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {

    function handleClick(location) {
        props.setLocation(location);
    };

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleClick('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleClick('About')}>About</Nav.Link>
            <Nav.Link onClick={() => handleClick('Lessons')}>Lessons</Nav.Link>
            <Nav.Link onClick={() => handleClick('Composition')}>Composition</Nav.Link>
            <Nav.Link onClick={() => handleClick('MusicCatologue')}>Music Catologue</Nav.Link>
            <Nav.Link onClick={() => handleClick('Recordings')}>Recordings</Nav.Link>
            <Nav.Link onClick={() => handleClick('Contact')}>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
