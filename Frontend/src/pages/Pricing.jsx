import styles from './pricing.module.scss';
import { Card, Row, Col, Button, Badge, ListGroup } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';

function Pricing() {
    return <>
        {/* Hero Section */}
        <ContentBlock mt="25" mb="10" content={<>
            <div className="text-center">
                <h1 className="display-3 fw-bold text-primary mb-4">Pricing Plans</h1>
                <p className="lead fs-4 text-muted mb-5">
                    Transparent, tiered pricing with enterprise-priced packages
                </p>
                <p className="fs-5 text-muted">
                    Customers have the opportunity to pilot Emporia at a rate negotiable based on needs
                </p>
            </div>
        </>} />

        {/* Pricing Cards */}
        <ContentBlock mt="5" mb="5" content={<>
            <Row className="g-4">
                {/* Standard Plan */}
                <Col lg={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <h3 className="fw-bold text-primary mb-3">Standard</h3>
                            <div className="mb-4">
                                <span className="display-4 fw-bold text-dark">$55,000</span>
                                <span className="text-muted fs-5">/year</span>
                            </div>
                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Basic matrix output capabilities
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Capped literature searches
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Limited claims generation
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="outline-primary" size="lg" className="w-100">
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Premium Plan */}
                <Col lg={4}>
                    <Card className="h-100 border-primary shadow position-relative">
                        <Badge bg="primary" className="position-absolute top-0 start-50 translate-middle px-3 py-2">
                            Most Popular
                        </Badge>
                        <Card.Body className="p-4 text-center">
                            <h3 className="fw-bold text-primary mb-3">Premium</h3>
                            <div className="mb-4">
                                <span className="display-4 fw-bold text-dark">$80,000</span>
                                <span className="text-muted fs-5">/year</span>
                            </div>
                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Expanded matrix output capabilities
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Increased literature searches
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Expanded claims generation
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="primary" size="lg" className="w-100">
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Executive Plan */}
                <Col lg={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 text-center">
                            <h3 className="fw-bold text-primary mb-3">Executive</h3>
                            <div className="mb-4">
                                <span className="display-4 fw-bold text-dark">$100,000</span>
                                <span className="text-muted fs-5">/year</span>
                            </div>
                            <ListGroup variant="flush" className="mb-4">
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Unlimited matrix output capabilities
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Unlimited literature searches
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Advanced competitive analysis
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 px-0">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    Unlimited claims generation
                                </ListGroup.Item>
                            </ListGroup>
                            <Button variant="outline-primary" size="lg" className="w-100">
                                Get Started
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Commercial Impact */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-5">Commercial Impact</h2>
                    <Row className="g-4 text-center">
                        <Col md={4}>
                            <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">$</span>
                            </div>
                            <h4 className="fw-bold">Revenue Growth</h4>
                            <p className="text-muted">Increase revenue by $200M - $800M per product</p>
                        </Col>
                        <Col md={4}>
                            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">%</span>
                            </div>
                            <h4 className="fw-bold">Cost Reduction</h4>
                            <p className="text-muted">Reduce commercialization costs by 15%</p>
                        </Col>
                        <Col md={4}>
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">⚡</span>
                            </div>
                            <h4 className="fw-bold">Faster Time to Market</h4>
                            <p className="text-muted">Accelerate time to sales by 30%</p>
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <p className="fs-5 text-muted">
                            <strong>More importantly...</strong> streamline access to new treatments for patients by 1 to 4 years.
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </>} />

        {/* CTA Section */}
        <ContentBlock mt="5" mb="15" content={<>
            <Card className="bg-primary text-white border-0 shadow">
                <Card.Body className="p-5 text-center">
                    <h2 className="fw-bold mb-4">Ready to Get Started?</h2>
                    <p className="fs-5 mb-4">
                        Contact us to discuss pilot opportunities and custom pricing for your organization.
                    </p>
                    <Button variant="light" size="lg" className="px-5 py-3 fw-bold me-3">
                        Contact Sales
                    </Button>
                    <Button variant="outline-light" size="lg" className="px-5 py-3">
                        Schedule Demo
                    </Button>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default Pricing;
