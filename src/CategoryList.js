import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };
  //live circle event. burada getCategory metodunu cagirirg ki yerlesdirsin kategoriyalari
  componentDidMount(){
    this.getCategories();
  }
 getCategories = ()=>{
   fetch("http://localhost:3000/categories") //api-a fetch ile gosurug
   .then(response=>response.json()) // gelen datani json a ceviririk
   .then(data=>this.setState({categories:data}));; //ordanda gelen jsonu set ediyirik state-deki categories-e
 }
  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}