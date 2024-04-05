import React from 'react';
import  ReactDOM from 'react-dom/client';
/* <div id= "parent"> 
<div id= "child">
 <h1> hello<h1>
</div>
*</div>
*
*
*at the end react element is an object only
*/ 

const parent = React.createElement
("div",
{id:"parent"},
 [React.createElement(
    "div",
    {id:"child1"},
  [React.createElement("h1",{},"hello word"),React.createElement("h2",{},"hello word")]
  ),
  React.createElement(
    "div",
    {id:"child2"},
  [React.createElement("h1",{},"hello word"),React.createElement("h2",{},"hello word")]
  )])//suppose i want 2 h1 or h2 tag means sibling then we need to warp with []

console.log(parent)

// its very dificulte to mainatin and more complex to read so that is why JSX came into the picture

// const heading = React.createElement('h1', {
//     id:"heading", xyz:"abc",  //will give atttribute
// }, "hello shankar");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)