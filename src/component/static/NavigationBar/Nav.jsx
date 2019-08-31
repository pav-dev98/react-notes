import React from 'react';
import './Nav.css';
import image from './image/pavel.jpg';

class Nav extends React.Component{
    render(){
        console.log(image);
        return ( 
        <div className="nav_content">
            <nav className="blue">
                <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Notes</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><div>
                        <a href=""><img src={image} className="circle img-nav" alt="" /></a>
                    </div></li>
                    <li><a href="badges.html">Config</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav blue" id="mobile-demo">
                <li className="side-user"><di>
                    <img src={image} alt="mifoto" className="circle img-side" />
                    <h5>Pavel Mansilla</h5>
                    <p>@pav</p>
                </di></li>
                <li><a href="">grupos</a></li>
                <li><a href="">others</a></li>
                <li><a href="">others</a></li>
                <li><p>Agosto 23 ,2019</p></li>
            </ul>
        </div>
        );
    }
}

export default Nav
