import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const navbarRef = useRef();
  const bodyStyle = {
    paddingTop: '80px', // Adjust this value as needed to match the height of your navbar
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Set scroll position to the top on component mount
  }, []);

  return (
    <div style={bodyStyle}>
      <NavBar navbarRef={navbarRef} />
      <div className="text-center">
        <h1 className="display-4 mb-4" style={{ fontSize: '4rem', lineHeight: '1.2', fontStyle: 'italic' }}>
          ABOUT ME
        </h1>
        <h2 className="display-4 mb-4" style={{ fontSize: '2rem', lineHeight: '1.2' }}>Shafin Chowdhury</h2>
      </div>

      <section>
        <h3 className="mb-3">Certified Personal Bodybuilding Coach</h3>
        <p className="lead">
          With a solid foundation built on two years of hands-on experience in bodybuilding-style training, I am a certified personal fitness coach dedicated to guiding individuals towards their fitness goals. Whether it's weight loss, muscle gain, or overall health improvement, I leverage extensive research on muscle hypertrophy and intensity to design personalized and effective training programs.
        </p>
      </section>

      <section>
        <h3 className="mb-3">Taekwondo Expertise</h3>
        <p className="lead">
          A seasoned practitioner with nearly a decade of experience in Taekwondo, I proudly hold a black belt and achieved the 6th position nationally. My journey in Taekwondo not only honed my physical skills but also paved the way for my transition into bodybuilding coaching, allowing me to share my knowledge and passion with new trainees.
        </p>
      </section>

      <section>
        <h3 className="mb-3">Aspiring Pro Bodybuilder</h3>
        <p className="lead">
          Embarking on a bulk series showcased on my YouTube and TikTok channels since September 2023, I am committed to sharing valuable insights into the world of bodybuilding. Join me on this transformative journey by exploring my content through the following links:
        </p>
        <div className="text-center">
          <NavLink to="https://www.youtube.com/channel/UCrJbyXXL0oUBY9WVgKngcQg">
            <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="YouTube" className="mr-3" />
          </NavLink>
          <NavLink to="https://www.tiktok.com/@theyoungsleek">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png" alt="TikTok" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default About;
