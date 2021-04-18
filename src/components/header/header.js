import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/footer_logo.svg";
import Button from "react-bootstrap/cjs/Button";

class Header extends Component {
    render() {
        return (
            <Navbar bg="transparent" variant="light">
                <Navbar.Brand className="mr-5" href="#home">
                    <img
                        src={logo}
                        width="176"
                        height="30"
                        className="d-inline-block align-top"
                        alt="TravelWiser logo"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto ml-5 align-content-center">
                    <Nav.Link className="mt-2 mr-4" href="#home">Find destination</Nav.Link>
                    <Nav.Link className="mt-2 mr-4" href="#planyourtrip">Plan your trip</Nav.Link>
                    <Nav.Link className="mt-2 mr-4" href="#blog">Blog</Nav.Link>
                    <Nav.Link className="mt-2 mr-4" href="#community">Community</Nav.Link>
                    <Nav.Link href="#login">
                        <Button variant="outline-primary">
                            Login
                        </Button>
                    </Nav.Link>
                    <Nav.Link href="#signup">
                        <Button>
                            Sign up
                        </Button>
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
