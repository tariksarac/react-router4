import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

class Header extends Component {

    redirectToHomepage(){
        this.props.history.push('/')
    }
    render() {
        return (
            <header>
                <div onClick={this.redirectToHomepage.bind(this)}>
                    ReticleAppCenter
                </div>
                <nav>
                    {
                        this.props.authenticated ?
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Logout</Link>
                                </li>
                            </ul>
                            :
                            <ul>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                    }
                </nav>
            </header>
        )
    }
}

export default Header;