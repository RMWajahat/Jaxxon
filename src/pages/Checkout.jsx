import watchImg from '../assets/watch1.jpeg';
import { useState } from 'react';
import Facility from '../components/Facility';

const Checkout = (props) => {
  let [count,setCount] = useState(0);

  console.log(props);
  return (
    <div className="checkout">
      <div className="productimage">
       <img src={watchImg} alt="" />
      </div>
      <div className="productdetails">
        <h1 className='productname' >Cuba Link</h1>
        <p className="desc">includes cuba link chain</p>
        <div className="pricing">
          <h1 className="newpricing">$242</h1>
          <h1 className="oldpricing">$303</h1>
        </div>
        <small className="note">*You can make payment with stripe</small>
        <div className="sizes">
          <h1 className="sizetag">Available Sizes: </h1>
          <small className="sizesall">'XL' + 'L' + 'SM'</small>
        </div>
        <div className="addto">
          <button className="addtocart">Add to Cart</button>
          <div className="counters">
            <button className="decrement" onClick={()=>{
              count!=0?setCount(--count):setCount(0);
            }}>-</button>
            <p className="count">{count}</p>
            <button className="increment" onClick={()=>{
              setCount(++count);
            }} >+</button>
          </div>
        </div>
            <div className="facilities">
             <Facility icontype={"carbon:delivery"} facilityname={"Free Shipping"} facitydesc={"on Every US order"} />
             <Facility icontype={"formkit:time"} facilityname={"Timely delivery"} facitydesc={"Get it as early as"} />
             <Facility icontype={"icon-park:connection-arrow"} facilityname={"30 Days Return"} facitydesc={"& Exchange"} />
            </div>
      </div>
    </div>
  )
}

export default Checkout;
