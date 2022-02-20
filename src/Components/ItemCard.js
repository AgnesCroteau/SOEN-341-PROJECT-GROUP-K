import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function ItemCard(props) {
  
  let navigate = useNavigate();

  return (
    <Container>
      <Card style={{ width: "18rem", margin: "10%" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title
            onClick={() => {
              navigate(("/item" + props.id));
            }}
          >
            <b>{props.title}</b>
          </Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Footer>Price : ${props.price}</Card.Footer>
          <Button class="addToCartBtn" variant="primary">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemCard;
