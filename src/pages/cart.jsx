import { Icon } from "@iconify/react";
import Item from "../components/Item";

import Watch from "../assets/watch1.jpeg";
import Watch2 from "../assets/watch2.jpeg";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Cart = (props) => {
    var [total,setTotal] = useState(742*2);
    var [cartitems,setCartitems] = useState(4);
  return (
    <div className="cartcontainer ">
        <div className="head">
            <h1>Your Cart <span>({cartitems})</span></h1>
            <Icon className="closecart" icon="material-symbols:close" onClick={()=>{
                props.setShowcart(false);
            }} />
        </div>
        <div className="allcarts">
            {cartitems?<>
            <Item watch={Watch} itemname={"Cuban Watch - 8mm"} oldprice={303} newprice={256} typedata={'Gold + Pure Black, 22"'} />
            <Item watch={Watch} itemname={"Cuban Watch - 8mm"} oldprice={303} newprice={256} typedata={'Gold + Pure Black, 22"'} />
            <Item watch={Watch} itemname={"Cuban Watch - 8mm"} oldprice={303} newprice={256} typedata={'Gold + Pure Black, 22"'} />
            <Item watch={Watch2} itemname={"Lamma Watch Gold"} oldprice={500} newprice={486} typedata={'Gold, 22" + 24"'} />
            </>: <span className="isempty">Your Cart in Empty😢 <br /> <NavLink to={"products"} onClick={()=>{
                props.setShowcart(false);
            }} >Come Let's go to shop <Icon className="goback" icon="maki:arrow" /></NavLink> </span>
            }
            
            
        </div>
        <div className="totalncheckout">
            <div className="totalpricing">
                <h1>Total: </h1>
                <small>${total}</small>
            </div>
            <NavLink to={"payment"} onClick={()=>{
                props.setShowcart(false);
            }} className="checkoutpayment">Checkout</NavLink>
        </div>
    </div>
  )
}

export default Cart;
