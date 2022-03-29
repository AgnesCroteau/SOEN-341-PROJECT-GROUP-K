import { Button, Image, Table, Container } from 'react-bootstrap';
import Navigation from '../Layout/Navigation';
import { useNavigate } from "react-router-dom";
import '../Page Styles/ShoppingCartPage.css';
import { useUser } from '../UserContext';
import { useDispatchCart } from '../Cart';


function ShoppingCartPage(props) {
    
    let navigate = useNavigate();
    const userInfo = useUser();
    const userState = useUser();
    const dispatch = useDispatchCart();

    const handleRemove = (index) => {
        console.log(index);
        dispatch({type: "REMOVE", index});
    };


    const handlePlaceOrder = async (event) => {
        event.preventDefault(); 
        const customer_id = userInfo._id;    
        const products = props.list;
        try {
            let res = await fetch("http://localhost:3001/sendOrder", {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                //No Id so it can create a new one every time its added to database  
                customer_id,
                products
            })
        });
            if (res.status === 200) {
              console.log("Order placed successfully.")
            } else {

            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <><Navigation />
            <Container> 
            <h1 onClick={() => { navigate('/') }} style={{ textAlign: "center", marginTop: '2%', fontWeight: "bold" }}>BOREAL.ca</h1> 
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
                                    <th className="price align-top"><h5>${item.price}</h5>
                                    <Button variant="danger" onClick = {() => handleRemove(props.list.indexOf(item))}>Delete From Cart</Button>
                                    </th>
                                    </tr>     
                                )
                            })
                        }
                    </thead>
                </Table>
                {userState && <Button variant="primary" style={{float: 'right'}} type="submit" onClick={handlePlaceOrder}>Place Order</Button> }
            </Container>
        </>
    )
}
export default ShoppingCartPage;