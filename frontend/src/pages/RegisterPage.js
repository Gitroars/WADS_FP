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

const RegisterPage = () => {
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
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='validationEmailAddress'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='myemail@example.com'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                Please enter a valid email address
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                <Form.Control
                  type='text'
                  placeholder='Username'
                  aria-describedby='inputGroupPrepend'
                  required
                />
                <Form.Control.Feedback type='invalid'>
                  Please enter a username
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md='4' controlId='validationPassword'>
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  aria-describedby='inputGroupPrepend'
                  minLength={6}
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type='invalid'>
                  Please enter a valid password
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Text className='text-muted'>
                At least 6 characters required
              </Form.Text>
            </Form.Group>

            <Row>
              <Col>
                Already have an account?
                <Link to={"/login"}>Login</Link>
              </Col>
            </Row>

            <Form.Group className='mb-3'>
              <Form.Check
                required
                label='Agree to terms and conditions'
                feedback='You must agree before submitting.'
                feedbackType='invalid'
              />
            </Form.Group>
            <Button type='submit'>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Register
            </Button>
            <Alert show={true} variant='danger'>
              Email has already been used
            </Alert>
            <Alert show={true} variant='info'>
              Account successfully registered
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
