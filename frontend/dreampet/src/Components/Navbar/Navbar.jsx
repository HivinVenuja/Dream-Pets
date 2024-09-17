import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assest/logo1.png'
import cart_icon from '../Assest/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("Sales");

  return (
    <div className='navbar' >
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>DREAM PET</p>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("Sales")}}><Link style={{ textDecoration:'none' }} to='/'>Sales</Link>{menu==="Sales"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Dogs")}}><Link style={{ textDecoration:'none' }} to='/Dogs'>Dogs</Link>{menu==="Dogs"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Cats")}}><Link style={{ textDecoration:'none' }} to='/Cats'>Cats</Link>{menu==="Cats"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Foods")}}><Link style={{ textDecoration:'none' }} to='/food'>Foods</Link>{menu==="Foods"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Accessories")}}><Link style={{ textDecoration:'none' }} to='/accessories'>Accessories</Link>{menu==="Accessories"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("Medicine")}}><Link style={{ textDecoration:'none' }} to='/medicine'>Medicine</Link>{menu==="Medicine"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar 