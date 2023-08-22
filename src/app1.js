import React from "react";
import ReactDOM from "react-dom";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import BodyComponent from "./components/Body";
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
* ---------------- Folder Structuring -----------
* Properties for Components
* will create src folder and move the app1.js in to it
* Will Create Component and will put all component in folder
* will create seperate component file and link in app1.js
*/






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