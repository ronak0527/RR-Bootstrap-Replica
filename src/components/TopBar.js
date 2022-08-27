import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function TopBar() {

return(
    <div>
<Navbar bg="light" expand="lg" >
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
            <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt='instacart' /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
            </Nav>
            <Nav style={{fontWeight: "bold"}}>
                <Nav.Link style={{padding: "20px"}} href="#LogIn">Log In</Nav.Link>
                <Button style={{borderRadius: "10px", backgroundColor: "green", color: "white"}} variant="success">Sign Up</Button>{' '}
            </Nav>
        </Navbar.Collapse>
</Navbar>
</div>
)
}

export default TopBar;