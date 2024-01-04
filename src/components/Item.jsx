import { Icon } from "@iconify/react"

const Item = (product) => {
  return (
    <div className="cartitem">
                <div className="left">
                <img src={product.watch} alt="product" />
                </div>
                <div className="right">
                        <div className="detail">
                            <h1>{product.itemname}</h1>
                            <small>{product.typedata}</small>
                        </div>
                        <div className="otherremove">
                            <button className="remove"><Icon className="closecart" icon="material-symbols:close" />Remove</button>
                            <div className="pricing">
                                {product.oldprice==0?<span className="oldone"></span>:<span className="oldone">${product.oldprice}</span>}
                                <span className="newone">${product.newprice}</span>
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default Item
