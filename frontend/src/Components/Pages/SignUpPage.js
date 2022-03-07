import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SignUpPage() {

    let navigate = useNavigate();

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
            
            <h1 onClick={() => {navigate('/')}} style={{marginTop: '4%', fontWeight:"bold"}}>BOREAL.ca</h1> 
            <Card style={{ width: '18rem', position: 'absolute', top: '15%', outline: "solid" }}>
            
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>Create Account</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Create Your Password</Form.Label>
                            <Form.Control type="password" placeholder="Please Enter a password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Select Account Type</Form.Label>
                            <Form.Select>
                                <option>Customer</option>
                                <option>Seller</option>
                                <option>Admin</option>
                            </Form.Select>
                        </Form.Group>

                        <div className='d-grid'>
                            <Button variant="primary" type="submit">Create Account</Button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignUpPage;