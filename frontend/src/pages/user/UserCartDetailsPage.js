import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

const UserCartDetailsPage = () => {
  return (
    <Container fluid>
      <Row className='mt-4'>
        <h1>Cart Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Checkout</h2>
              <br />
              <b>Billing Address</b>
              <br />
              <b>Country</b>: Indonesia <br />
            </Col>
            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select>
                <option value='pp'>PayPal</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className='mt-3' variant='danger'>
                  Invalid details
                </Alert>
              </Col>
              <Col>
                <Alert className='mt-3' variant='success'>
                  Unpaid
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant='flush'>
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items price (after tax): <span className='fw-bold'>$9.00</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Tax: <span className='fw-bold'>included</span>
            </ListGroup.Item>
            <ListGroup.Item className='text-danger'>
              Total price: <span className='fw-bold'>$9.90</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className='d-grid gap-2'>
                <Button size='lg' variant='danger' type='button'>
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCartDetailsPage;
