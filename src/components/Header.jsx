import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <h3>Navbar w/ text</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/register'>Register</Link>
        </li>
        <li class="nav-item">
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
  )
}

export default Header