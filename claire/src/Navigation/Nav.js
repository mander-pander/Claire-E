import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { useState } from 'react';
import styles from './Nav.module.css';

function Navigation(props) {
  const [expanded, setExpanded] = useState(false);

  function handleClick(location) {
    props.setLocation(location);
    setExpanded(false);
  };

  return (
    <Navbar className={styles.sidebar} expanded={expanded} expand="md">
      <Container>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'center', textAlign: 'center'}}>
          <Nav style={{ flexDirection: 'column' }}>
            <Nav.Link onClick={() => handleClick('Home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleClick('About')}>About</Nav.Link>
            <Nav.Link onClick={() => handleClick('Lessons')}>Lessons</Nav.Link>
            <Nav.Link onClick={() => handleClick('Composition')}>Composition</Nav.Link>
            <Nav.Link onClick={() => handleClick('MusicCatalogue')}>Music Catalogue</Nav.Link>
            <Nav.Link onClick={() => handleClick('Recordings')}>Recordings</Nav.Link>
            <Nav.Link onClick={() => handleClick('Contact')}>Contact Me</Nav.Link>
            <Nav.Link href="https://www.instagram.com/themusicofclaire/" target="_blank">
              <BsInstagram />
            </Nav.Link>
            <Nav.Link>
              <BsSpotify />
            </Nav.Link>
            <Nav.Link>
              <BsYoutube />
            </Nav.Link>
            <Nav.Link href="https://www.tiktok.com/@themusicofclaire" target="_blank">
              <TbBrandTiktok />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation;
