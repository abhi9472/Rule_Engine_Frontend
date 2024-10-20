import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home.js"; // Ensure this component exists
import CombinePage from "./Pages/Combine.js"; // Ensure this component exists
import RuleEvaluator from "./components/RuleEvaluator.js"; // Import the evaluator component
import RuleForm from "./components/RuleForm.js";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        {/* Header Section */}
       

        {/* Main Content */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/combine" element={<CombinePage />} />
            <Route path="/evaluate" element={<RuleEvaluator />} />{" "}
            <Route path="/create" element={<RuleForm onRuleCreated={() => {}} />} /> {/* Add RuleForm route */}
            {/* Add evaluator route */}
          </Routes>
        </main>

        {/* Footer Section */}
       
      </div>
    </Router>
  );
}

export default App;
