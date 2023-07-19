import './Navbar.css'
import React from 'react'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="navbar-left">
        <div className="logo-container">
          <img src="images/logo.png" alt="logo" />
          <h2>BeatCode</h2>
        </div>
        <ul className="navigation">
          <li>Explore</li>
          <li>Problems</li>
          <li>Interview</li>
          <li>Contest</li>
          <li>Discuss</li>
          <li className='store'><i className="fa-solid fa-store"></i> Store</li>
        </ul>
      </div>

      {/* --------------------------------------------------- */}

      <div className="navbar-right">
        <button> <i className="fa-sharp fa-regular fa-star"></i> Premium</button>
        <i className="right-icon fa-solid fa-bell"></i>
        <i className="right-icon fa-solid fa-fire"></i>
        <i className="right-icon fa-solid fa-circle-user"></i>
      </div>
    </div>
  )
}

export default Navbar