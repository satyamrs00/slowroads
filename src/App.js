import React, { useState } from 'react';
import QueryEditor from './components/QueryEditor';
import DataTable from './components/DataTable';
import { mockData } from './data/mockData';

const App = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [history, setHistory] = useState([]);

    const getResults = (query) => {
        return mockData[query.trim()] || [];
    }

    const handleQueryChange = (query) => {
        setQuery(query);
    };

    const updateHistory = (query, result) => {
        setHistory((prevHistory) => {
            if (prevHistory.length >= 10) {
                return [...prevHistory.slice(1), { query, result }];
            }
            return [...prevHistory, { query, result }];
        });
    };

    const handleRunQuery = (highlightedQuery) => {
        if (highlightedQuery && window.getSelection().toString()) {
            const selectedText = window.getSelection().toString();
            const result = getResults(selectedText);
            setData(result);
            updateHistory(selectedText, result);
        } else {
            const result = getResults(query);
            setData(result);
            updateHistory(query, result);
        }
    }

    return (
        <div className="App">
            <h3>SQL Query Runner</h3>
            <QueryEditor onQueryChange={handleQueryChange} query={query} onRunQuery={handleRunQuery} mockData={mockData} history={history} />
            <DataTable data={data} />
        </div>
    );
};

export default App;

// TODO add a loading spinner when fetching data
// TODO add a button to save the query
// TODO fetch loading time
