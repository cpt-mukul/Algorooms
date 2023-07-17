import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'
import React from "react"
import logo from "../img/logoM.png"
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
       <img src={logo} style={{height:"7vh"}}></img>
      </Link>
      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}