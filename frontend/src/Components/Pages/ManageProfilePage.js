import { useState } from 'react';
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useUser } from '../UserContext';


function ManageProfilePage() {
    const currentUserInfo = useUser();
    const [name, setName] = useState(currentUserInfo.full_name);
    const [email, setEmail] = useState(currentUserInfo.email);
    const [password, setPassword] = useState(currentUserInfo.password);
    const [address, setAddress] = useState(currentUserInfo.home_address);
    const [phone, setPhone] = useState(currentUserInfo.phone_number);
    const [gender, setGender] = useState(currentUserInfo.gender);
    const [accountType, setAccountType] = useState(currentUserInfo.account_type);

    const handleEmailChange = (email) => {
        setEmail(email);
        console.log(email);
    }

    const saveChanges = () => {
        fetch('http://localhost:3001/updateUserAccountInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
                address,
                phone,
                gender,
                accountType
              })
        }).then(response => response.headers.get("Content-Length") > 0 && response.json())
            .then((data) => console.log(data));
    }


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

                            <Form.Control type="name" placeholder={currentUserInfo.full_name} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="name" placeholder={email} onChange={(e) => handleEmailChange(e.target.value)}/>
                        </Form.Group>


                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Your Password</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your New Password" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicAddress">
                            <Form.Label>Your Home Address</Form.Label>
                            <Form.Control type="name" placeholder={currentUserInfo.home_address} />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicNumber">
                            <Form.Label>Your Phone Number</Form.Label>
                            <Form.Control type="name" placeholder={currentUserInfo.phone_number} />
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
                    </Form>
                    <div className='d-grid'>
                            <Button variant="primary" type="submit" onClick={saveChanges}>
                                Save Changes
                            </Button>   
                        </div>
                </Card.Body>
            </Card>
            <button onClick={() => console.log(currentUserInfo) }>hello</button>
        </Container>
    );
}

export default ManageProfilePage;
