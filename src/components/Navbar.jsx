import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.svg";
import Cart from '../pages/cart';
import { useState } from 'react';

const Navbar = () => {
  var [showcart,setShowcart] = useState(false);
  return (
    <><nav className='navbar'>
      <div className="inner">

        <NavLink to={"/products"}><img src={Logo} alt="" /></NavLink>
        <ul className="links">
          <li><NavLink to={'/contact'} className={"contact"}>Help</NavLink></li>
          <li><Icon onClick={()=>{
            setShowcart(true);
          }} className='carticon' style={{cursor:"pointer"}} icon="ph:bag-simple" /></li>
        </ul>
      </div>
    {showcart?<Cart setShowcart={setShowcart} />:null}
    </nav>
    </>
  )
}

export default Navbar;
