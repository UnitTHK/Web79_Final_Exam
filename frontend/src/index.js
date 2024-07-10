import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" component={Home} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
