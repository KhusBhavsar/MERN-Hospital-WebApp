import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import cross from './images/cross.png'
import { useState, useEffect, useRef } from 'react';
import user from './images/user.png'
import user2 from './images/user2.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main'>
      <div className="logo-span">
      <img src={cross} alt="cross" className='cross' />
      <h2 style={{ fontSize:"4vh", margin:"28px", color:"red"}} className='spann'>24/7</h2>
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>
          <li >
            <Link to={"/Appointments"}>Appointments</Link>
          </li>
          <li >
            <Link to={"/doctorsStaffDirectory"}>Doctors & Services</Link>
          </li>
          <li>
            <Link to={"/Emergency"}>Emergency</Link>
          </li>
        </ul>

        <div className="input">
          <img
          style={{cursor:"pointer",width:"40px", height:"40px", marginLeft:"5px", border:"1px solid red", padding:"3px", marginBottom:"6px",borderRadius:"50%"}}
            src={user}
            alt="Dropdown Trigger"
            onClick={handleImageClick}
          />
          {isOpen && (
            <div ref={dropdownRef} className='drop'>
              <ul>
                <li style={{display:"flex"}}><img src={user2} alt="user2" style={{width:"30px", height:"30px"}} />khushangbhavsar25@gmail.com</li>
                <Link to="/"><li className='listy'>Log Out</li></Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
