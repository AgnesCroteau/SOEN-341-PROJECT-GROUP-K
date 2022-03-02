import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function ManageProfilePage() {

    let navigate = useNavigate();

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>


            <h1 onClick={() => { navigate('/') }} style={{ textAlign: "center", marginTop: '2%', fontWeight: "bold" }}>BOREAL.ca</h1>

            <Card style={{ width: '35rem', position: 'absolute', top: '12%', outline: "solid" }}>
                <h3 style={{ textAlign: "center" }}>Edit Account Information</h3>
                <Card.Body> <Stack direction="horizontal" gap={3}>
                    <div className="ms-auto"><Card.Link href="#">Edit</Card.Link></div>
                </Stack>

                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>

                            <Form.Control type="name" placeholder="Kelly Acoca" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="name" placeholder="Kelly.acoca@gmail.com" />
                        </Form.Group>


                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Your Password</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your New Password" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicAddress">
                            <Form.Label>Your Home Address</Form.Label>
                            <Form.Control type="name" placeholder="5825 Ave Eldridge, H4W2E3, Cote-Saint-Luc, Quebec, Canada" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Your Phone Number</Form.Label>
                            <Form.Control type="name" placeholder="514-550-8326" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicGender">
                            <Form.Label>Gender</Form.Label>

                            <Form.Select>
                                <option>Female</option>
                                <option>Male</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicAccount">
                            <Form.Label>Account Type</Form.Label>

                            <Form.Select>
                                <option>Customer</option>
                                <option>Seller</option>
                                <option>Admin</option>
                            </Form.Select>
                        </Form.Group>
                       
                        <Form.Group className="mb-4" controlId="formBasicChange">
                        </Form.Group>

                        <div className='d-grid'>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>   
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ManageProfilePage;
