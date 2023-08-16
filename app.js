import React from 'react';
import ReactDOM from 'react-dom';

/*
   <div id="parent">
        <div id="child">
          <h1 id="text">Hello all, i am form reactjs and nestedh1 </h1>
        </div>
   </div>
 */

const nestedElements = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'}),
React.createElement('h1',{id:'text'},'Hello all, i am form reactjs and nested h1'));
console.log(nestedElements);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(nestedElements);
