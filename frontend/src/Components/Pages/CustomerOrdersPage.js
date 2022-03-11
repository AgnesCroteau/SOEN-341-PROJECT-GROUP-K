import { Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Navigation from "../Layout/Navigation";


function CustomerOrdersPage(props) {
    let navigate = useNavigate();
    return (
    <>
    <Navigation />
    <div style={{backgroundColor: '#DDD', width: '100%', height: '1000px', zIndex: '1', position: 'fixed'}}/>
    <Container fluid style={{justifyContent: 'center', zIndex: '2' , position: 'fixed', marginTop: '40px'}}>
        <Card style={{width: "1000px", marginLeft: "auto", marginRight: "auto", top: '10%'}}>
        
            <Card.Body>
                <Card.Title style={{fontSize: "36px" }}>My Orders</Card.Title>
                <Form>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: "200px"}}></th>
                                <th style={{width: "500px"}}></th>
                                <th style={{textAlign: "center", width: "120px"}}>Price</th>
                                <th style={{textAlign: "center", width: "120px"}}>Status</th>
                            </tr>
                        </thead>    
                    </table>
                    <hr style={{width: "", height: "3px"}}></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width: "200px", backgroundColor: "#DDD"}}>
                                    <img src={"isaac_asimov.jpeg"} style={{width: "200px", height: "150px", objectFit: "contain"}}></img>
                                </td>
                                <td style={{width: "500px",padding: "20px" }}>Items ordered:<br/>Lorem Ipsum Bottom Text Lorem Ipsum Bottom Text Lorem Ipsum Bottom Text</td>
                                <td style={{textAlign: "center", width: "120px"}}>$300.00 CAD</td>
                                <td style={{textAlign: "center", width: "120px"}}>Processing Payment</td>
                                
                            </tr>
                        </tbody>
                    </table>
                    <hr style={{width: "", height: "3px"}}></hr>
                    <table>
                        <tbody>
                            <tr>
                                <td style={{width: "200px", backgroundColor: "#DDD"}}>
                                    <img src={"harry_potter_and_philosopher_stone.jpg"} style={{width: "200px", height: "150px", objectFit: "contain"}}></img>
                                </td>
                                <td style={{width: "500px", padding: "20px"}}>Items ordered:<br/>Lorem Ipsum Bottom Text</td>
                                <td style={{textAlign: "center", width: "120px"}}>$100.00 CAD</td>
                                <td style={{textAlign: "center", width: "120px"}}>Delivered</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </Form>
            </Card.Body>
        </Card>
    </Container>
        
    </>
    
  );
}

export default CustomerOrdersPage;

