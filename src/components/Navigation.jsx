import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="branding">
      <Link to="/bookstore-cms/"><h1>Bookstore CMS</h1></Link>
    </div>
    <ul>
      <li>
        <Link to="/bookstore-cms/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/bookstore-cms/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
