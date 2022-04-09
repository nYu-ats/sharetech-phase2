import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoute } from './routes/AppRoute';

export const App = () => {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}