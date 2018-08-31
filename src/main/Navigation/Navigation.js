import React from 'react'
import { NavLink, Route } from 'react-router-dom'

const Navigation = ( props ) => (
    <nav className="navBar">
        <nav className="wrapper">            
            <ul>
                <li><NavLink to='/feed/husky' activeClassName='is-active'>husky</NavLink></li>
                <li><NavLink to='/feed/labrador' activeClassName='is-active'>labrador</NavLink></li>
                <li><NavLink to='/feed/hound' activeClassName='is-active'>hound</NavLink></li>
                <li><NavLink to='/feed/pug' activeClassName='is-active'>pug</NavLink></li>
          </ul>
        </nav>
    </nav>
)

export default Navigation