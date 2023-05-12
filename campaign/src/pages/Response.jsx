import React from 'react';
import { Link } from 'react-router-dom';

const Response = ({ populations }) => {
  return (
    <div className="response-container">
      <h1>Campaign General Info</h1>
      <div className="field-container">
        <p className="field-label">Campaign Name:</p>
        <p className="field-value">Campaign A</p>
      </div>
      <div className="field-container">
        <p className="field-label">Start Date:</p>
        <p className="field-value">May 1, 2023</p>
      </div>
      <div className="field-container">
        <p className="field-label">End Date:</p>
        <p className="field-value">June 1, 2023</p>
      </div>
      <div className="field-container">
        <p className="field-label">Target Populations (Top 5):</p>
        <ul className="population-list">
          {populations.slice(0, 5).map((population, index) => (
            <li key={index}>
              <Link
                to={`/population/${population.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="population-link"
              >
                {population.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Response;