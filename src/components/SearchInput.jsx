import React, { Component } from "react";

import icon from "../assets/images/ironhack-barcelona-ironhack-logo-11569043381i5zpqbwkpu.png";
import iconSun from "../assets/images/noun_sun_854469 (1).png";
import iconCloudy from "../assets/images/noun_cloudy_854513 (1).png";
import iconRainy from "../assets/images/noun_rainy_854528 (1).png";
import IconSnow from "../assets/images/noun_snowing_854527 (1).png";

class Searchinput extends Component {
  state = {
    city: "",
    country: "",
  };
  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div id="searchInput" className="container">
        <form onSubmit={this.props.getWeather}>
          <img className="img remove-bg" src={icon} alt="logo"></img>
          <h2 className="title">IronWeather</h2>
          <div className="weather-icons">
            <img className="icon-weather remove-bg" src={iconSun} alt="" />
            <img className="icon-weather " src={iconCloudy} alt="" />
            <img className="icon-weather" src={iconRainy} alt="" />
            <img className="icon-weather" src={IconSnow} alt="" />
          </div>
          <div className="input-field">
            <input
              name="city"
              onChange={this.handleChange}
              placeholder="Search for a city"
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              name="country"
              onChange={this.handleChange}
              placeholder="Enter the country"
              type="text"
            />
          </div>
          <button
            onClick={this.props.click}
            className="btn fas fa-search"
          ></button>
        </form>
      </div>
    );
  }
}

export default Searchinput;
