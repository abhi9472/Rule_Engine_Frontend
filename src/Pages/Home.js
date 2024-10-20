import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RuleForm from '../components/RuleForm.js';
import CombineForm from '../components/CombineForm.js';
import RuleEvaluator from '../components/RuleEvaluator.js';

const Home = () => {
    const navigate = useNavigate();
    const [rules, setRules] = useState([]); // Store created rules
    const [combinedAST, setCombinedAST] = useState(null); // Store combined AST

    const handleRuleCreated = (newRule) => {
        // Add the new rule to the existing rules
        setRules((prevRules) => [...prevRules, newRule]);
    };

    const handleCombined = (combined) => {
        setCombinedAST(combined); // Update the combined AST
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-4xl font-bold mb-6">Rule Engine</h1>

            {/* Navigation Buttons */}
            <div className="flex flex-col space-y-4 mb-6">
                <button
                    onClick={() => navigate('/create')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Create Rule
                </button>
                <button
                    onClick={() => navigate('/combine')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                    Combine Rules
                </button>
                <button
                    onClick={() => navigate('/evaluate')}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                    Evaluate Rules
                </button>
            </div>

            {/* Conditional Rendering of Components */}
            <div className="w-full max-w-md">
                {/* If on Create Page */}
                {window.location.pathname === '/create' && (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Create a New Rule</h2>
                        <RuleForm onRuleCreated={handleRuleCreated} />
                    </>
                )}

                {/* If on Combine Page */}
                {window.location.pathname === '/combine' && (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Combine Rules</h2>
                        <CombineForm rules={rules} onCombined={handleCombined} />
                    </>
                )}

                {/* If on Evaluate Page */}
                {window.location.pathname === '/evaluate' && (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Evaluate Rules</h2>
                        <RuleEvaluator combinedAST={combinedAST} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
