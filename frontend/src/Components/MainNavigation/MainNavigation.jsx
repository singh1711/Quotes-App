import React from 'react'
import { Link } from 'react-router-dom';
function MainNavigation() {
  return (
    <div>
        <h2>Great Quotes App</h2>
        <ul>
            <li>
                <Link to="/">All Quotes</Link>
            </li>
            <li>
                <Link to="/new">New Quotes</Link>
            </li>
        </ul>
    </div>
  )
}

export default MainNavigation;