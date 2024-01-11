import React, { useEffect, useState, useRef } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Advantages from './Advantages'; // Import the Advantages component
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const MainPage = () => {
  const navbarRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top on component mount
  }, []);
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };
  return (
    
    <animated.div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        background: `url(${process.env.PUBLIC_URL}/images/background-image.jpg) center/cover no-repeat fixed`,
        ...fadeIn,
      }}
    >
      <div style={bodyStyle}></div>
      <div className="container mt-5 text-white" style={bodyStyle}>
      <NavBar navbarRef={navbarRef} />
        <h1 className="display-4 text-center mb-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
          1:1 ONLINE COACHING
        </h1>
        <p className="lead text-center">
          My 1:1 online coaching will help you transform your physique with personalized health and fitness guidance.
          We will work together to create a custom workout plan designed specifically for your goals and availability,
          a custom meal plan, weekly check-ins, and 24/7 access to my personal number to ask questions.
          With my help, you can reach your fitness goals, get the body you've always wanted, and enjoy the whole process of it.
          Complete the application below to learn more about my 1:1 online coaching program.
        </p>

      
        {/* Before section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center mb-4">
            <h2
              className="display-5 font-italic font-weight-bold before-title"
              style={{ fontSize: '2rem', lineHeight: '1.2', background: 'red', border: '2px solid black' }}
            >
              Before
            </h2>
          </div>

          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td className="text-center">
                    <div className="card border-0">
                      <img src="/images/before1.jpg" alt="Before 1" className="card-img-top img-fluid rounded" />
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="card border-0">
                      <img src="/images/before2.jpg" alt="Before 2" className="card-img-top img-fluid rounded" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* After section */}
        <div className="row mt-5">
          <div className="col-md-12 text-center mb-4">
            <h2
              className="display-5 font-italic font-weight-bold after-title"
              style={{ fontSize: '2rem', lineHeight: '1.2', background: 'green', border: '2px solid black' }}
            >
              After a year
            </h2>
          </div>

          <div className="col-md-12">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td className="text-center">
                    <div className="card border-0">
                      <img src="/images/after1.jpg" alt="After 1" className="card-img-top img-fluid rounded" />
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="card border-0">
                      <img src="/images/after2.jpg" alt="After 2" className="card-img-top img-fluid rounded" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          {/* Advantages section */}
          <Advantages />

{/* Button that leads to an external link */}
<div className="text-center mt-4">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSdy-dK-1ZVhhd69bll6VpL0Tf2BezQBINQA8aoYuVznEe2ZNw/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn btn-primary">Apply here</button>
  </a>
</div>

      </div>
      <div className="text-center mt-5">
              <h1 className="display-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
                Other Programs
              </h1>
            </div>
            <Row className="mt-4">
              {/* Program 1: 1:1 ONLINE COACHING */}
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
    </animated.div>
  );
};

export default MainPage;
