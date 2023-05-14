import React from "react";
import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Button,
  Alert,
  Form,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedCartMessageComponent from "../components/AddedCartMessageComponent";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedCartMessageComponent />
      <Row className='mt-5'>
        <Col md={4}>
          <Image fluid src='/images/books/fantasy.jpg' />
          <Image fluid src='/images/books/litrpg.jpg' />
          <Image fluid src='/images/books/romance.jpg' />
          <Image fluid src='/images/books/scifi.jpg' />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup variant='flush'>
                  <ListGroup.Item>Book Title</ListGroup.Item>
                  <ListGroup.Item>
                    <Rating readonly size={20} initialValue={4} /> (1)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price <span className='fw-bold'>$1</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vivamus at augue eget arcu dictum varius duis at
                    consectetur.
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status: Released</ListGroup.Item>
                <ListGroup.Item>
                  Price <span className='fw-bold'>$1</span>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button variant='danger'>Add To Cart</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className='mt-5'>
              <h5>Reviews</h5>
              <ListGroup variant='flush'>
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    anonymous
                    <br />
                    <Rating readonly size={20} initialValue={4} />
                    <br />
                    14/05/2023
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <hr />
            <Alert variant='danger'>Login first to write a review</Alert>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Your Email</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Your Review</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Form.Select aria-label='Default select example'>
                <option>Your Rating</option>
                <option value='1'>Very Bad</option>
                <option value='2'>Bad</option>
                <option value='3'>Average</option>
                <option value='4'>Good</option>
                <option value='5'>Very Good</option>
              </Form.Select>
              <Button variant='primary'>Submit</Button>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
