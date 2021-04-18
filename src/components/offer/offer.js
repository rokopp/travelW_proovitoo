import React, {Component} from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";

class Offer extends Component {
    render() {
        return (
            <section>
                <Container fluid className="standingWaterFall">
                    <Row className="align-self-center text-left">
                        <Col>

                        </Col>
                        <Col id="offerContainer">
                            <h1 className="font-weight-bold">
                                Everything in one app
                            </h1>
                            <p>
                                Including finding inspiration for next adventures, we help with
                                planning and booking. After learning your travel interests and
                                hobbies, our large data bank and clever AI is putting together the
                                perfect trip.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container className="weCanOffer">
                    <Row className="align-self-center text-center pb-5">
                        <Col>
                            <h2>
                                What we can offer you
                            </h2>
                        </Col>
                    </Row>
                    <Row className="align-self-center text-center">
                        <Col>
                            <Card className="shadow-lg p-3  bg-white rounded">
                                <Card.Title>
                                    Inspiration
                                </Card.Title>
                                <Card.Text className="pt-3">
                                    We want to inspire people to
                                    travel more and explore the
                                    beauty of the Earth
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow-lg p-3  bg-white rounded">
                                <Card.Title>
                                    Shared experiences
                                </Card.Title>
                                <Card.Text className="pt-3">
                                    We are building a community
                                    where you can share your
                                    exploration
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="shadow-lg p-3  bg-white rounded">
                                <Card.Title>
                                    Tailored travels
                                </Card.Title>
                                <Card.Text className="pt-3">
                                    Everybody have their ideas of
                                    perfect travels and we help them
                                    happen!
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
export default Offer;
