import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.svg";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="inner">

        <NavLink to={"/products"}><img src={Logo} alt="" /></NavLink>
        <ul className="links">
          <li><NavLink to={'/contact'} className={"contact"}>Help</NavLink></li>
          <li><NavLink to={'/cart'}><Icon className='carticon' icon="ph:bag-simple" /></NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
