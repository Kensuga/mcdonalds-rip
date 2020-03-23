import React, { Component } from 'react'
import {Card, Button} from 'reactstrap'

class Menu extends Component {

    addItem() {
        this.props.addMenuPrice(this.props.itemCost, this.props.itemEmoji)
    }
    
    render(){
        return(
            <>
                <Card body>
                    <Card.Title>Menu Item: { this.props.menuItem }</Card.Title>
                    <Card.Text>Menu Price: ${ this.props.itemCost }</Card.Text>
                    <Button onClick={ this.addItem }>Add { this.props.menuItem }</Button>
                </Card>
            </>
        )
    }
}

export default Menu