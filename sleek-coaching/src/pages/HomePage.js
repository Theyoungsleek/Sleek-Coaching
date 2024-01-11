import React, { useEffect, useState, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {
  const navbarRef = useRef();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top on component mount
  }, []);
  const imageStyle = {
    width: '100%',
    height: 'auto',
  };
  const customLinkStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'red',
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    color: 'red',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100%',
  };
 const adjustedOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'red',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100%',
  };
  const welcomeStyle = {
    marginBottom: '20px',
    fontSize: '2vw',
  };

  const goldTextStyle = {
    fontSize: '1.5vw',
    fontStyle: 'italic',
    width: '80%',
    marginBottom: '20px',
    color: 'gold',
    fontFamily: 'Georgia, serif', // Change the font family as needed
    margin: '0 auto', // Center the text horizontally
  };
  
  const redTextStyle = {
    fontSize: '1.5vw',
    fontStyle: 'italic',
    width: '80%',
    marginBottom: '20px',
    color: 'red',
    fontFamily: 'Impact, sans-serif', // Change the font family as needed
    margin: '0 auto', // Center the text horizontally
  };
  
  const whiteTextStyle = {
    fontSize: '1.5vw',
    width: '80%',
    marginBottom: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif', // Change the font family as needed
    margin: '0 auto', // Center the text horizontally
  };

  const pStyle = {
    fontSize: '1.5vw',
    width: '80%',
    marginBottom: '0px',
  };

  const h1Style = {
    fontSize: '4vw',
    lineHeight: '1.2',
    fontStyle: 'italic',
    color: 'red',
    marginBottom: '40px',
  };

  const buttonStyle = {
    fontSize: '1.5vw',
    padding: '15px 30px', // Adjust padding as needed
  };

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0)' },
  });

  // Add padding-top to the body element
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };

  const lowerSectionStyle = {
    ...slideIn,
  };

  const scrollToHeading = () => {
    const headingElement = document.getElementById('whySleekHeading');

    if (headingElement && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const offset = headingElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={bodyStyle}>
      <NavBar navbarRef={navbarRef} />

      <div style={containerStyle}>
        {/* Replace the <img> element with a <video> element */}
        <video controls autoPlay muted loop style={imageStyle} playsInline>
          <source src="/images/logo-image.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={overlayStyle}>
  <h1 className="display-4 text-center mb-4" style={{ ...welcomeStyle, ...h1Style, marginBottom: '20px' }}>
    WELCOME TO SLEEK'S PERSONAL TRAINING WEBSITE
  </h1>
  <p id="whySleekSection" className="lead text-center" style={{ ...pStyle, marginBottom: '20px' }}>
    Premium bodybuilding style training that will sculpt and transform your physique in a way that you've never seen before while enjoying the process of it.
  </p>
  <button
  className="btn btn-warning btn-lg"
  onClick={scrollToHeading}
  style={{ ...buttonStyle, position: 'relative', marginBottom: '200px' }}
>
  Click here to see the details of my content
</button>
</div>

      </div>

      <div id="lowerSection" style={{ ...lowerSectionStyle }}>
        <animated.div
          style={{
            fontFamily: 'Arial, sans-serif',
            minHeight: '100vh',
            background: `url(${process.env.PUBLIC_URL}/images/background-image.jpg) center/cover no-repeat fixed`,
            ...fadeIn,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center', // Center text horizontally
          }}
        >
          <animated.h1 id="whySleekHeading" className="display-4 text-center mb-4" style={{ ...welcomeStyle, ...h1Style, ...slideIn }}>
            WHY SLEEK PHYSIQUE WILL WORK FOR YOU
          </animated.h1>
          <div className="text-center mt-3">
          <p style={whiteTextStyle}>
    Welcome to Sleek's Personal Training, where <span style={redTextStyle}>fitness</span> meets{' '}
    <span style={goldTextStyle}>transformation</span>, and excellence is achieved. Our philosophy goes beyond the
    conventional; we strive to sculpt not only your physique but also your mindset, making fitness an enjoyable and
    fulfilling journey.
  </p>
  <br />
  <p style={whiteTextStyle}>
    At Sleek, we understand that each individual is unique, and so is their fitness journey. Our personalized approach
    to training ensures that you not only reach your fitness goals but surpass them. We offer a range of programs
    designed to cater to your specific needs and aspirations.
  </p>
  <br />
  <p style={whiteTextStyle}>
    Whether you're looking to build remarkable <span style={goldTextStyle}>muscle mass</span>, achieve a{' '}
    <span style={redTextStyle}>shredded</span> physique, explore personalized meal plans, or access an extensive
    workout library, Sleek has you covered. Our programs are crafted with precision, combining effective workouts with
    tailored nutrition strategies to bring out the best in you.
  </p>
  <br />
  <p style={whiteTextStyle}>
    Your <span style={goldTextStyle}>transformation</span> journey doesn't end with the programs; it extends to our
    1:1 online coaching, where you receive exclusive guidance and continuous support. Elevate your fitness experience
    with Sleek, where every step is a stride towards a <span style={redTextStyle}>healthier, stronger, and more
    confident</span> you.
  </p>
  <br />
          </div>
          <div className="text-center mt-3">
            <NavLink to="/programs/bulking" className="btn btn-gold btn-lg" style={customLinkStyle}>
              BULK
            </NavLink>
            <p style={goldTextStyle}>
              Achieve remarkable muscle growth and enhance your physique with our specialized bulking program. Tailored workouts and nutrition plans designed for maximum muscle mass gains.
            </p>
            <br />
            <NavLink to="/programs/cutting" className="btn btn-gold btn-lg" style={customLinkStyle}>
              CUT
            </NavLink>
            <p style={goldTextStyle}>
              Attain that shredded look with our cutting program. Experience targeted workouts and nutrition strategies to reduce body fat while preserving lean muscle mass, revealing a sculpted physique.
            </p>
            <br />
            <NavLink to="/programs/meal-plan" className="btn btn-gold btn-lg" style={customLinkStyle}>
              MEAL PLAN
            </NavLink>
            <p style={goldTextStyle}>
              Explore a variety of meal plans tailored to your tastes and fitness goals. I will guide you with personalized dietary choices to support your body transformation journey.
            </p>
            <br />
            <NavLink to="/programs/workout-library" className="btn btn-gold btn-lg" style={customLinkStyle}>
              WORKOUT LIBRARY
            </NavLink>
            <p style={goldTextStyle}>
              Access our comprehensive workout library, meticulously organized by muscle groups. Discover optimal exercises to stimulate muscle growth and achieve your fitness objectives effectively.
            </p>
            <br />
            <NavLink to="/Main" className="btn btn-red btn-lg" style={customLinkStyle}>
              1:1 ONLINE COACHING
            </NavLink>
            <p style={goldTextStyle}>
              Elevate your fitness journey with personalized 1:1 online coaching. Gain exclusive access to all programs, with expert guidance and continuous support to ensure your success.
            </p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default HomePage;
