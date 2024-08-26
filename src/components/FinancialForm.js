import React, { useState, useEffect } from 'react';
import '../styling/FinancialForm.css'; // Import the CSS file for styling

const FinancialForm = ({ onSubmit }) => {
    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [portfolioValue, setPortfolioValue] = useState('');
    const [confidence, setConfidence] = useState('');

    useEffect(() => {
        // Fetch companies from the API
        // Uncomment and replace the URL with your actual endpoint
        // axios.get('http://localhost:8083/financial-records/companies')
        //     .then(response => {
        //         setCompanies(response.data);
        //     })
        //     .catch(error => console.error('Error fetching companies', error));

        // Mock data for demonstration purposes
        const mockCompanies = ['AAPL', 'MSFT', 'GOOG', 'TSLA', 'AMZN'];
        setCompanies(mockCompanies);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ company, startDate, endDate, portfolioValue, confidence });
    };

    return (
        <form className="financial-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Financial Analysis Form</h2>
            <div className="form-group">
                <label className="form-label">Company:</label>
                <select className="form-select" value={company} onChange={(e) => setCompany(e.target.value)} required>
                    <option value="">Select Company</option>
                    {companies.map((comp) => (
                        <option key={comp} value={comp}>{comp}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Start Date:</label>
                <input className="form-input" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label className="form-label">End Date:</label>
                <input className="form-input" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label className="form-label">Portfolio Value:</label>
                <input className="form-input" type="number" value={portfolioValue} onChange={(e) => setPortfolioValue(e.target.value)} required />
            </div>
            <div className="form-group">
                <label className="form-label">Confidence Level (%):</label>
                <input className="form-input" type="number" value={confidence} onChange={(e) => setConfidence(e.target.value)} required />
            </div>
            <button className="form-button" type="submit">Calculate VaR</button>
        </form>
    );
};

export default FinancialForm;
