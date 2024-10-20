import React, { useState } from 'react';
import CombineForm from '../components/CombineForm.js';

const Combine = () => {
    const [combinedAST, setCombinedAST] = useState(null);

    const handleCombinedAST = (ast) => {
        setCombinedAST(ast);  // Set the combined rule
    };

    return (
        <div>
            <h1>Combine Rules</h1>
            <CombineForm onCombined={handleCombinedAST} />
            {/* {combinedAST && (
                <pre>{JSON.stringify(combinedAST, null, 2)}</pre>
            )} */}
        </div>
    );
};

export default Combine;
