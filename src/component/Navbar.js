import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <u>
                <li><NavLink exact to="/"  activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home
                    </NavLink>
                </li>
                <li><NavLink exact to="/about"  activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>About
                    </NavLink>
                </li>
                <li><NavLink exact to="/services"  activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Services
                    </NavLink>
                </li>
                <li><NavLink exact to="/posts/js"  activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Javascript
                    </NavLink>
                </li>
            </u>
        </nav>
    )
}
