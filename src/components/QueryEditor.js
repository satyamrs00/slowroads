import React, { useMemo, useState, useEffect } from 'react';

const QueryEditor = ({ onQueryChange, query, onRunQuery, mockData, history }) => {
    const [isTextSelected, setIsTextSelected] = useState(false);

    const onTextSelect = () => {
        const selectedText = window.getSelection().toString();
        setIsTextSelected(selectedText.length > 0);
    };

    return (
        <div className="query-editor">
            <textarea
                value={query}
                onChange={(event => onQueryChange(event.target.value))}
                rows="5"
                cols="50"
                placeholder="Enter your SQL query here"
                onSelect={onTextSelect}
                onMouseDown={onTextSelect}
                className='query-editor-textarea'
            />

            <div className="query-editor-controls">
                <select onChange={(event => onQueryChange(event.target.value))} value={query}>
                    <option value="">Select from dummy</option>
                    {Object.keys(mockData).map((query) => (
                        <option key={query} value={query}>
                            {query}
                        </option>
                    ))}
                </select>

                <select onChange={(event => onQueryChange(event.target.value))} value={query}>
                    <option value="">Select from history</option>
                    {history.map((item, index) => (
                        <option key={index} value={item.query}>
                            {item.query}
                        </option>
                    ))}
                </select>

                <button onClick={() => onQueryChange('')} disabled={!query}>
                    Clear
                </button>

                <button onClick={() => onRunQuery(isTextSelected)} disabled={!query}>
                    Run {isTextSelected ? 'Selected' : 'Current'}
                </button>
            </div>
        </div>
    );
};

export default QueryEditor;