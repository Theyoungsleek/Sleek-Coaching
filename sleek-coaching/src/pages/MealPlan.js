import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const MealPlan = ({ cart, setCart }) => {
  const navbarRef = useRef();
  const handleAddToCart = () => {
    const programToAdd = {
      name: 'Cookbook made by Sleek',
      quantity: quantity,
    };

    setCart((prevCart) => [...prevCart, programToAdd]);
  };
  const [quantity, setQuantity] = useState(1);
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
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
              Cookbook made by Sleek
            </h1>
            <Row>
              <Col xs={20} md={10} className="mb-4">
                {/* Image on the left */}
                <img
                  src={process.env.PUBLIC_URL + '/images/MealPlan-image.jpg'}
                  alt="MealPlan Program"
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
                  <h2>Bulking Phase:</h2>
                  <li>
                  High-Calorie Power Meals: Delicious, nutrient-dense recipes with a focus on high-quality protein, complex carbohydrates, and healthy fats to support muscle growth.   </li>
                  <li>
                  Strategic Macronutrient Ratios: Optimal protein, carbohydrate, and fat ratios to maximize muscle protein synthesis and energy levels during intense training.     </li>
                  <h2>Cutting Phase:</h2>      
                 <li>
                  Lean and Satisfying Recipes: Flavorful, low-calorie meals that prioritize lean protein sources, fibrous vegetables, and smart carbohydrate choices to facilitate fat loss without sacrificing taste. </li>
                  <li>
                  Metabolism-Boosting Foods: Inclusion of thermogenic ingredients to support a faster metabolism and enhance the body's ability to burn fat during the cutting phase.   </li>
                  <h2>Meal Planning and Timing:</h2>
  <ul>
    <li>
      Nutrient Timing Strategies: Insightful guidance on pre and post-workout nutrition, ensuring bodybuilders fuel their training sessions and optimize recovery.
    </li>
    <li>
      Weekly Meal Plans: Customizable meal plans for different caloric needs, making it easy to adjust for individual goals and preferences.
    </li>
  </ul>

  {/* Kitchen Hacks and Tips */}
  <h2>Kitchen Hacks and Tips:</h2>
  <ul>
    <li>
      Time-Efficient Cooking: Quick and practical cooking tips for busy bodybuilders, emphasizing efficiency without compromising nutritional quality.
    </li>
    <li>
      Budget-Friendly Options: Cost-effective ingredient alternatives without compromising on nutritional content, making the cookbook accessible to a wide range of users.
    </li>
  </ul>

  {/* Supplement Integration */}
  <h2>Supplement Integration:</h2>
  <ul>
    <li>
      Evidence-Based Supplements: Guidance on the strategic use of supplements to complement the dietary approach, emphasizing their role in achieving specific bodybuilding goals.
    </li>
  </ul>
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
                    alt="Meal Plan"
                    className="img-fluid"
                  />
                  <h4 className="text-center mt-2">Bulking</h4>
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

export default MealPlan;
