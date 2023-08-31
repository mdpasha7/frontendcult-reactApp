import RestoComponent from "./Resto";
import restaurantData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const BodyComponent = () => {
    //whenever we update the state variable - React will automatically do the Re-Rendering


    let [restaurantData, filteredRestaurants] = useState([]);

    console.log('Rendering Component')

    useEffect( () => {
      console.log('this is use-effect');
      myfun1();
      myfun2();
      fetchData();
    }, []);
    function myfun1() {
      console.log('this is use-effect function-1');
    }
    function myfun2() {
      console.log('this is use-effect function-2');
    }

    console.log('some text');

    const fetchData = async() => {
      // javascript fetch method
      const resdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4225132&lng=78.3478252&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const originaldata = await resdata.json();
      //const apiRestolist  = originaldata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      //filteredRestaurants(apiRestolist);
      //console.log(apiRestolist);
      const apiRespoResto = [
        {
          id: "109168",
          name: "Al Rabea Al Arabi Cafeteria",
          cloudinaryImageId: "lu7b9y7xps4icwn6xzfj",
          locality: "Opposite Lucky Hotel",
          areaName: "Santosh Nagar",
          costForTwo: "₹250 for two",
          cuisines: [
            "Lebanese",
            "Arabian"
          ],
          avgRating: 4.3
        },
        {
        id: "1590",
        name: "Sarvi Restaurant",
        cloudinaryImageId: "ds6nasa6qpxunkhglz5g",
        locality: "Road 11",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor",
          "Desserts"
        ],
        avgRating: 4.1
       },
       {
        id: "140117",
        name: "Imperial Multi Cuisine Restaurant",
        cloudinaryImageId: "ib97mlmkhuwwv51syyca",
        locality: "saidabad x road",
        areaName: "Malakpet",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor"
        ],
        avgRating: 4.2
       },
       {
        id: "367769",
        name: "Lucky Restaurant",
        cloudinaryImageId: "qems028i3da5rxf81rbp",
        locality: "Banjara Hills",
        areaName: "MasabTank",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Tandoor"
        ],
        avgRating: 3.9
       },
       {
        id: "300363",
        name: "Barbeque Nation",
        cloudinaryImageId: "fb3b8wkhcnluea9hlshv",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹600 for two",
        cuisines: [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        avgRating: 3.8
       },
       {
        id: "355747",
        name: "Grameen Kulfi",
        cloudinaryImageId: "mwggy9gmdboqzi7gloms",
        locality: "KMIT",
        areaName: "Narayanguda",
        costForTwo: "₹120 for two",
        cuisines: [
          "Ice Cream",
          "Desserts"
        ],
        avgRating: 4.6
       },
       {
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
        avgRating: 3.7
       },
       {
        id: "142670",
        name: "Shah Ghouse Cafe & Restaurant",
        cloudinaryImageId: "bk26jkkqpg55veii0aj9",
        locality: "Santh Nirankari Satsang Bhavan",
        areaName: "Lakdikapul",
        costForTwo: "₹350 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Tandoor",
          "Mughlai",
          "North Indian"
        ],
        avgRating: 4.1
       }
      ];
      filteredRestaurants(apiRespoResto);
    }
    //conditional rendering 
    if(restaurantData.length == 0) {
      //show the shimmer
      return <Shimmer></Shimmer>
    }

    return (
        
        <div className="body">
            <div className="top-rated">
                <button className="top-resto" onClick={() => {
                    let filteredResto = restaurantData.filter( (resto) => resto.avgRating > 4);
                    //console.log(filteredResto);
                    filteredRestaurants(filteredResto);

                }}>Top Rated Restaurants</button>

            </div>
            <div className="resto-container">
              {
              restaurantData.map((restaurant => (<RestoComponent restoData = {restaurant}/>)))
              }


            {/* <RestoComponent restoData = {restaurantData[0]}/>
            <RestoComponent restoData = {restaurantData[1]}/>
            <RestoComponent restoData = {restaurantData[2]}/>
            <RestoComponent restoData = {restaurantData[3]}/> */}


            </div>
        </div>
    )
}

export default BodyComponent;