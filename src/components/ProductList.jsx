import product1 from "../assets/watch1.jpeg";
import product2 from "../assets/watch2.jpeg";
import product3 from "../assets/watch3.jpeg";
import product4 from "../assets/watch4.jpeg";
import product5 from "../assets/watch5.jpeg";
import product6 from "../assets/watch6.jpeg";


import Product from "./Product";

const ProductList = () => {
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
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product2 ,
      newprice: 50,
      oldprice: 60,
    },
    {
      id: 3,
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg:  product3 ,
      newprice: 120,
      oldprice: 150,
    },
    {
      id: 4,
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg:  product4 ,
      newprice: 110,
      oldprice: null,
    }
    ,
    {
      id: 5,
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product5 ,
      newprice: 200,
      oldprice: 270,
    }
    ,
    {
      id: 6,
      productname: "Cuban Link Chain - 8mm",
      productdescription: "Includes Cuban Link Chain - 5mm",
      productimg: product6 ,
      newprice: 1580,
      oldprice: 1720,
    }
  ];
  return (
    <div className="productslist">
      <h1 className="collections" >Our Collections</h1>
      <div className="products">

        {
          watchList.map((product) => {
            return <Product key={product.id} productname={product.productname} productdescription={product.productdescription} productimg={product.productimg} newprice={product.newprice} oldprice={product.oldprice} />
          })
        }




      </div>
    </div>
  )
}

export default ProductList;