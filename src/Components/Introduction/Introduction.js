import { Col, Container, Row } from "react-bootstrap";
import "./Introduction.css";


export default function Introduction(params) {
    return (
        <div className="Introduction p3 p-lg-5 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="pl-2 text-center">
                            <span className="pt2- pb-4"> Bienvenido al generador de facturas</span>
                        </h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
