import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";

class Discover extends Component {
  state = {
    search: "",
    result: [],
    friendCounter: 0
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.retrieveDog();
  }

  retrieveDog = () => {
    API.retrieveDog()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleClick = e => {
    const name = e.target.name
    const randomNum = Math.floor((Math.random() * 5) + 1)

    if(name === "dislike"){
      this.retrieveDog()
    } else {
      if(randomNum === 4){
        this.setState({friendCounter: this.state.friendCounter + 1})
      }
      this.retrieveDog()
    }

    



    
  }


  render(){
    return (
  <div>
    <Row>
      <Col/>
      <Col md="5">
      <h2>Make New Friends</h2>
      <p>Like any of the pups you'd like to meet and we'll let you know below if they liked you back!</p>
        <div>
        <img
          alt="Dog"
          className="img-fluid"
          src={this.state.result.message}
        />
        </div>
        <button className="btn btn-danger" name="dislike" onClick={this.handleClick}>
          Dislike
        </button>{" "}
        <button className="btn btn-primary" name="like" onClick={this.handleClick}>
          Like
        </button>
        <h3>You've made {this.state.friendCounter} puppy friends so far!</h3>

      </Col>
      <Col/>
    </Row>
  </div>
    );
  }
};

export default Discover;
