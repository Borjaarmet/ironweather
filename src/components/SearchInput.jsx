import React, { Component } from "react";
import { Link } from "react-router-dom";

import icon from "../assets/images/ironhack-barcelona-ironhack-logo-11569043381i5zpqbwkpu.png";
import iconSun from "../assets/images/noun_sun_854469 (1).png";
import iconCloudy from "../assets/images/noun_cloudy_854513 (1).png";
import iconRainy from "../assets/images/noun_rainy_854528 (1).png";
import IconSnow from "../assets/images/noun_snowing_854527 (1).png";

export class Searchinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      date: new Date(),
    };
  }
  handleInput = (event) => {
    console.log(event.target.value);
    const searchValue = event.target.value;
    this.setState({
      city: searchValue,
    });
  };

  handleNewCity = () => {
    console.log(this.state.city);
    const { city } = this.state;
    this.props.newCity(city);
    console.log(this.props.newCity(city));

    // const cityCard = document.getElementById("cityCard");
    // cityCard.classList.remove("hidden");

    const searchInput = document.getElementById("searchInput");
    searchInput.classList.add("hidden");
  };
  render() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const { city, date } = this.state;
    return (
      <div id="searchInput" className="container">
        <p className="dateNow">
          {" "}
          {date.toLocaleDateString(undefined, options)}
        </p>
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
            value={city}
            onChange={this.handleInput}
            placeholder="Search for a city"
            type="text"
          />
        </div>

        <button
          onClick={this.handleNewCity}
          className="btn fas fa-search"
        ></button>
      </div>
    );
  }
}

export default Searchinput;
