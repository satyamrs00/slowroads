import React from 'react';

const QuerySelector = ({ onQuerySelect }) => {
    const queries = [
        { name: 'Select All Users', value: 'SELECT * FROM users' },
        { name: 'Select Active Users', value: 'SELECT * FROM users WHERE active = true' },
        { name: 'Select User by ID', value: 'SELECT * FROM users WHERE id = ?' },
    ];

    return (
        <div>
            <h2>Select a Query</h2>
            <ul>
                {queries.map((query) => (
                    <li key={query.value} onClick={() => onQuerySelect(query.value)}>
                        {query.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuerySelector;