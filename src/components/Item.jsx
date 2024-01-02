import { Icon } from "@iconify/react"

const Item = (props) => {
  return (
    <div className="cartitem">
                <div className="left">
                <img src={props.watch} alt="product" />
                </div>
                <div className="right">
                        <div className="detail">
                            <h1>{props.itemname}</h1>
                            <small>{props.typedata}</small>
                        </div>
                        <div className="otherremove">
                            <button className="remove"><Icon className="closecart" icon="material-symbols:close" />Remove</button>
                            <div className="pricing">
                                {props.oldprice==0?<span className="oldone"></span>:<span className="oldone">${props.oldprice}</span>}
                                <span className="newone">${props.newprice}</span>
                            </div>
                        </div>
                </div>
            </div>
  )
}

export default Item
