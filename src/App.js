import React, { useState } from 'react';
import FinancialForm from './components/FinancialForm';
import Result from './components/Result';

const App = () => {
    const [resultData, setResultData] = useState('');

    const handleFormSubmit = (formData) => {
        const { company, startDate, endDate, portfolioValue, confidence } = formData;

        // Simulate API call with mock data
        // Replace with your actual API call
        const mockResult = `Company: ${company}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nPortfolio Value: $${portfolioValue}\nConfidence Level: ${confidence}%\n\nMock VaR Calculation Result: 0.1234`;

        // Update resultData state with mock result
        setResultData(mockResult);
    };

    return (
        <div>
            <FinancialForm onSubmit={handleFormSubmit} />
            {resultData && <Result data={resultData} />}
        </div>
    );
};

export default App;
