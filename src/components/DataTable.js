import React from 'react';

const DataTable = ({ data }) => {
    const downloadAsCSV = () => {
        const headers = Object.keys(data[0]);
        const csvContent = data.map(row => Object.values(row).join(',')).join('\n');
        const blob = new Blob([`${headers.join(',')}\n${csvContent}`], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        a.click();
        URL.revokeObjectURL(url);
    }

    return (
        <div className='data-table-container'>
            <div className='data-table'>
                {data.length === 0 && (
                    <div className='data-table-empty'>
                        No data available
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            {data.length > 0 && Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>    
            </div>
            <div className='data-table-controls'>
                <button className='data-table-button' onClick={downloadAsCSV}>Export as CSV</button>
            </div>
        </div>
    );
};

export default DataTable;