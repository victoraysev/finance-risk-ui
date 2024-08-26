import React from 'react';
import '../styling/Result.css'; // Import the CSS file for styling

const Result = ({ data }) => {
    return (
        <div className="result-container">
            <h2 className="result-title">Calculation Result</h2>
            <textarea className="result-textarea" id="result" value={data} readOnly />
        </div>
    );
};

export default Result;
