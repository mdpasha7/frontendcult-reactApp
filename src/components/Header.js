import { SITE_LOGO } from "../utils/constants";

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={SITE_LOGO} alt="logo" height="100px" width="100px"/>
            </div>
            <div className="navitem">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Top Offers</li>
                    <li>My card</li>
                </ul>

            </div>
        </div>
    )
}

export default HeaderComponent;