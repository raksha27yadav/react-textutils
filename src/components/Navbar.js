import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.navcol} bg-${props.navcol}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        
      </ul>
      
    </div>
    <div className={`form-check form-switch mx-3 text-${props.navcol=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.navcol=='light'?'dark':'light'} mode</label>
</div>

<div className={`form-check form-switch mx-3 text-${props.navcol=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.rtogglemode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.navcol=='light'?'red':'light'} mode</label>
</div>


<div className={`form-check form-switch mx-3 text-${props.navcol=='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.gtogglemode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.navcol=='light'?'green':'light'} mode</label>
</div>









  </div>
</nav>
    </div>
  )
}