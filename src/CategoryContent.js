import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CategoryContent extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <h4>{this.props.currentCategory}</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
