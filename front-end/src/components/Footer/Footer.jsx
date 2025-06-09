import { assets } from "../../assets/assets"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea sed recusandae veniam amet, numquam maxime illo neque quo, quaerat sapiente quam mollitia ipsa reprehenderit quia eius est, iste ab dignissimos ratione doloribus facere? Doloribus culpa numquam debitis exercitationem. Soluta.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h1>GET IN TOUCH</h1>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025  © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer