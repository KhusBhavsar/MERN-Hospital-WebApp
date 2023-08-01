import { Link, useLocation } from "react-router-dom";
import cross from './images/cross.png'

const  Navbar1= () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const buttonText = isLoginPage ? "SignUp" : "Login";
  const buttonLink = isLoginPage ? "/SignUp" : "/";

  return (
    <div className='main'>
      <div className="logo-span">
        <img src={cross} alt="cross" className='cross' />
        <h2 style={{ fontSize:"4vh", margin:"28px", color:"red"}} className='spann'>24/7</h2>
      </div>
      <Link to={buttonLink}><button>{buttonText}</button></Link>
    </div>
  );
};

export default Navbar1