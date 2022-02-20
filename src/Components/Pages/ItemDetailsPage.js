import { Button, Image, Container } from 'react-bootstrap';
import Navigation from '../Layout/Navigation';
import image from '../Images/1984first.jpg';
import '../Page Styles/ItemDetailsPage.css'

function ItemDetailsPage() {
    return (
        <>
            <Navigation />
            <Container>
                <div className="row col-auto flex-wrap main-content">
                    <Image className="col-sm-6 item-image align-items-center" src={image} responsive />
                    <div className="description col-sm-6">
                        <h2 id="BookName">1984</h2>
                        <h5 id="Author">George Orwell</h5>
                        <hr />
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.</h6>
                        <hr />
                        <h3>$19.99</h3>
                        <Button variant="warning">Add to Cart</Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ItemDetailsPage;