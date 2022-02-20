import  { Button, Card, Container} from "react-bootstrap";


function ItemCard() {

    return (
        <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>

            <div><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="isaac_asimov.jpeg" />
                <Card.Body>
                    <Card.Title><b>Isaac Asimov: The Complete Stories, Vol. 1</b></Card.Title>
                    <Card.Text>
                        Isaac Asimov best work
                        In a world of robots how can we keep on keeping on
                    </Card.Text>
                    <Card.Footer>
                        Price : $68.90
                    </Card.Footer>
                    <Button class="addToCartBtn" variant="primary">Add to cart</Button>
                </Card.Body>
            </Card> </div>
        </Container>
    
    );
}

export default ItemCard;