import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";
const ProductForListComponent = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img
            variant='top'
            src={"/images/books/" + images[idx] + ".jpg"}
          />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Novel Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} />
            </Card.Text>
            <Card.Text className='h4'>$1{""}</Card.Text>
            <LinkContainer to='/product-details'>
              <Button variant='danger'>View book</Button>
            </LinkContainer>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
