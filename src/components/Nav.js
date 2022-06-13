import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeclassname='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/add-question' activeclassname='active'>
            Add question
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}