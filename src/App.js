import React, { useState } from 'react';
import QueryEditor from './components/QueryEditor';
import QuerySelector from './components/QuerySelector';
import DataTable from './components/DataTable';
import { mockData } from './data/mockData';

const App = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const getResults = (query) => {
        return mockData[query] || [];
    }

    const handleQueryChange = (event) => {
        const selectedQuery = event.target.value;
        setQuery(selectedQuery);
    };

    const handleRunQuery = (highlightedQuery) => {
        if (highlightedQuery && window.getSelection().toString()) {
            const selectedText = window.getSelection().toString();
            const result = getResults(selectedText);
            setData(result);
        } else {
            const result = getResults(query);
            setData(result);
        }
    }

    return (
        <div className="App">
            <h1>SQL Query Runner</h1>
            <QueryEditor onQueryChange={handleQueryChange} query={query} onRunQuery={handleRunQuery} mockData={mockData}/>
            <DataTable data={data} />
        </div>
    );
};

export default App;