import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <footer className="footer">
            <NavLink to={"/products"}><img src={logo} alt="" className="footerlogo" /></NavLink>
            <div className="left">
                <NavLink to={"/products"} className={"footerlinks"} >Shop</NavLink>
                <NavLink to={"/contact"} className={"footerlinks"} >Contact</NavLink>
                <p className="details">
                    24/7 Live Chat & Email <br />
                    Email Us: contact@jaxxon.com <br />
                    Call Us: 213-663-1585 <br />
                    Mon - Fri / 6am - 6pm PST <br />
                    Sat - Sun / 9am - 3pm PST <br />
                    6am - 2pm PST on 12/24 & 12/31 <br />
                    Closed: 11/23, 12/25, & 1/1 <br />
                </p>
                <div className="sociallinks">
                    <a href="https://google.com" target="_blank"><Icon className="social" icon="ic:baseline-facebook" /></a>
                    <a href="https://google.com" target="_blank"><Icon className="social" icon="iconoir:instagram" /></a>
                    <a href="https://google.com" target="_blank"><Icon className="social" icon="mdi:twitter" /></a>
                    <a href="https://google.com" target="_blank"><Icon className="social" icon="mdi:youtube" /></a>

                </div>
                <span className="copymsg" >&copy; 2023 JAXXON</span>
            </div>

        </footer>
    )
}

export default Footer;
