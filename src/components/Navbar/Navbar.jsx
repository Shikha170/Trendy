import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { FiHeart} from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Navbar = ({handleInputChange,query}) => {

  const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="" height="45px" width="130px" className="logo" /></Link>
      <ul className='navbar-menu'>
      <Link to="/"><li onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</li></Link>
      <li onClick={()=>setMenu("men")}className={menu==="men"?"active":""}>Men</li>
      <li onClick={()=>setMenu("women")}className={menu==="women"?"active":""}>Women</li>
      <li onClick={()=>setMenu("kids")}className={menu==="kids"?"active":""}>Kids</li>
      <li onClick={()=>setMenu("beauty")}className={menu==="beauty"?"active":""}>Beauty</li>
      <li onClick={()=>setMenu("contactus")}className={menu==="contactus"?"active":""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
      <nav>
    <div className="nav-container">
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."
      />
    </div>
    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineUserAdd className="nav-icons" />
      </a>
    </div>
  </nav>
        
      </div>
    </div>
  )
}

export default Navbar

