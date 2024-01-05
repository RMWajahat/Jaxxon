import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Facility from '../components/Facility';
import watchImg from '../assets/watch1.jpeg';
import product1 from "../assets/watch1.jpeg";
import product2 from "../assets/watch2.jpeg";
import product3 from "../assets/watch3.jpeg";
import product4 from "../assets/watch4.jpeg";
import product5 from "../assets/watch5.jpeg";
import product6 from "../assets/watch6.jpeg";
const Checkout = () => {
  let [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const { productid } = useParams();
  const productIdNumber = parseInt(productid, 10);
  const addToCart = (product) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isProductInCart = existingCartItems.some((item) => item.id === product.id);
    if (!isProductInCart) {
      const updatedCart = [...existingCartItems, { ...product }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }
    setCount(0);
  };
  
  
  const watchList = [
    {
      id: 1,
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product1 ,
      newprice: 80,
      oldprice: 100,
    },
    {
      id: 2,
      productname: "Cuban Link2 Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product2 ,
      newprice: 50,
      oldprice: 60,
    },
    {
      id: 3,
      productname: "Cuban Link3 Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg:  product3 ,
      newprice: 120,
      oldprice: 150,
    },
    {
      id: 4,
      productname: "Cuban Link4 Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg:  product4 ,
      newprice: 110,
      oldprice: 100,
    }
    ,
    {
      id: 5,
      productname: "Cuban Link5 Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product5 ,
      newprice: 200,
      oldprice: 270,
    }
    ,
    {
      id: 6,
      productname: "Cuban Link6 Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product6 ,
      newprice: 1580,
      oldprice: 1720,
    }
  ];

  const selectedProduct = watchList.find(product => product.id === productIdNumber);


  return (
    <div className="checkout">
      {!selectedProduct?<div id="noproduct" ><span>404</span><span>😕</span>No product found!</div>:
      <>
      <div className="productimage">
        <img src={selectedProduct.productimg} alt="" />
      </div>
      <div className="productdetails">
        <h1 className='productname'>{selectedProduct.productname}</h1>
        <p className="desc">{selectedProduct.productdescription}</p>
        <div className="pricing">
          <h1 className="newpricing">${selectedProduct.newprice}</h1>
          <h1 className="oldpricing">${selectedProduct.oldprice}</h1>
        </div>
        <small className="note">*You can make payment with stripe</small>
        <div className="sizes">
          <h1 className="sizetag">Available Sizes: </h1>
          <small className="sizesall">'XL' + 'L' + 'SM'</small>
        </div>
        <div className="addto">
        <button className="addtocart" onClick={() => addToCart(selectedProduct)}>
  Add to Cart
</button>
          <div className="counters">
            <button className="decrement" onClick={() => { count !== 0 ? setCount(--count) : setCount(0); }}>-</button>
            <p className="count">{count}</p>
            <button className="increment" onClick={() => { setCount(++count); }}>+</button>
          </div>
        </div>
        <div className="facilities">
          <Facility icontype={"carbon:delivery"} facilityname={"Free Shipping"} facitydesc={"on Every US order"} />
          <Facility icontype={"formkit:time"} facilityname={"Timely delivery"} facitydesc={"Get it as early as"} />
          <Facility icontype={"icon-park:connection-arrow"} facilityname={"30 Days Return"} facitydesc={"& Exchange"} />
        </div>
      </div>
      </>
      }
    </div>
  );
};

export default Checkout;
