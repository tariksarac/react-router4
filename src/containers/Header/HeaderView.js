import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown, MenuItem, FormGroup, Button, FormControl} from 'react-bootstrap'

import AuthService from '../../utils/AuthService'
import './Header.css'

const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
    <div>
        {/*here goes dropdown react component not bootstrap*/}
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">ReticleAppCenter</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>Action</MenuItem>
                        <MenuItem eventKey={1.2}>Another action</MenuItem>
                        <MenuItem eventKey={1.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Login/Register" id="login-register-dropdown">
                        <MenuItem eventKey={2.1}><Link to='/register'>Register</Link></MenuItem>
                        <MenuItem eventKey={2.2}>
                            { !isAuthenticated ? (
                                <div
                                    onClick={() => {
                                        authService.login();
                                        loginRequest()
                                    }}
                                >
                                    Login
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        logoutSuccess()
                                        AuthService.logout();// careful, this is a static method
                                        history.push({ pathname: '/' })
                                    }}
                                >
                                    Logout
                                </div>
                            )}
                            { error &&
                            <p>{error}</p>
                            }
                        </MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <Navbar.Form>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                    </Navbar.Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


        {/*<h1>React Redux Auth0 Kit</h1>*/}
        {/*<ul className="list-inline">*/}
            {/*<li><Link to='/'>Home</Link></li>*/}
            {/*<li><Link to='/about'>About</Link></li>*/}
        {/*</ul>*/}
        { !isAuthenticated ? (
            null
        ) : (
            <div>
                <img src={profile.picture} height="40px" alt="profile" />
                <span>Welcome, {profile.nickname}</span>
            </div>
        )}
        { error &&
        <p>{error}</p>
        }

    </div>

Header.propTypes = {
    authService: PropTypes.object.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    profile: PropTypes.object,
    error: PropTypes.string,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
}

export default Header