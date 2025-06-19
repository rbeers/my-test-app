import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setApiResponse(data);
    } catch (err) {
      setError('Failed to fetch data from API');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/health');
      const data = await response.json();
      setApiResponse(data);
    } catch (err) {
      setError('Failed to check API health');
      console.error('Health Check Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Full-Stack JavaScript Demo</h1>
        <p>Express API + React Frontend</p>
      </header>
      
      <main className="App-main">
        <div className="card">
          <h2>API Interaction</h2>
          <p>Click the buttons below to interact with the Express API:</p>
          
          <div className="button-group">
            <button 
              onClick={callApi} 
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? 'Loading...' : 'Call Hello API'}
            </button>
            
            <button 
              onClick={checkHealth} 
              disabled={loading}
              className="btn btn-secondary"
            >
              {loading ? 'Loading...' : 'Check API Health'}
            </button>
          </div>

          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
            </div>
          )}

          {apiResponse && (
            <div className="api-response">
              <h3>API Response:</h3>
              <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
            </div>
          )}
        </div>

        <div className="info-card">
          <h3>📋 How it works:</h3>
          <ul>
            <li><strong>Express Server:</strong> Running on port 3001 with auto-reload</li>
            <li><strong>React App:</strong> Running on port 3000 with hot reload</li>
            <li><strong>API Endpoints:</strong> /api/hello and /api/health</li>
            <li><strong>Auto-reload:</strong> Changes are reflected immediately</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App; 