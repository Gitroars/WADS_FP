import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className='mt-5 justify-content-md-center'>
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name='username'
                required
                type='text'
                placeholder='Enter username'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                required
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                name='doNotLogout'
                type='checkbox'
                label='Keep me signed in'
              />
            </Form.Group>

            <Row>
              <Col>
                Don't have an account?
                <Link to={"/register"}>Register</Link>
              </Col>
            </Row>

            <Button variant='primary' type='submit'>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Login
            </Button>
            <Alert show={true} variant='danger'>
              Invalid username/password
            </Alert>
            <Alert show={true} variant='info'>
              Login success
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
