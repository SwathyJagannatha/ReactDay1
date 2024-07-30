// import React,{Component} from "react";


// class header extends Component{
//     render() {
//         <header className="header">
//             <img src="logo.png" alt="Company Logo" className="logo" />
//             <nav>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/services">Services</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                 </ul>
//             </nav>
//         </header>
//         }

//         return (
           
//         )
// }

import React from "react"
import myImg from './bob.jpg'
import './header.css'
const Header = () => {
    return(
      <div className = "container-div">
        <h2 > Bob the Builder</h2>
        <img src={myImg} alt="Bob The Builder" className="bob" />
      </div>
    )
}

export default Header;