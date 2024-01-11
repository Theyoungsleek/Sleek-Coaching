import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Advantages = () => {
  const [showAdvantages, setShowAdvantages] = useState(false);

  const toggleAdvantages = () => {
    setShowAdvantages(!showAdvantages);
  };

  const tableAnimation = useSpring({
    opacity: showAdvantages ? 1 : 0,
    transform: showAdvantages ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <div className="mt-4">
      <button className="btn btn-secondary" onClick={toggleAdvantages}>
        Click here to see the advantages
      </button>
      {showAdvantages && (
        <animated.div style={tableAnimation} className="mt-3">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="bg-danger text-black">Standard Edition</th>
                <th className="bg-warning text-black">Premium Edition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meal Plan</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Tutorial videos</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Custom workout program</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>First week intro meeting</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>24/7 access</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Check-ins</td>
                <td>2</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Investment</td>
                <td>$150</td>
                <td>$350 (Save $100) - BEST VALUE!</td>
              </tr>
            </tbody>
          </table>
        </animated.div>
      )}
    </div>
  );
};

export default Advantages;
