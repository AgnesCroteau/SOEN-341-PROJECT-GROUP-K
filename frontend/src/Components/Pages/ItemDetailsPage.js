import { Button, Image, Container } from 'react-bootstrap';
import Navigation from '../Layout/Navigation';
import '../Page Styles/ItemDetailsPage.css'

function ItemDetailsPage(props) {
    return (
        <>
            <Navigation />
            <Container>
                <div className="row col-auto flex-wrap main-content">
                    <Image className="col-sm-3 item-image align-items-center" src={props.img} responsive />
                    <div className="description col-sm-6"> 
                        <h2 id="BookName">{props.title}</h2>
                        <hr />
                        <h6>{props.description}</h6>
                        <hr />
                        <h3>${props.price}</h3>
                        <Button variant="warning">Add to Cart</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ItemDetailsPage;