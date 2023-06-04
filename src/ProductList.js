import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table bordered size="">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <th>{product.categoryId}</th>
                <th>{product.productName}</th>
                <th>{product.quantityPerUnit}</th>
                <th>{product.unitPrice}</th>
                <th>{product.unitsInStock}</th>
                <Button onClick={()=>this.props.addToCart(product)}  active color="primary" size="">
                  Add
                </Button>
              </tr>              
            ))}
            
          </tbody>
        </Table>
      </div>
    );
  }
}
