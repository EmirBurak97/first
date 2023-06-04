import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart {this.props.cart.length}
          </DropdownToggle>
          <DropdownMenu right>            
          
                {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge color="danger " onClick={()=>this.props.removeFromCart(cartItem.product)}>Delete</Badge>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem>
              <Link to="cart">Go to cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmpty() {
    return (
      <div>
        <NavItem>
          <NavLink>Empty Cart</NavLink>
        </NavItem>
      </div>
    );
  }

  render() {
    return (
    <div>
{this.props.cart.length>0?this.renderSummary():this.renderEmpty()}
    </div>
    )
  }
}
