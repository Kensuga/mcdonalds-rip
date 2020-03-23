import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'

class App extends Component {
  constructor(){
    super()
    this.state = {
      totalPrice: 0,
      menu: [
        {name: "Burger", cost: 4.5, emoji: "🍔"},
        {name: "Fries", cost: 1.5, emoji: "🍟"},
        {name: "Drink", cost: 2, emoji: "🥤"},
        {name: "Ice Cream", cost: 2.5, emoji: "🍦"},
      ],
      emojiList: []
    }
  }
  
  addMenuPrice(price, emoji){
    let newTotal = this.state.totalPrice + price
    this.setState({ totalPrice: newTotal })
    this.state.emojiList.push(emoji)
    this.setState({emojiList: this.state.emojiList})
  }

  render(){
  return (
    <>
      <h3>Select Your Items:</h3>
      <div>
        {this.state.menu.map((item,index)=>{
          return(
          <Menu 
            key = {index}
            menuItem={ item.name }
            itemCost={ item.cost }
            itemEmoji={ item.emoji }
            addMenuPrice= { this.addMenuPrice() }
          />)
        })}
        <p>Total Cost: {this.state.totalPrice}</p>
        <div style={{height:"40px"}}>
          Items: {this.state.emojiList.map(value => <span>{value}</span>)}
        </div>
      </div>
    </>
  )}
}

export default App;