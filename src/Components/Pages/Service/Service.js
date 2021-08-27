import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'


function App () {
    return (
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src= "https://picsum.photos/100/20" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Personalised Dining Experiences </h5>
      <p class="card-text">We round up the best gourmet dining options from Michelin-chef catering to curated menus delivered direct to your door. </p>
      <Button variant ="primary"> Select your Experience </Button>
    </div>
  </div>
  <div class="card-deck">
    <img class="card-img-top" src= "https://picsum.photos/100/20"  alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Private Driver and Family Chauffeur to Resturants </h5>
      <p class="card-text">These personal drivers pay attention to navigation, parking, and traffic while you relax in the back of the vehicle. </p>
      <Button variant ="primary"> Select your Transport </Button>
    </div>
  </div>
  <div class="card-deck">
    <img class="card-img-top" src= "https://picsum.photos/100/20"  alt="Card image cap"></img> 
    <div class="card-body">
      <h5 class="card-title">Theatre and Dining Package</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <Button variant ="primary">  Select your Package </Button>
    </div>
  </div>
</div>
); 
}; 


export default App; 
