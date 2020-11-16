import React from "react";
import Card from "./Card"

function CardList({CardData}) {
  const cardDataArrays =  CardData.map((user,i)=>{
        return(
        <Card key={i} 
        id ={CardData[i].id} 
        name={CardData[i].name} 
        email={CardData[i].email}/>
        )
     });
   return(
        <div>
            {cardDataArrays}
        </div>
    )
    
}
export default CardList;