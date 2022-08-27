import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
           <h2>Browse stores in Houston</h2>
                <Container style={{ textAlign: "center" }}>
                    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                        <Row>
                            <Col xs=".5" >
                                <Image style={{width: '100px'}} src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png" roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                        <Col sm="1"></Col>
                        <Row >
                            <Col xs=".5">
                                <Image style={{width: '100px'}} src="https://www.sprouts.com/wp-content/uploads/2020/03/sprouts-logo.png" roundedCircle />
                            </Col>
                            <Col>
                                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                        <Col sm="1"></Col>
                        <Row >
                            <Col xs=".5" >
                                <Image style={{width: '100px'}} src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_kwshpnaa/def_height/2700/def_width/2700/version/100012/type/1" roundedCircle />
                            </Col>
                            <Col md="6">
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Row>
                </Container>
        </div >
    )
}

export default StoreListings;