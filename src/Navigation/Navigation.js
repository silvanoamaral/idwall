import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav className="navBar">
        <nav className="wrapper">            
            <ul>
                <li><NavLink to='/feed/' activeClassName='is-active'>husky</NavLink></li>
                <li><NavLink to='/labrador' activeClassName='is-active'>labrador</NavLink></li>
                <li><NavLink to='/hound' activeClassName='is-active'>hound</NavLink></li>
                <li><NavLink to='/pug' activeClassName='is-active'>pug</NavLink></li>
          </ul>
        </nav>
    </nav>
)

export default Navigation 