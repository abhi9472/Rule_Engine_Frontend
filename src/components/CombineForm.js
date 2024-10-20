import React, { useState } from 'react';
import { combineRules } from '../services/RuleServices.js';
import '../index.js'

const CombineForm = ({ onCombined }) => {
    const [rules, setRules] = useState(['']);  // Initialize with one empty rule
    const [response, setResponse] = useState(null); // State to hold server response

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create the request body in the expected format
        const requestBody = {
            rules: rules.filter(rule => rule.trim() !== '') // Filter out any empty rules
        };

        try {

            const res = await combineRules(requestBody); // Pass the request body
            setResponse(res.data); // Save the response
            onCombined(res.data.combinedAST); // Pass the combined AST to parent component
        } catch (error) {
            console.error('Error combining rules:', error);
            setResponse({ error: 'Failed to combine rules. Please try again.' });
        }
    };

    const handleChange = (index, value) => {
        const newRules = [...rules];
        newRules[index] = value;
        setRules(newRules);
    };

    const addRule = () => {
        setRules([...rules, '']); // Add a new empty rule input field
    };

    const removeRule = (index) => {
        const newRules = [...rules];
        newRules.splice(index, 1); // Remove the rule input at the given index
        setRules(newRules);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            {/* <h2 className="text-lg font-semibold mb-4">Combine Rules</h2> */}
            <form onSubmit={handleSubmit}>
                {rules.map((rule, index) => (
                    <div key={index} className="flex items-center mb-3">
                        <input
                            type="text"
                            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder={`Rule ${index + 1}`}
                            value={rule}
                            onChange={(e) => handleChange(index, e.target.value)}
                            required
                        />
                        <button 
                            type="button" 
                            onClick={() => removeRule(index)} 
                            className="ml-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button 
                    type="button" 
                    onClick={addRule} 
                    className="mb-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Add Another Rule
                </button>
                <br />
                <button 
                    type="submit" 
                    className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Combine Rules
                </button>
            </form>

            {response && (
                <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
                    <h3 className="font-semibold">Response from Server:</h3>
                    <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default CombineForm;
