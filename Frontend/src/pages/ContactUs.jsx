import styles from './contactus.module.scss';
import { Card, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';
import { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        message: '',
        interest: 'pilot'
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return <>
        {/* Hero Section */}
        <ContentBlock mt="25" mb="10" content={<>
            <div className="text-center">
                <h1 className="display-3 fw-bold text-primary mb-4">Contact Us</h1>
                <p className="lead fs-4 text-muted mb-5">
                    Ready to transform your claims generation process? Let's talk.
                </p>
            </div>
        </>} />

        {/* Contact Form */}
        <ContentBlock mt="5" mb="5" content={<>
            <Row className="g-5">
                <Col lg={8}>
                    <Card className="border-0 shadow-sm">
                        <Card.Body className="p-5">
                            <h3 className="text-primary mb-4">Get in Touch</h3>
                            {submitted ? (
                                <Alert variant="success" className="text-center">
                                    <h4>Thank you for your interest!</h4>
                                    <p className="mb-0">We'll be in touch soon to discuss how Emporia can help your organization.</p>
                                </Alert>
                            ) : (
                                <Form onSubmit={handleSubmit}>
                                    <Row className="g-3">
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Full Name *</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Email Address *</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Company</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label>Role</Form.Label>
                                                <Form.Select
                                                    name="role"
                                                    value={formData.role}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select your role</option>
                                                    <option value="product-manager">Product Manager</option>
                                                    <option value="regulatory">Regulatory Affairs</option>
                                                    <option value="legal">Legal</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="executive">Executive</option>
                                                    <option value="other">Other</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label>Area of Interest</Form.Label>
                                                <Form.Select
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="pilot">Pilot Program</option>
                                                    <option value="demo">Product Demo</option>
                                                    <option value="pricing">Pricing Information</option>
                                                    <option value="partnership">Partnership</option>
                                                    <option value="other">Other</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group>
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={4}
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell us about your current claims generation challenges and how we can help..."
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Button variant="primary" size="lg" type="submit" className="px-5 py-3">
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className="border-0 shadow-sm h-100">
                        <Card.Body className="p-4">
                            <h4 className="text-primary mb-4">Contact Information</h4>
                            <div className="mb-4">
                                <h6 className="fw-bold">Email</h6>
                                <p className="text-muted mb-0">
                                    <a href="mailto:biostrive@biostrive.org" className="text-decoration-none">
                                        biostrive@biostrive.org
                                    </a>
                                </p>
                            </div>
                            <div className="mb-4">
                                <h6 className="fw-bold">Website</h6>
                                <p className="text-muted mb-0">
                                    <a href="https://www.biostrive.org" className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                        www.biostrive.org
                                    </a>
                                </p>
                            </div>
                            <div className="mb-4">
                                <h6 className="fw-bold">Pilot Program</h6>
                                <p className="text-muted mb-0">
                                    Starting October 2025. Contact us to be among the first to experience Emporia.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h6 className="fw-bold">Response Time</h6>
                                <p className="text-muted mb-0">
                                    We typically respond within 24 hours during business days.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Additional Resources */}
        <ContentBlock mt="5" mb="15" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h3 className="text-center text-primary mb-4">Additional Resources</h3>
                    <Row className="g-4">
                        <Col md={4}>
                            <div className="text-center">
                                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                    <span className="fs-3">📊</span>
                                </div>
                                <h5>Market Research</h5>
                                <p className="text-muted">
                                    Access our latest insights on AI in life sciences commercialization
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center">
                                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                    <span className="fs-3">🎯</span>
                                </div>
                                <h5>Case Studies</h5>
                                <p className="text-muted">
                                    Learn how Emporia is transforming claims generation for leading companies
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="text-center">
                                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                    <span className="fs-3">📅</span>
                                </div>
                                <h5>Schedule Demo</h5>
                                <p className="text-muted">
                                    Book a personalized demo to see Emporia in action
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default ContactUs;