import styles from './about.module.scss';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';

function About() {
    return <>
        {/* Hero Section */}
        <ContentBlock mt="25" mb="10" content={<>
            <div className="text-center">
                <h1 className="display-3 fw-bold text-primary mb-4">About BioStrive</h1>
                <p className="lead fs-4 text-muted mb-5">
                    Revolutionizing life sciences commercialization through agentic AI
                </p>
            </div>
        </>} />

        {/* Mission Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-4">Our Mission</h2>
                    <p className="text-center fs-5 text-muted mb-4">
                        To streamline access to new treatments for patients by 1 to 4 years through intelligent automation 
                        of product claims generation in the life sciences industry.
                    </p>
                    <div className="text-center">
                        <Badge bg="success" className="fs-6 px-3 py-2 me-2">$1.6M Annual Savings</Badge>
                        <Badge bg="primary" className="fs-6 px-3 py-2 me-2">15% Cost Reduction</Badge>
                        <Badge bg="warning" className="fs-6 px-3 py-2">30% Faster Time to Sales</Badge>
                    </div>
                </Card.Body>
            </Card>
        </>} />

        {/* Team Section */}
        <ContentBlock mt="5" mb="5" content={<>
            <h2 className="text-center text-primary mb-5">Our Team</h2>
            <Row className="g-4">
                <Col md={6} lg={3}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">RB</span>
                            </div>
                            <h5 className="fw-bold">Ruemon Bhattacharyya</h5>
                            <p className="text-primary fw-semibold">CEO</p>
                            <p className="text-muted small">
                                Leading BioStrive's vision to transform life sciences commercialization through AI innovation.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">LA</span>
                            </div>
                            <h5 className="fw-bold">Lev Afonine</h5>
                            <p className="text-success fw-semibold">CFO</p>
                            <p className="text-muted small">
                                Driving financial strategy and ensuring sustainable growth in the life sciences market.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">EL</span>
                            </div>
                            <h5 className="fw-bold">Evan Li</h5>
                            <p className="text-warning fw-semibold">CTO</p>
                            <p className="text-muted small">
                                Architecting the technical foundation for Emporia's AI-powered claims generation platform.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                                <span className="fs-2 fw-bold">MA</span>
                            </div>
                            <h5 className="fw-bold">Madeline Abellera</h5>
                            <p className="text-info fw-semibold">Director of Growth</p>
                            <p className="text-muted small">
                                Scaling BioStrive's market presence and driving customer acquisition in life sciences.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Business Timeline */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-5">Business Timeline</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="d-flex align-items-start">
                                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                                    <span className="fw-bold">1</span>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Oct 2025 - Dec 2025</h5>
                                    <p className="text-muted mb-0">Begin first pilot project</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-start">
                                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                                    <span className="fw-bold">2</span>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Dec 2025 - Mar 2026</h5>
                                    <p className="text-muted mb-0">Gather feedback and refine product</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-start">
                                <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                                    <span className="fw-bold">3</span>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Mar 2026 - Jun 2026</h5>
                                    <p className="text-muted mb-0">Work with pilot partners to integrate solution</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex align-items-start">
                                <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px', minWidth: '40px'}}>
                                    <span className="fw-bold">4</span>
                                </div>
                                <div>
                                    <h5 className="fw-bold">Jun 2026 - Sep 2026</h5>
                                    <p className="text-muted mb-0">Scale deployment and paid pilot projects</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default About;