import { Icon } from "@iconify/react";
import logo from "../assets/logo.svg";

const PaymentCheckout = () => {
  return (
    <div className="paymentcheckout">
      <form action="#" className="paymentstripe">
        <div className="payhead">
          <img src={logo} alt="company logo" />
          <small>Cart <Icon className="nextis" icon="maki:arrow" /> Payment</small>
        </div>
        <div className="contactarea">
        <h1 className="contacttag">Contact</h1>
        <input type="email" name="email" id="email" placeholder="Email" required autoComplete="off" />
        <div className="keepuptodate">
          <input type="checkbox" name="uptodate" id="" />
          <small>Keep me up to date on news and exclusive offers</small>
        </div>
        </div>
        <div className="shipping_details">
        <h1 className="contacttag">Shipping address</h1>
        <input type="text" name="fname" id="firstname" placeholder="First name" required autoComplete="off" />
        <input type="text" name="lname" id="lastname" placeholder="Last name" required autoComplete="off" />
        <input type="text" name="address" id="address" placeholder="Address" required  autoComplete="off"/>
        <input type="text" name="number" id="number" pattern="[0-9]+" placeholder="Mobile Phone Number" required autoComplete="off" />
        <div className="keepuptodate">
          <input type="checkbox" name="savedata" id=""/>
          <small>Save information for next time</small>
        </div>
        <div className="keepuptodate">
          <input type="checkbox" name="notify" id="" required/>
          <small>Yes, I would like to recieve shipment notifications.</small>
        </div>
        </div>
        <input type="submit" value="Place Order" />
      </form>
    </div>
  )
}

export default PaymentCheckout
