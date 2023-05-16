import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>별봉이네</Navbar.Brand>
                    <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
                        <Nav className="me-auto">
                            <Nav.Link>봉사정보</Nav.Link>
                            <Nav.Link>고객센터</Nav.Link>
                            <Nav.Link>이용방법</Nav.Link>
                            <Nav.Link>마이페이지</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;