import React, {Component} from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Button from "react-bootstrap/cjs/Button";
import "./home.scss";

class Home extends Component {
    render() {
        return (
            <section>
                <Container fluid className="miniVan">
                    <Row className="align-self-center text-left">
                        <Col id="homeContainer">
                            <h1>
                                Travel planner <br/>
                                in your pocket
                            </h1>
                            <p>
                                TravelWiser is a new platform connecting the travel community & <br/>
                                all the functions you need from travel app
                            </p>
                            <Button id="destinationBtn" variant="primary">
                                Find a destination
                            </Button>
                            <Button id="tripBtn" variant="info">
                                Plan your trip
                            </Button>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Home;
