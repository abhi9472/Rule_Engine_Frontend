import React from 'react';

const RuleList = ({ rules }) => {
    if (rules.length === 0) {
        return <p>No rules created yet.</p>;
    }

    return (
        <ul>
            {rules.map((rule, index) => (
                <li key={index}>{rule.ruleString}</li>
            ))}
        </ul>
    );
};

export default RuleList;
