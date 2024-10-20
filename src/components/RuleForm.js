// src/components/RuleForm.js
import React, { useState } from 'react';
import { createRule } from '../services/RuleServices.js'; // Ensure this function is defined properly in your service

const RuleForm = ({ onRuleCreated }) => {
    const [ruleString, setRuleString] = useState('');
    const [createdRule, setCreatedRule] = useState(null); // To store the created rule/AST

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createRule({ ruleString }); // Send rule as an object
            setCreatedRule(response.data.astNode); // Assuming the backend returns the AST
            onRuleCreated(); // Call parent function to update rules
            setRuleString(''); // Clear the input field
        } catch (error) {
            console.error('Error creating rule:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Create Rule</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={ruleString}
                            onChange={(e) => setRuleString(e.target.value)}
                            placeholder="Enter your rule"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300"
                    >
                        Create Rule
                    </button>
                </form>
                {createdRule && (
                    <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        <h3 className="font-semibold">Created Rule AST:</h3>
                        <pre>{JSON.stringify(createdRule, null, 2)}</pre> {/* Displaying the AST */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RuleForm;
