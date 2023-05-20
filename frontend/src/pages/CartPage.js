import { Row, Col, Container, Alert, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";
const cartPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          <ListGroup variant='flush'>
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>

          <Alert variant='info'>Cart is empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Total:</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>
                <span className='fw-bold'>$10</span>
              </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <LinkContainer to='/user/order-details'>
                <Button type='button'>Checkout</Button>
              </LinkContainer>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default cartPage;
