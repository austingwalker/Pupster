import axios from "axios";

const discoverURL = "https://dog.ceo/api/breeds/image/random";

const searchURL = "https://dog.ceo/api/breed/hound/images"


export default {
  retrieveDog: function() {
    return axios.get(discoverURL);
  },

  searchDogs: function(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },

  breedList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
