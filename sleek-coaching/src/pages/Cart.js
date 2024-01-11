import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';

const Cart = ({ cart }) => {
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };
  return (
    <Container style={bodyStyle}>
      <NavBar />
      <h1 className="display-4 text-center mt-5 mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={7}>
            <ul className="list-group">
              {cart.map((program, index) => (
                <li key={index} className="list-group-item">
                  {program.name} - Quantity: {program.quantity}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
