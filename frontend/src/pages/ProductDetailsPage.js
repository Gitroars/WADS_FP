import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <Row className='mt-5'>
      <Col md={4}>Image</Col>
      <Col md={8}>
        <Row>
          <Col md={8}>book title,price,description,rating</Col>
          <Col md={4}>book status,quantity</Col>
        </Row>
        <Row>
          <Col className='mt-5'>
            <h5>Reviews</h5>
          </Col>
          <hr />
          give a review
        </Row>
      </Col>
    </Row>
  );
};

export default ProductDetailsPage;
