import React, { Component } from "react";
import { Table,Button } from "reactstrap";

export default class CartList extends Component {

    renderCart(){
        return(
            <Table bordered size="">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th>{cartItem.product.productName}</th>
                <th>{cartItem.quantity}</th>
                <Button onClick={()=>this.props.removeFromCart(cartItem.product)}  active color="danger" size="">
                  Remove
                </Button>
              </tr>              
            ))}
            
          </tbody>
        </Table>
        )
    }

  render() {
    return (
      <div>
       <h3>Your Cart</h3>
        {this.renderCart()}
      </div>
    );
  }
}