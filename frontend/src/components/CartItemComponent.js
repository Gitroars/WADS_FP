import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";

const CartItemComponent = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={3}>
            <Image
              crossOrigin='anonymous'
              src='/images/carousel/carousel-1.jpg'
              fluid
            />
          </Col>
          <Col md={3}>
            Rogue Empress: A Space Opera Adventurer <br />
            Volume 1
          </Col>
          <Col md={3}>$5</Col>
          <Col md={3}>
            <Button
              type='button'
              variant='secondary'
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className='bi bi-trash'></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default CartItemComponent;
