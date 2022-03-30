import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {

    let navigate = useNavigate();

    const [full_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("Customer");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:3001/storeUserAccountInfo", {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                full_name: full_name,
                email: email,
                password: password,
                account_type: accountType,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setPassword("");
                setAccountType("Customer");

                // TODO: User created successfully, redirect to correct page here
                alert("Account Created !");
                navigate('/');
            } else {
                // TODO: User creation error, show an error message
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
            
            <h1 onClick={() => {navigate('/')}} style={{marginTop: '4%', fontWeight:"bold"}}>BOREAL.ca</h1> 
            <Card style={{ width: '18rem', position: 'absolute', top: '15%', outline: "solid" }}>
            
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>Create Account</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" value={full_name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Create Your Password</Form.Label>
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please Enter a password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Select Account Type</Form.Label>
                            <Form.Select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
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