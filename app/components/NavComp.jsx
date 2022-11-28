import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



export class NavComp extends React.Component {
    render() {
        return <Navbar  bg="warning" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Анализ плюсов - минусов</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Плюсы-минусы</Nav.Link>
                        <Nav.Link href="#link">Метод 4-ех что если</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>;

    }
}

export default NavComp;