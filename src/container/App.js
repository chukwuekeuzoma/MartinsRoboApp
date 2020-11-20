import React from "react";
// import {CardData} from "./CardData";
import CardList from "../component/CardList"
import SearchBox from "../component/SearchBox";
import { Component } from "react";
import Scroll from "../component/Scroll";

class App extends Component{
    constructor(){
        super()
        this.state = {
            CardData:[],
            searchfield:"",
        }
    }
    componentDidMount(){
     fetch("https://jsonplaceholder.typicode.com/users").then(act => act.json())
      .then(actagain => this.setState({CardData:actagain}));
    }
   onSearchChange = (event) => {
            this.setState({searchfield:event.target.value})
        }
    render(){
        const fliterCardData = this.state.CardData.filter(CardData =>{
            return CardData.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
            });
        if (!this.state.CardData.length) {
            return <h1 className ="tc">Loading Martins Robo Friends.....</h1>
        } else {
          return(
          <div className="tc">
              <h1>Martins Robo Friends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
             <Scroll>
                <CardList CardData={fliterCardData}/>   
            </Scroll>   
          </div>
            )}
}};

export default App;