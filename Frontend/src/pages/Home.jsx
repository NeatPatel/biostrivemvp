import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Badge } from 'react-bootstrap';

import ContentBlock from '../components/ContentBlock.jsx';

function Home() {
    return <>
        {/* Hero Section */}
        <ContentBlock mt="15" mb="10" content={<>
            <div className="text-center mb-4">
                <Badge bg="success" className="fs-6 mb-3 px-3 py-2">Commercialize, Faster</Badge>
                <h1 className="display-2 fw-bold text-primary mb-4">BioStrive</h1>
                <h2 className="display-6 fw-bold text-dark mb-4">Emporia</h2>
                <p className="lead fs-4 text-muted mb-5">
                    Agentic AI to expedite product claims generation in the life sciences.
                </p>
                <p className="fs-5 text-dark mb-5">
                    Save upwards of <strong>$1.6M annually</strong> while reducing commercialization costs by <strong>15%</strong> and accelerating time to sales by <strong>30%</strong>.
                </p>
            </div>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/demo">
                    <Button variant="primary" size="lg" className="px-4 py-2">
                        See Emporia in Action
                    </Button>
                </Link>
                <Link to="/pricing">
                    <Button variant="outline-primary" size="lg" className="px-4 py-2">
                        View Pricing
                    </Button>
                </Link>
            </div>
        </>} />

        {/* Features Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <h2 className="text-center text-primary mb-5">Emporia's Core Capabilities</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">📊 Claim Matrix</h3>
                            <p className="text-muted">
                                Generate completed claim matrices with sources, citations, Key Opinion Leaders, and other relevant data. 
                                Reduce 50 hours of manual work to minutes.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">🔍 Literature Search</h3>
                            <p className="text-muted">
                                Automated PubMed abstract screening with keyword filters to identify studies meeting commercial requirements. 
                                Coming soon.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="text-center p-4">
                            <h3 className="text-primary mb-3">📋 Claim Tracking</h3>
                            <p className="text-muted">
                                Auditable documentation workflows that give legal and regulatory teams full visibility into every claim used in promotional materials. Coming soon.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Market Opportunity Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-4">The Life Sciences Challenge</h2>
                    <Row className="g-4 mb-4">
                        <Col md={6}>
                            <h4 className="text-danger">Current Pain Points</h4>
                            <ul className="text-muted">
                                <li><strong>$2B - $2.5B</strong> average cost to bring therapy to market</li>
                                <li><strong>50 hours</strong> to generate 1 claim matrix</li>
                                <li>Fragmented value proposition development</li>
                                <li>Challenging customer communication across silos</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h4 className="text-success">Market Opportunity</h4>
                            <ul className="text-muted">
                                <li><strong>TAM:</strong> $38.9B</li>
                                <li><strong>SAM:</strong> $3.8B</li>
                                <li><strong>SOM:</strong> $314M</li>
                                <li>Growing Gen AI adoption in life sciences</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Link to="/about">
                            <Button variant="primary" size="lg" className="px-5 py-3">
                                Learn More About Our Solution
                            </Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>} />

        {/* Call to Action Section */}
        <ContentBlock mt="5" mb="15" content={<>
            <Card className="bg-primary text-white border-0 shadow">
                <Card.Body className="p-5">
                    <h2 className="text-center fw-bold mb-4">Ready to Transform Your Claims Process?</h2>
                    <p className="text-center fs-5 mb-4">
                        Join the pilot program starting October 2025. Be among the first to experience Emporia's 
                        revolutionary approach to claims generation and help shape the future of life sciences commercialization.
                    </p>
                    <Row className="g-3 justify-content-center">
                        <Col xs="auto">
                            <Link to="/contact-us">
                                <Button variant="light" size="lg" className="px-5 py-3 fw-bold">
                                    Join Pilot Program
                                </Button>
                            </Link>
                        </Col>
                        <Col xs="auto">
                            <Link to="/demo">
                                <Button variant="outline-light" size="lg" className="px-5 py-3">
                                    Request Demo
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <p className="text-center mt-4 mb-0">
                        Questions about Emporia? Interested in our pricing? 
                        <br />
                        <strong>Contact us at biostrive@biostrive.org</strong>
                    </p>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default Home;