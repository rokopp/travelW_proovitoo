import React, {Component} from 'react';
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Container from "react-bootstrap/cjs/Container";

class JoinPage extends Component {
    render() {
        return (
            <section>
                <div className="joinPageContainer">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h1 id="joinH1">
                                    Join our worldwide community <br/>
                                    of travelers
                                </h1>
                            </Col>
                        </Row>
                        <Row className="h-auto">
                            <Col>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        );
    }
}
export default JoinPage;
