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

const restaurantData = {
      id: "57903",
      name: "Capital Multi Cuisine Restaurant",
      cloudinaryImageId: "ijy2jxi7lfwsebdtazpi",
      areaName: "Malakpet",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Arabian",
        "Lebanese"
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "57903",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100
          },
          {
            name: "BASE_TIME"
          },
          {
            name: "ANCILLARY_SURGE_FEE"
          }
        ],
        totalFee: 3100
      },
      parentId: "19262",
      avgRatingString: "3.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2023-08-23 02:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {}
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    };

const RestoComponent = (props) => {
    console.log(props);
    const {restoData} = props;
    console.log(restoData);
    return (
        <div className="resto">
            <img src="https://tse2.mm.bing.net/th?id=OIP.Yry1dvxtNwfagdBt9MQT4wHaG-&pid=Api&P=0&h=180" alt="tifin logo"/>
            <h2>{restoData.name}</h2>
            <h4>{restoData.avgRating}</h4>
            <h4>{restoData.areaName}</h4>
            <h4>{restoData.costForTwo}</h4>
            <h4>{restoData.cuisines.join(',')}</h4>

        </div>
    )
};

const BodyComponent = () => {
    return (
        
        <div className="body">
            <div className="resto-container">
            <RestoComponent restoData = {restaurantData}/>
            <RestoComponent restoData = {restaurantData}/>
            {/* <RestoComponent
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
            /> */}
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