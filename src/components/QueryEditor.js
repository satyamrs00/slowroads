import React, { useMemo, useState, useEffect } from 'react';

const QueryEditor = ({ onQueryChange, query, onRunQuery, mockData }) => {
    const [isTextSelected, setIsTextSelected] = useState(false);

    const onTextSelect = () => {
        const selectedText = window.getSelection().toString();
        setIsTextSelected(selectedText.length > 0);
    };

    return (
        <div className="query-editor">
            <h2>Query Editor</h2>
            <textarea
                value={query}
                onChange={onQueryChange}
                rows="5"
                cols="50"
                placeholder="Enter your SQL query here"
                onSelect={onTextSelect}
                onMouseDown={onTextSelect}
                className='query-editor-textarea'
            />

            <div className="query-editor-controls">
                <select onChange={onQueryChange} value={query}>
                    <option value="">Select a query</option>
                    {Object.keys(mockData).map((query) => (
                        <option key={query} value={query}>
                            {query}
                        </option>
                    ))}
                </select>

                <button onClick={() => onRunQuery(isTextSelected)}>
                    Run {isTextSelected ? 'Selected' : 'Current'}
                </button>
            </div>
        </div>
    );
};

export default QueryEditor;