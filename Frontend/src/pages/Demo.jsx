import styles from './demo.module.scss';
import { Card, Row, Col, Button, Badge, Alert, ProgressBar } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';
import { useState } from 'react';

function Demo() {
    const [demoStep, setDemoStep] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [inputQuery, setInputQuery] = useState('');

    const startDemo = () => {
        setIsGenerating(true);
        setDemoStep(1);
    };

    const generateClaims = async () => {
        setDemoStep(2);
        setIsGenerating(false);

        const response = await fetch('http://localhost:5000/generate-claims', {
            method: 'POST',
            body: JSON.stringify({ input_query: inputQuery.trim() }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data.response);
    };

    const resetDemo = () => {
        setDemoStep(0);
        setIsGenerating(false);
    };

    const demoSteps = [
        {
            title: "Input Product Information",
            description: "Enter your product details and therapeutic area",
            content: (
                <div className="p-4">
                    <h5>Product Information</h5>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" placeholder="e.g., NexGen Immunotherapy" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Therapeutic Area</label>
                        <select className="form-select">
                            <option>Oncology</option>
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Immunology</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Target Indication</label>
                        <input type="text" className="form-control" placeholder="e.g., Advanced Melanoma" value={inputQuery} onChange={(e) => setInputQuery(e.target.value)} />
                        <Button variant="primary" size="lg" onClick={generateClaims} className="mt-3"s>
                            Generate Claims
                        </Button>
                    </div>
                </div>
            )
        },
        {
            title: "AI Processing",
            description: "Emporia analyzes literature and generates claims",
            content: (
                <div className="p-4 text-center">
                    <div className="mb-4">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <h5>Generating Claims Matrix...</h5>
                    <ProgressBar animated now={75} className="mb-3" />
                    <p className="text-muted">Analyzing 1,247 research papers and clinical studies</p>
                    <div className="row text-center">
                        <div className="col-4">
                            <div className="text-success">✓ Literature Search</div>
                        </div>
                        <div className="col-4">
                            <div className="text-success">✓ Data Extraction</div>
                        </div>
                        <div className="col-4">
                            <div className="text-warning">⏳ Claims Generation</div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Generated Claims Matrix",
            description: "Review and customize your claims",
            content: (
                <div className="p-4">
                    <h5>Claims Matrix Output</h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Claim</th>
                                    <th>Source</th>
                                    <th>Evidence Level</th>
                                    <th>KOL Support</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Superior efficacy vs. standard of care</td>
                                    <td>NEJM 2024, Lancet 2023</td>
                                    <td><Badge bg="success">High</Badge></td>
                                    <td>Dr. Smith, Dr. Johnson</td>
                                </tr>
                                <tr>
                                    <td>Improved progression-free survival</td>
                                    <td>JCO 2024, ASCO 2023</td>
                                    <td><Badge bg="success">High</Badge></td>
                                    <td>Dr. Williams, Dr. Brown</td>
                                </tr>
                                <tr>
                                    <td>Favorable safety profile</td>
                                    <td>Nature Medicine 2024</td>
                                    <td><Badge bg="warning">Medium</Badge></td>
                                    <td>Dr. Davis</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-3">
                        <Button variant="primary" className="me-2">Export to Excel</Button>
                        <Button variant="outline-primary">Customize Claims</Button>
                    </div>
                </div>
            )
        }
    ];

    return <>
        {/* Hero Section */}
        <ContentBlock mt="25" mb="10" content={<>
            <div className="text-center">
                <h1 className="display-3 fw-bold text-primary mb-4">Emporia Demo</h1>
                <p className="lead fs-4 text-muted mb-5">
                    Experience how Emporia transforms claims generation in minutes instead of hours
                </p>
            </div>
        </>} />

        {/* Interactive Demo */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="border-0 shadow">
                <Card.Body className="p-0">
                    <div className="bg-primary text-white p-4">
                        <h3 className="mb-0">Interactive Demo</h3>
                        <p className="mb-0">Try Emporia's claim matrix generation process</p>
                    </div>
                    <div className="p-4">
                        {demoStep === 0 && (
                            <div className="text-center">
                                <h5 className="mb-4">Ready to see Emporia in action?</h5>
                                <p className="text-muted mb-4">
                                    This demo will show you how Emporia generates a complete claims matrix 
                                    with sources, citations, and Key Opinion Leader support in just minutes.
                                </p>
                                <Button variant="primary" size="lg" onClick={startDemo}>
                                    Start Demo
                                </Button>
                            </div>
                        )}
                        
                        {demoStep > 0 && (
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h5 className="mb-0">{demoSteps[demoStep - 1].title}</h5>
                                    <Button variant="outline-secondary" size="sm" onClick={resetDemo}>
                                        Reset Demo
                                    </Button>
                                </div>
                                <p className="text-muted mb-4">{demoSteps[demoStep - 1].description}</p>
                                {demoSteps[demoStep - 1].content}
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </>} />

        {/* Features Showcase */}
        <ContentBlock mt="5" mb="5" content={<>
            <h2 className="text-center text-primary mb-5">Emporia Capabilities</h2>
            <Row className="g-4">
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <span className="fs-3">⚡</span>
                            </div>
                            <h5 className="fw-bold">Speed</h5>
                            <p className="text-muted">
                                Reduce 50 hours of manual work to minutes with AI-powered automation
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <span className="fs-3">🎯</span>
                            </div>
                            <h5 className="fw-bold">Accuracy</h5>
                            <p className="text-muted">
                                Generate claims with proper citations, evidence levels, and KOL support
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm text-center">
                        <Card.Body className="p-4">
                            <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                                <span className="fs-3">🔒</span>
                            </div>
                            <h5 className="fw-bold">Compliance</h5>
                            <p className="text-muted">
                                Ensure regulatory compliance with auditable documentation workflows
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>} />

        {/* Process Overview */}
        <ContentBlock mt="5" mb="5" content={<>
            <Card className="bg-light border-0 shadow-sm">
                <Card.Body className="p-5">
                    <h2 className="text-center text-primary mb-5">Current vs. Emporia Process</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="border-danger">
                                <Card.Header className="bg-danger text-white">
                                    <h5 className="mb-0">Current Process (50+ hours)</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ol className="mb-0">
                                        <li>Regulatory and Legal compliance analysis</li>
                                        <li>Manual literature search and review</li>
                                        <li>Cross-functional collaboration</li>
                                        <li>Claims creation and validation</li>
                                        <li>Source tracking and verification</li>
                                        <li>Sales training material development</li>
                                    </ol>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="border-success">
                                <Card.Header className="bg-success text-white">
                                    <h5 className="mb-0">Emporia Process (Minutes)</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ol className="mb-0">
                                        <li>Input product information</li>
                                        <li>AI-powered literature analysis</li>
                                        <li>Automated claims generation</li>
                                        <li>Source citation and KOL identification</li>
                                        <li>Compliance verification</li>
                                        <li>Export-ready matrix output</li>
                                    </ol>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>} />

        {/* CTA Section */}
        <ContentBlock mt="5" mb="15" content={<>
            <Card className="bg-primary text-white border-0 shadow">
                <Card.Body className="p-5 text-center">
                    <h2 className="fw-bold mb-4">Ready to Transform Your Claims Process?</h2>
                    <p className="fs-5 mb-4">
                        Join our pilot program starting October 2025 and be among the first to experience Emporia's capabilities.
                    </p>
                    <Button variant="light" size="lg" className="px-5 py-3 fw-bold me-3">
                        Join Pilot Program
                    </Button>
                    <Button variant="outline-light" size="lg" className="px-5 py-3">
                        Contact Sales
                    </Button>
                </Card.Body>
            </Card>
        </>} />
    </>;
}

export default Demo;
