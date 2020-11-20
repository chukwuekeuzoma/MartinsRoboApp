import React from "react";
import Card from "./Card"

function CardList({CardData}) {
     const cardDataArrays =  CardData.map((user)=>{
        return(
        <Card key={user.id} 
        id ={user.id} 
        name={user.name} 
        email={user.email}/>
        )
     });
   return(
        <div>
            {cardDataArrays}
        </div>
    )
    
}
export default CardList;