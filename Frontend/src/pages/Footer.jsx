import styles from './footer.module.scss';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';

function Footer() {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return (<>
        <div className="mb-5" />
        <Card className={"position-relative mt-auto bg-light border-0"}>
            <ListGroup>
                <Card.Header className="ps-4 py-4">
                    <Row>
                        <Col className="col-6">
                            <Link to="/" className="text-decoration-none text-dark d-inline-block">
                                <h4 className="fw-bold text-primary mb-1">BioStrive</h4>
                                <span className="text-muted fs-5">Emporia</span>
                            </Link>
                            <p className="text-dark mt-2">Agentic AI for Life Sciences Claims</p>
                        </Col>
                        <Col>
                            <h4 className="text-dark mb-3">Company</h4>
                            <Link to="/about" className="text-decoration-none text-dark d-block mb-2">About Us</Link>
                            <Link to="/contact-us" className="text-decoration-none text-dark d-block mb-2">Contact Us</Link>
                            <Link to="/pricing" className="text-decoration-none text-dark d-block mb-2">Pricing</Link>
                            <Link to="/demo" className="text-decoration-none text-dark d-block mb-2">Demo</Link>
                        </Col>
                        <Col>
                            <h4 className="text-dark mb-3">Contact</h4>
                            <p className="text-dark mb-1">📧 biostrive@biostrive.org</p>
                            <p className="text-dark mb-1">🌐 www.biostrive.org</p>
                            <p className="text-dark mb-0">Pilot Program: Oct 2025</p>
                        </Col>
                    </Row>
                </Card.Header>
                <ListGroup.Item className="text-center text-dark" variant="dark">© 2024, BioStrive | biostrive.org</ListGroup.Item>
            </ListGroup>
        </Card>
    </>);
}

export default Footer;