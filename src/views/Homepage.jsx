import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// import axios from "axios";
import SearchInput from "../components/SearchInput";
import CityCard from "../components/CityCard";

import "../App.css";
import axios from "axios";

export class Homepage extends Component {
  is_mounted = false;
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityWeather: [],
      status: "loading",
      error: false,
    };
  }

  newSearch = (newLocation) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${newLocation}&units=metric&appid=7496feecc3042855b4b82b5ee9131887`
      )
      .then((response) => {
        this.setState({
          cityWeather: response.data,
          status: "loaded",
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            error: true,
          });
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  };

  render() {
    const { city, cityWeather, status, error } = this.state;
    return (
      <div className="App">
        <SearchInput newCity={this.newSearch} />
        {status === "loading" && (
          <p className="text-lg mb-4 font-normal mt-8">
            Loading...
            {city}
          </p>
        )}
        {status === "loaded" && <CityCard cityWeather={cityWeather} />}
        {error === true && <Redirect to="/404" />}
      </div>
    );
  }
}

export default Homepage;
