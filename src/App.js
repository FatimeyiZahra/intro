// import React from "react";
import React, { Component } from "react";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import CategoryContent from "./CategoryContent";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [] };
  componentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId" + categoryId;
    }
    fetch(url) //api-a fetch ile gosurug
      .then((response) => response.json()) // gelen datani json a ceviririk
      .then((data) => this.setState({ products: data })); //ordanda gelen jsonu set ediyirik state-deki categories-e
  };
  render() {
    let categoryInfo = { title: "Category List" };
    let contentInfo = { title: "Category Content" };
    return (
      <div>
        <Container>
          <Row>
            <Navbar />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <CategoryContent
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={contentInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
