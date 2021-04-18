import React, {Component} from 'react';
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Card from "react-bootstrap/cjs/Card";
import CardImg from "react-bootstrap/cjs/CardImg";
import grassland from "../../assets/img/grassland.jpg";
import earthShot from "../../assets/img/Earthshot-david-marcu-JasperNationalParkCanada-sq.jpg";
import denmark from "../../assets/img/Denmark-Copenhagen-1024x683.jpg";
import backing from "../../assets/img/tyson-dudley-vd7kvuDauoM-unsplash-1024x683.jpg";

class Blog extends Component {
    render() {
        return (
            <section>
                <Container className="pt-5">
                    <Row className="text-center">
                        <Col>
                            <h1>
                                Our blog
                            </h1>
                            <p>
                                Stories and tips written by us and our group of ambassadors<br/>
                                from all over the world
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardImg className="main-img" src={earthShot}/>
                                <Card.Title className="pt-4">
                                    Mountains of Babylon!
                                </Card.Title>
                                <Card.Text>
                                    The hills are large and wide. Some even reach up to 4km. from the<br/>
                                    ground level. <a href="/">Read more</a>
                                </Card.Text>
                                <Card.Footer>
                                    @May.Smith
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Row>
                                <Card>
                                    <Row>
                                        <Col lg={4}>
                                            <CardImg className="sm-img" src={grassland}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Card.Title>
                                                    Norway Hiking - dangerous & difficult but
                                                    extremely amusing
                                                </Card.Title>
                                            </Row>
                                            <Row>
                                                <Card.Footer>
                                                    @Egle.Leino
                                                </Card.Footer>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <Row>
                                        <Col lg={4}>
                                            <CardImg className="sm-img" src={denmark}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Card.Title>
                                                    New Year's Eve in Denmark | Evening full<br/>
                                                    of suprises
                                                </Card.Title>
                                            </Row>
                                            <Row>
                                                <Card.Footer>
                                                    @Toomas.Laigu
                                                </Card.Footer>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                            <Row>
                                <Card>
                                    <Row>
                                        <Col lg={4}>
                                            <CardImg className="sm-img" src={backing}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <Card.Title>
                                                    Ultimate backpacking travel guide<br/>
                                                    for men
                                                </Card.Title>
                                            </Row>
                                            <Row>
                                                <Card.Footer>
                                                    @Toomas.Laigu
                                                </Card.Footer>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        );
    }
}
export default Blog;
