import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'



function App () {
    return (
        <div className="card-group">
            <div class = "card"> 
                <ul class="nav nav-pills card-header-pill">
            <li class="nav-item">
                <a class="nav-link active" href="https://hutong.co.uk/mod/menu/752">Menu</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://hutong.co.uk/reservation/booking">Reservation</a>
            </li>
            </ul>        
                   
            <Card className= "w-25 p-3" style={{ color: "#000" }}>
               <Card.Img src = {"https://picsum.photos/200/300"} />
                <Card.Body>
                    <Card.Title> 
                        Authentic Chinese food
                    </Card.Title>
                    <Card.Text>
                      Hutong Resturant 
                    <Card.Text> 
                    Level 33 The Shard, London
                    </Card.Text>
                    </Card.Text>
                    <Button variant ="primary"> Read More </Button>
                </Card.Body>     
            </Card>  
        
                     
            <Card className= "w-25 p-3" style={{ color: "#000" }}>
               <Card.Img src = {"https://picsum.photos/200/300"} />
                <Card.Body>
                    <Card.Title> 
                        Authentic Chinese food
                    </Card.Title>
                    <Card.Text>
                      Hutong Resturant 
                    <Card.Text> 
                    Level 33 The Shard, London
                    </Card.Text>
                    </Card.Text>
                    <Button variant ="primary"> Read More </Button>
                </Card.Body>     
            </Card>  



            </div>
        </div>
 )
    } 

export default App; 
