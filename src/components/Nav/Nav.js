import React, { Component } from 'react';
import './nav.css'

class Nav extends Component {


    render() {
        return (
            <nav className='nav justify-content-center p-0'>
                <ul className="d-flex flex-row  p-0">
                    <li className="left-nav nav-sections d-flex justify-content-center">
                        MOCK MASTERS
                    </li>
                    <li className="right-nav nav-sections d-flex justify-content-center">
                        PLAYER SEARCH
                    </li>
                    {/*<li>*/}
                        {/*Leaderboard*/}
                    {/*</li>*/}
                    {/*<li className="d-flex flex-row pl-lg-5">*/}
                        {/*<span className="pl-5"><Link to="/" >Signout</Link></span>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        )
    }
}

export default Nav;