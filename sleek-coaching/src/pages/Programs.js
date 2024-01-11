import React, { useState } from 'react';

const Programs = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="text-center">
      <h1>Programs</h1>

      <div className="dropdown d-inline-block">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          Select Program
        </button>
        <div
          className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
          aria-labelledby="dropdownMenuButton"
          style={{ position: 'absolute', transform: 'translateX(-50%)' }}
        >
          <a className="dropdown-item" href="/programs/bulking">
            Bulking
          </a>
          <a className="dropdown-item" href="/programs/cutting">
            Cutting
          </a>
          <a className="dropdown-item" href="/programs/meal-plan">
            Meal Plan
          </a>
          <a className="dropdown-item" href="/programs/workout-library">
            Workout Library
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
