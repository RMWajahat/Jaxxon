import { Icon } from "@iconify/react";

const Facility = (props) => {
  return (
    <div className="facility">
                <Icon className='iconImg' icon={props.icontype} />
                <h1>{props.facilityname}</h1>
                <p>{props.facitydesc}</p>
              </div>
  )
}

export default Facility
