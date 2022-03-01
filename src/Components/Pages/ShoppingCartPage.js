import { Button, Image, Table, Container } from 'react-bootstrap';
import Navigation from '../Layout/Navigation';
import '../Page Styles/ShoppingCartPage.css'

function ShoppingCartPage() {
    return (
        <>
            <Navigation />
            <Container>
                <h2 className="cart-title">Shopping Cart</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th><h4>Item</h4></th>
                            <th className="price"><h4>Price</h4></th>
                        </tr>
                        <tr>
                            <th>
                                <div className="float-start row flex-wrap main-content">
                                    <Image className="item-image align-items-center" src="1984.jpg" responsive />
                                    <h5 className="col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
                                </div>
                            </th>
                            <th className="price align-top"><h5>$2.99</h5></th>
                        </tr>
                    </thead>
                </Table>
            </Container>
        </>
    )
}

export default ShoppingCartPage;