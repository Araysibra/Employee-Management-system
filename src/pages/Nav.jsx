import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate=useNavigate()
  return (
    <div>
       <nav class="navbar  bg-body-tertiary bg-black w-60">
  <div class="container-fluid bg-white">
    <a class="navbar-brand w-80" href="#" className='nav'><img src="spa_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt=""/><h2>our Admin</h2></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item m-2">
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>navigate("/")}>Home</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="">Employees</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="" onClick={()=>navigate("/AddEmp")}>Add new</a>
        </li>
        <li class="nav-item m-2">
          <a class="nav-link" href="login">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
