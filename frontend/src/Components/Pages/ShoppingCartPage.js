import { Button, Image, Table, Container } from 'react-bootstrap';
import Navigation from '../Layout/Navigation';
import '../Page Styles/ShoppingCartPage.css';
import { useCart } from '../Cart';


function ShoppingCartPage(props) {
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
                        {
                            // Each item from cart is displayed into the shopping cart page
                            props.list.map((item) => {
                                return (
                                    <tr>
                                    <th>
                                    <div className="float-start row flex-wrap main-content">
                                        <Image className="item-image align-items-center" src={item.img} responsive />
                                        <h5 className="col-md-6">{item.title}</h5>
                                     </div>
                                    </th>
                                    <th className="price align-top"><h5>${item.price}</h5></th>
                                    </tr>    
                                )
                            })
                        }
                    </thead>
                </Table>
            </Container>
        </>
    )
}

export default ShoppingCartPage;