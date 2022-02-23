import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ItemCard(props) {
  const [isHovering, setHover] = useState(false);

  let navigate = useNavigate();

  const toggleHover = () => {
    setHover(!isHovering);
  };

  return (
    <Container>
      <Card
        style={{ width: "18rem", margin: "10%" }}
        onDoubleClick={() => {
          navigate("/item" + props.id);
        }}
      >
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title
            onClick={() => {
              navigate("/item" + props.id);
            }}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            style={{ color: isHovering ? "red" : "" }}
          >
            <b>{props.title}</b>
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Footer>Price : ${props.price}</Card.Footer>
          <Button
            class="addToCartBtn"
            variant="primary"
            style={{ marginTop: "10px" }}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemCard;
