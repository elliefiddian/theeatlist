import React from "react";

//import "./App.css";


import brunch from "./Images/brunch.jpeg"
import chinese from "./Images/chinese.jpeg"
import mexican from "./Images/mexican.jpeg"
import smokehouse from "./Images/smokehouse.jpeg"
import sushi from "./Images/sushi.jpeg" 


function Card (props) {
    return (
      <div> 
        <img src = {props.url}/> 
        <h1> {props.title} </h1>
      </div>
    )
} 
 
  class App extends React.Component{ 
    render() { 
        return (
        <div class = "container"> 
        <Card url = {brunch} title = "Bunch Place"/> 
        <Card url = {chinese} title ="Chinese Place" />
        <Card url = {mexican} title = "Mexican Place" />
        <Card url = {smokehouse} title = "Smokehouse Place" /> 
        <Card url = {sushi} title = "Sushi Place" /> 
       </div> 
        )
    } 
} 
    
// //const About = () => {
//     return (
//         <div className="container">
//             <h1 className="text-centre" style={{paddingTop: "30%"}}>
//                 About 
//                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
//                 pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
//                 Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
//                 in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
//                 per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
//                 vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
//                 Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
//                 faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
//                 Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
//                 Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
//                 non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p>
//             </h1>
//         </div>
export default App; 
