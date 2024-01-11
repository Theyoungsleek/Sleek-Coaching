import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Bulking = ({ cart, setCart }) => {
  const navbarRef = useRef();
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const programToAdd = {
      name: '15-Week Custom Bulking Program',
      quantity: quantity,
    };

    setCart((prevCart) => [...prevCart, programToAdd]);
  };
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top on component mount
  }, []);
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
              15-Week Custom Bulking Program
            </h1>
            <Row>
              <Col xs={20} md={10} className="mb-4">
                {/* Image on the left */}
                <img
                  src={process.env.PUBLIC_URL + '/images/bulking-image.jpg'}
                  alt="Bulking Program"
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
                <ul>
                  <li>
                    A comprehensive 15-week program tailored for novice to intermediate lifters. This program provides detailed instructions for sets, reps, and proximity to failure for each exercise. Simply input your weight and the number of reps achieved for effective tracking.
                  </li>
                  <li>
                    Unlock the secrets of successful bulking with this in-depth guide designed to maximize muscle growth while minimizing fat gain. Follow the step-by-step guide to ensure optimal results throughout the 15-week training program.
                  </li>
                  <li>
                    The package includes a user-friendly weight and calorie tracking tool. Monitor your average weekly body weight and calorie intake effortlessly, making it easy to compare progress over weeks and months. Stay on track with your diet and training regimen using this handy tracker.
                  </li>
                  <li>
                    To enhance your understanding and utilization of the program and its spreadsheets, a concise instructional video is provided. Ensure you get the most out of the 15-week program with this informative video.
                  </li>
                </ul>
              </Col>
            </Row>
            <Container>
        <NavBar cartSize={cart.length} />
        {/* ... rest of your component ... */}
        <div>
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
      </Container>
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
                <NavLink to="/programs/meal-plan" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/meal-plan-image.jpg'}
                    alt="Meal Plan"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Meal Plan</h4>
                </NavLink>
              </Col>
              {/* Program 4: Workout Library */}
              <Col xs={12} md={6} className="mb-4">
                <NavLink to="/programs/workout-library" className="btn btn-warning btn-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/images/WorkoutLibrary-image.jpg'}
                    alt="Workout Library"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Workout Library</h4>
                </NavLink>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default Bulking;
