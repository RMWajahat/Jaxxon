import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const [cartitems, setCartitems] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("cartItems"));
        if (storedProducts && Array.isArray(storedProducts)) {
            setCartitems(storedProducts);
        }
    }, []);

    useEffect(() => {
        // Update the local storage whenever cartitems change
        localStorage.setItem("cartItems", JSON.stringify(cartitems));

        // Update total when cartitems change
        const newTotal = cartitems.reduce((acc, product) => acc + product.totalPrice, 0);
        setTotal(newTotal);
    }, [cartitems]);

    const removeFromCart = (productId) => {
        const updatedCart = cartitems.filter(product => product.id !== productId);
        setCartitems(updatedCart);
    };

    return (
        <div className="cartcontainer ">
            <div className="head">
                <h1>Your Cart <span>({cartitems.length})</span></h1>
                <Icon className="closecart" icon="material-symbols:close" onClick={() => {
                    props.setShowcart(false);
                }} />
            </div>
            <div className="allcarts">
                {cartitems.length ? <>
                    <div>
                        {cartitems.map((product) => (
                            <div className="cartitem" key={product.id}>
                                <div className="left">
                                    <img alt="product" src={product.productimg} />
                                </div>
                                <div className="right">
                                    <div className="detail">
                                        <h1>{product.productname}</h1>
                                        <small>{product.productdescription}</small>
                                    </div>
                                    <div className="otherremove">
                                        <button className="remove" onClick={() => removeFromCart(product.id)}>
                                            <Icon className="closecart" icon="material-symbols:close" />
                                            Remove
                                        </button>
                                        <div className="pricing">
                                            {product.oldprice === 0 ? <span className="oldone"></span> : <span className="oldone">${product.oldprice}</span>}
                                            <span className="newone">${product.newprice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </> : <span className="isempty">Your Cart is Empty😢 <br /> <NavLink to={"products"} onClick={() => {
                    props.setShowcart(false);
                }} >Come Let's go to shop <Icon className="goback" icon="maki:arrow" /></NavLink> </span>
                }
            </div>
            <div className="totalncheckout">
                <div className="totalpricing">
                    <h1>Total: </h1>
                    <small>${total}</small>
                </div>
                <NavLink to={"payment"} onClick={() => {
                    props.setShowcart(false);
                }} className="checkoutpayment">Checkout</NavLink>
            </div>
        </div>
    );
}

export default Cart;
