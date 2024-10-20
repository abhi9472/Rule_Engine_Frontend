import React, { useState } from 'react';
import axios from 'axios';

const EvaluateRule = () => {
    const [ruleString, setRuleString] = useState('');
    const [data, setData] = useState({ age: '', department: '', salary: '', experience: '' });
    const [evaluationResult, setEvaluationResult] = useState(null); // State to hold evaluation result
    const [errorMessage, setErrorMessage] = useState(null); // State to hold error message if any

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct the payload directly without nesting
        const payload = {
            ruleString: ruleString,
            data: {
                age: Number(data.age),
                department: data.department,
                salary: Number(data.salary),
                experience: Number(data.experience),
            },
        };

        console.log("Payload being sent:", payload);

        try {
            const response = await axios.post('http://localhost:5001/api/rules/evaluate', payload);
            console.log('Evaluation Result:', response.data);
            setEvaluationResult(response.data); // Set the evaluation result
            setErrorMessage(null); // Clear any previous error messages
        } catch (error) {
            console.error('Error evaluating rule:', error);
            setErrorMessage('Error evaluating the rule. Please try again.'); // Set an error message
            setEvaluationResult(null); // Clear previous evaluation result on error
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Evaluate Rule</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Rule String:</label>
                    <input 
                        type="text" 
                        value={ruleString} 
                        onChange={(e) => setRuleString(e.target.value)} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Age:</label>
                    <input 
                        type="number" 
                        value={data.age} 
                        onChange={(e) => setData({ ...data, age: e.target.value })} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Department:</label>
                    <input 
                        type="text" 
                        value={data.department} 
                        onChange={(e) => setData({ ...data, department: e.target.value })} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Salary:</label>
                    <input 
                        type="number" 
                        value={data.salary} 
                        onChange={(e) => setData({ ...data, salary: e.target.value })} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Experience:</label>
                    <input 
                        type="number" 
                        value={data.experience} 
                        onChange={(e) => setData({ ...data, experience: e.target.value })} 
                        required 
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300"
                >
                    Evaluate Rule
                </button>
            </form>

            {/* Display Evaluation Result */}
            {evaluationResult && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <h3 className="font-semibold">Evaluation Result:</h3>
                    <pre>{JSON.stringify(evaluationResult, null, 2)}</pre>
                </div>
            )}

            {/* Display Error Message */}
            {errorMessage && (
                <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default EvaluateRule;
