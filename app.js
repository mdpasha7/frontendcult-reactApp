import React from 'react';
import ReactDOM from 'react-dom';

/*
   <div id="parent">
        <div id="child">
          <h1 id="text">Hello all, i am form reactjs and nestedh1 </h1>
        </div>
   </div>
 */
// React create Element
const nestedElements = React.createElement('div',{id:'parent'},'Hello all, i am form reactjs and nested h1');
//Reactjs element is an object
console.log(nestedElements);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
//root2.render(nestedElements);// reactjs element - html element 

//jsx 
//babel-
let name = "My name is Mohammad Pasha";
let number = "8501012491";
const jsxdivision = <div id='parent' className='parent-class'>Hello,this is jsx and {name} and mobile number is {number}
<h1 id='heading'>Heading element</h1>
</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(jsxdivision);

// React Components
// Everything in React Components - 2 ways 
// 1) Class Based Components (OLD way)
// 2) Functional Based Components (99.999 we use this)

const userDetails = {
  userName : 'Mohammad Pasha'
}
const ButtonCom = () => (
  <input type='text'/>
);
const HeaderComponent = () => (
  <div class="header">
    <h2>{userDetails.userName},What's on your mind?</h2></div>
);
const ContentComponent = () => (
  <div class="content"><h1>My Content</h1></div>
);
const FooterComponent = () => (
  <div class="footer"><h1>My Footer</h1></div>
);

const HomePageComponent = () => (
  <div className='container'>
    <HeaderComponent></HeaderComponent>
    <ContentComponent></ContentComponent>
    <FooterComponent></FooterComponent>
  
  </div>
)


const root3 = ReactDOM.createRoot(document.getElementById('root3'));
//root.render(<HomePageComponent/>);