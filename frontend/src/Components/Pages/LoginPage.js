import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function SignUpPage() {

    let navigate = useNavigate();

    return (
        <Container fluid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            <h1 onClick={() => {navigate('/')}} style={{textAlign: "center", margin: '50px', fontWeight:"bold"}}>BOREAL.ca</h1> 
            <Card style={{width: "400px", marginLeft: "auto", marginRight: "auto", top: '10%', outline: "solid"}}>
            
                <Card.Body>
                    <Card.Title style={{ textAlign: "center", fontSize: "36px" }}>Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" style= {{fontWeight:"bold"}} controlId="formBasicEmail">
                            <Form.Label>E-mail address</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your E-mail" />
                        </Form.Group>

                        <Form.Group className="mb-0" style= {{fontWeight:"bold", paddingBottom: "25px"}} controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="name" placeholder="Enter Your Password" />
                        </Form.Group>

                        <Button className= "mb-3" style={{width: "100%"}} variant="primary" type="submit">
                            Continue
                        </Button>

                        
                    </Form>
                </Card.Body>
            </Card>
            <h2></h2>
            <Form.Group className="mb-0" style= {{textAlign: "center", fontWeight:"bold"}} controlId="formBasicEmail">
                <Form.Label>New to BOREAL?</Form.Label>
            </Form.Group>
            <Button variant="primary" style={{width: "400px", marginRight: "auto", marginLeft: "auto"}} type="submit">
                Create your BOREAL account
            </Button>
        </Container>
    );
}

export default SignUpPage;