import React from "react";
import ReactDOM from "react-dom";
/*
* Header Component 
* - Logo
* - Menu Items

* BodyComponent
* - Searchbar
* -Resto Component
*   - Image
*   - Resto Name
*   - Rating
*   - Delivery Time

* Footer Component
* - copyrights.
* - links
* Properties for Components
*/
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://logodix.com/logo/94501.jpg" alt="logo" height="100px" width="100px"/>
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
};
const RestoComponent = (props) => {
    console.log(props);
    return (
        <div className="resto">
            <img src="https://tse2.mm.bing.net/th?id=OIP.Yry1dvxtNwfagdBt9MQT4wHaG-&pid=Api&P=0&h=180" alt="tifin logo"/>
            <h2>{props.resName}</h2>
            <p>{props.resMake}</p>
            <h4>{props.resRating}</h4>
            <h4>{props.resDeliverytime}</h4>

        </div>
    )
};

const BodyComponent = () => {
    return (
        
        <div className="body">
            <div className="resto-container">
            <RestoComponent 
             resName= 'Varalakshmi'
             resRating = '3.6'
             resDeliverytime = '30min'
             resMake = 'Biryani, Tandoori'
            />
            <RestoComponent
             resName= 'KFC Food'
             resRating = '3.8'
             resDeliverytime = '40min'
             resMake = 'Fried Pieces'
            />
            <RestoComponent
             resName= 'Manohara Food'
             resRating = '5.0'
             resDeliverytime = '5min'
             resMake = 'All Indian Foods'
            />
            <RestoComponent
             resName= 'chetan'
             resRating = '4.0'
             resDeliverytime = '20min'
             resMake = 'Biryani'
            />
            </div>
        </div>
    )
};



const FooterComponent = () => {
    return (
        <div className="footer"><h2>Footer Component </h2></div>
    )
};

const AppLayout = () => {
    return (
        <div className="container-fluid">
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>
        </div>

    )
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<AppLayout></AppLayout>);