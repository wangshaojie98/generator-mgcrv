import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

function Index() {
  return (
    <div className="main">
      <ul>
        <li>
          <Link to={'/login'}>login12</Link>
        </li>
        <li>
          <Link to={'/quick-report'}>/quick-report</Link>
        </li>
        <li>
          <Link to={'/page2'}>/page2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index
