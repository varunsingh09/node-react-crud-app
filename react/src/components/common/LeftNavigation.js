import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LeftNavigation extends Component{

    render(){
            return (
                <nav className="navbar-default navbar-side" >
                    
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            
                            
                            <li>
                                <Link to="/ListUser"><i className="fa fa-edit "></i>List User</Link>
                            </li>
                            
                        </ul>
                    </div>

                </nav>
            );
    }
}
export default LeftNavigation;        