import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const WorkoutLibrary = ({ cart, setCart }) => {
  const navbarRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };
  const handleAddToCart = () => {
    const programToAdd = {
      name: 'Workout Library',
      quantity: quantity,
    };

    setCart((prevCart) => [...prevCart, programToAdd]);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top on component mount
  }, []);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const linkHover = useSpring({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10, precision: 0.1 },
  });

  return (
    <animated.div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        background: 'black',
        ...fadeIn,
      }}
    >
      <Container style={bodyStyle}>
        <NavBar navbarRef={navbarRef} />
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={7}>
            <h1 className="display-4 text-center mb-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
              Workout Library
            </h1>
            <Row>
              <Col xs={20} md={10} className="mb-4">
                {/* Image on the left */}
                <img
                  src={process.env.PUBLIC_URL + '/images/WorkoutLibrary-image.jpg'}
                  alt="WorkoutLibrary Program"
                  className="img-fluid"
                  style={{ cursor: 'pointer' }}
                  // You can add an onClick handler for zooming in the image
                />
              </Col>
              <Col xs={20} md={10}>
                {/* List items on the right */}
                <h1 className="display-4 text-center mb-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
                  What to expect
                </h1>
                <div>
  <h2>
    For those inclined towards muscle development but seeking guidance on exercises, behold my meticulously curated program:
  </h2>
  <ul>
    <li>
      A meticulously organized library, alphabetically and by muscle group, featuring optimal exercises for each targeted area.
    </li>
    <li>
      Crafted with precision by the adept hands of Sleek himself.
    </li>
    <li>
      Informative videos elucidating the nuances of exercise intensity.
    </li>
    <li>
      Seamlessly complements both bulking and cutting regimens.
    </li>
    <li>
      Comprehensive details on the number of sets and reps for each exercise.
    </li>
    <li>
      Enjoy a complimentary demonstration of the incline smith press:
      <video controls autoplay muted loop playsinline style={{ width: '100%', height: 'auto' }}>
        <source src="/images/logo-image.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </li>
  </ul>
  <div>
  <NavBar cartSize={cart.length} />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
</div>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <h1 className="display-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
                Other Programs
              </h1>
            </div>
            <Row className="mt-4">
              {/* Program 1: 1:1 ONLINE COACHING */}
              <Col xs={12} md={6} className="mb-4">
                <NavLink to="/Main" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/online-coaching-image.jpg'}
                    alt="1:1 ONLINE COACHING"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">1:1 ONLINE COACHING</h4>
                </NavLink>
              </Col>
              {/* Program 2: Cutting */}
              <Col xs={12} md={6} className="mb-4">
                <NavLink to="/programs/cutting" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/cutting-image.jpg'}
                    alt="Cutting"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Cutting</h4>
                </NavLink>
              </Col>
              {/* Program 3: Meal Plan */}
              <Col xs={12} md={6} className="mb-4">
                <NavLink to="/programs/bulking" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/bulking-image.jpg'}
                    alt="Bulking"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Bulking</h4>
                </NavLink>
              </Col>
              {/* Program 4: Workout Library */}
              <Col xs={12} md={6} className="mb-4">
                <NavLink to="/programs/meal-plan" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/meal-plan-image.jpg'}
                    alt="Meal Plan"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Meal Plan</h4>
                </NavLink>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default WorkoutLibrary;
