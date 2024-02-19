import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../assets/logo/Logo.png'

import './Navbar.css';

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="xl" className="navbar">
            <Container>
                <img src={Logo} className="imageLogo" alt="Logo"/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navbarCenter">
                        <Nav.Link href="/" className="navbarText">ACASĂ</Nav.Link>
                        <Nav.Link href="/" className="navbarText">DESPRE MINE</Nav.Link>
                        <Nav.Link href="/" className="navbarText">SERVICII</Nav.Link>
                        <Nav.Link href="/" className="navbarText">FEEDBACK</Nav.Link>
                        <Nav.Link href="/" className="navbarText">CONTACT</Nav.Link>
                    </Nav>
                    <Nav/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
