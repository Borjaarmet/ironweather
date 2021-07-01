import React, { Component } from "react";
import CityCard from "../components/CityCard";
import "../App.css";

class WeatherInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
    };
  }

  render() {
    console.log("card props: ", this.props);
    const { cityWeather } = this.props;
    return (
      <div>
        <CityCard cityWeather={cityWeather} />
      </div>
    );
  }
}

export default WeatherInfo;
