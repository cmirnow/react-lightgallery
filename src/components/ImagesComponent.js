import React, { Component } from "react";
import urid from "urid";
var listOfImages = [];

class App extends Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("../images/", false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <>
        {listOfImages.map((image, index) => (
          <a className="gallery-item" key={urid()} href={image}>
            <img src={image} className="thumb img-responsive" alt="Children's Summer Camp 'Aurora'"></img>
          </a>
        ))}
      </>
    );
  }
}

export default App;
