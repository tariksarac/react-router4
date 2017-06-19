import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavDropdown, MenuItem, FormGroup, FormControl} from 'react-bootstrap'

import './Header.css'

const Header = () =>
    <div>

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
                            { true ? (
                                <div
                                    onClick={() => {
                                        console.log('login');
                                    }}
                                >
                                    Login
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        console.log('logout');
                                    }}
                                >
                                    Logout
                                </div>
                            )}

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

    </div>

Header.propTypes = {
    // authService: PropTypes.object.isRequired,
    // history: PropTypes.shape({
    //     push: PropTypes.func.isRequired,
    // }).isRequired,
    // isAuthenticated: PropTypes.bool.isRequired,
    // profile: PropTypes.object,
    // error: PropTypes.string,
    // loginRequest: PropTypes.func.isRequired,
    // logoutSuccess: PropTypes.func.isRequired
}

export default Header