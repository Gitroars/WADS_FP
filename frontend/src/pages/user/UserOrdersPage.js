import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserOrdersPage = () => {
  return (
    <Row className='m-6'>
      <Col md={12}>
        <h1>Purchase History</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>Date</th>
              <th>Total price</th>
              <th>Payment type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rogue Empress: A Space Opera Adventure: Volume One</td>
              <td>21/05/2023</td>
              <td>$3</td>
              <td>PayPal</td>
              <td>
                <Link to='/user/order-details'>View Book</Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>The Spellbound Odyssey: Volume One</td>
              <td>21/05/2023</td>
              <td>$3</td>
              <td>PayPal</td>
              <td>
                <Link to='/user/order-details'>View Book</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
