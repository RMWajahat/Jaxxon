
const Product = (props) => {
    
  return (
    <div className="product">
            <img src={props.productimg} alt="productimg" />
            <div className="gotoproduct">
            <h1 className="productname">{props.productname}</h1>
            <h3 className="productdescription">{props.productdescription}</h3>
            <div className="price">
                <span className="newprice">${props.newprice}</span>
                <span className="oldprice">{props.oldprice==null?"":"$"}{props.oldprice}</span>
            </div>
            </div>
        </div>
  )
}

export default Product;
