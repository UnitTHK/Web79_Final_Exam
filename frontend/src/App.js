import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const Homepage = lazy(() => import('./components/Homepage'));

const App = () => {
    return (
        <Router>
            <div className="app">
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/" component={Homepage} exact />
                </Suspense>
            </div>
        </Router>
    );
};

export default App;