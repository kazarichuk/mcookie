import React from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

import './HomePage.styles.css';

const HomePage = () => {
  return (
    <ErrorBoundary>
      <div className='home-page'>
        <h1 className='title'>Home Page</h1>
        <p className='subtitle'>Welcome to the home page!</p>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </ErrorBoundary>
  );
}

export default HomePage;
