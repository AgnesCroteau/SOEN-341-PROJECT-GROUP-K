import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function ManageProfilePage() {

    let navigate = useNavigate();

    return (
        <Container fluid style={{display: 'flex', justifyContent: 'center' }}>
            
            
            <h1 onClick={() => {navigate('/')}} style={{textAlign: "center", marginTop: '3%', fontWeight:"bold"}}>BOREAL.ca</h1>
            
            <Card style={{ width: '18rem', position: 'absolute', top: '15%', outline: "solid" }}>
            <h3 style={{ marginTop: '5%', textAlign: "center" }}>Edit Account Information</h3>
                <Card.Body>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your New Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Email</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your New Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your New Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Account Type</Form.Label>
                            
                            <Form.Select>
                                <option>Customer</option>
                                <option>Seller</option>
                                <option>Admin</option>
                            </Form.Select>
                        </Form.Group>
                       
                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Edit Information
                            </Button>   
                        </div>
                        
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ManageProfilePage;
