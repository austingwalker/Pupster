import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import API from "../../utils/API";
import "./Search.css"

class Search extends Component {
    state = {
        breed: "",
        breedList: [],
        results: []

    };

    componentDidMount() {
        this.breedList()
      }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

      breedList = () => {
        API.breedList()
          .then(res => this.setState({ breedList: res.data.message }))
          .catch(err => console.log(err));
      };

    searchDogs = (breed) => {
        API.searchDogs(breed)
          .then(res => this.setState({ results: res.data.message }))
          .catch(err => console.log(err));
      };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchDogs(this.state.breed)
      };


 render(){
 return(

        <div>
            <Col/>
            <Col md="8">
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Select a Breed</label>
                        
                        <select className="form-control" id="exampleFormControlSelect1" name="breed" value={this.state.breed} onChange={this.handleInputChange}>
                        {this.state.breedList.map(breed => (
                            
                        <option name="breed" value={breed} key={breed}>{breed}</option>
                        ))}
                        </select>
                        
                    </div>
                    <button type="submit" class="btn btn-primary mb-2" onClick={this.handleFormSubmit}>Search</button>
                </form>
                {this.state.results.map(dog =>(
                <div className="dogBox">
                    <img
                    alt="Dog"
                    className="img-fluid"
                    src={dog}
                    />
                </div>
                ))}
            </Col>
            <Col/>
        </div>
    )
  }
};

export default Search;
