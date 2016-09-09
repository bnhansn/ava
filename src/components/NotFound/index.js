import React from 'react';
import { Link } from 'react-router';
import './styles.css';

const NotFound = () =>
  <div className="not-found">
    <p>Page not found</p>
    <p><Link to="/">Go to the home page →</Link></p>
  </div>;

export default NotFound;
