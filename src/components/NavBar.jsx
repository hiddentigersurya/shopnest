import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function NavBar() {
  const quantity = useSelector((store)=>store.cartReducer.cartQuantity);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">
          <NavLink to="/" className="nav-brand">
            ShopNest
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>
            Home
          </NavLink>
          <NavLink to="/user" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Users
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <div className="cart_container">
              <FaCartShopping fontSize={"1.5rem"} />
              <div className="cart_quantity">{quantity}</div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar