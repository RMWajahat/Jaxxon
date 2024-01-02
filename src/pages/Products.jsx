import Facility from "../components/Facility";
import Header from "../components/Header";
import ProductList from "../components/ProductList";


const Products = () => {
  return (
    <div>
      <Header/>
      <div className="facilities homepagefacility">
             <Facility icontype={"carbon:delivery"} facilityname={"Free Shipping on Every US order"} facitydesc={"Applies to all US orders big or small"} />
             <Facility icontype={"solar:hand-stars-linear"} facilityname={"50,000+ 5-Star reviews"} facitydesc={"Feel confident will thousands of verified happy customers"} />
             <Facility icontype={"icon-park:connection-arrow"} facilityname={"Easy Returns & Exchange"} facitydesc={"Have a piece of mind with our 30 day return window"} />
             <Facility icontype={"formkit:time"} facilityname={"Fast delivery options"} facitydesc={"Get your order as early as Wed, January 10"} />
      </div>
      <ProductList/>

    </div>
  )
}

export default Products
