import React, { Component }  from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render() {
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark teaxt-white">
                <Link className="navbar-brand  ml-3" to="/">Navbar</Link>

                <div className="">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link"  to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                   
                    </ul>
                </div>
            </nav>
        </React.Fragment>
        )
    }
}
export default Navbar;