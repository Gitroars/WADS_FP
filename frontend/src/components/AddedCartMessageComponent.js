import { Alert } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const AddedCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant='danger'
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Book was successfully added to your cart</Alert.Heading>
      <p>
        <Button variant='success'>Return</Button>
        {""}
        <Link to='/cart'>
          <Button variant='danger'>Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedCartMessageComponent;
