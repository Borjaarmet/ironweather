import { Component } from "react";

import Searchinput from "./components/SearchInput";
import CityCard from "./components/CityCard";
import Navbar from "./components/Navbar";

import "./App.css";

// import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    temperature: 0,
    description: "",
    city: "",
    country: "",
    day1: "",
    day1Temp: 0,
    day1Desc: "",
    day2: "",
    day2Temp: 0,
    day2Desc: "",
    day3: [],
    day3Temp: 0,
    day3Desc: "",
    day4: "",
    day4Temp: 0,
    day4Desc: "",
    day5: "",
    day5Temp: 0,
    day5Desc: "",
  };
  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
  };

  handleClick = () => {
    const cityCard = document.getElementById("cityCard");
    cityCard.classList.toggle("hidden");

    const searchInput = document.getElementById("searchInput");
    searchInput.classList.add("hidden");
  };

  handleGoback = () => {
    const cityCard = document.getElementById("cityCard");
    cityCard.classList.add("hidden");

    const searchInput = document.getElementById("searchInput");
    searchInput.classList.toggle("hidden");
  };
  getWeather = async (event) => {
    event.preventDefault();

    console.log(event.target.elements);
    console.log(event.target.value);
    const { city, country } = event.target.elements;
    console.log(city);
    const cityValue = city.value;
    const countryValue = country.value;
    console.log(cityValue);
    console.log(countryValue);
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue},${countryValue}&appid=7496feecc3042855b4b82b5ee9131887&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    this.setState(
      {
        temperature: data.list[0].main.temp,
        description: data.list[0].weather[0].description,
        city: data.city.name,
        country: data.city.country,
        day1: data.list[8].dt_txt.slice(0, 10),
        day1Temp: data.list[8].main.temp,
        day1Desc: data.list[8].weather[0].description,
        day2: data.list[16].dt_txt.slice(0, 10),
        day2Temp: data.list[16].main.temp,
        day2Desc: data.list[16].weather[0].description,
        day3: data.list[24].dt_txt.slice(0, 10),
        day3Temp: data.list[24].main.temp,
        day3Desc: data.list[24].weather[0].description,
        day4: data.list[32].dt_txt.slice(0, 10),
        day4Temp: data.list[32].main.temp,
        day4Desc: data.list[32].weather[0].description,
        day5: data.list[39].dt_txt.slice(0, 10),
        day5Temp: data.list[39].main.temp,
        day5Desc: data.list[39].weather[0].description,
        // day1Desc: data.list[8].weather[0].description,
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="App">
        <Navbar goBack={this.handleGoback} />
        <Searchinput click={this.handleClick} getWeather={this.getWeather} />

        <CityCard handleForecast={this.handleForecast} {...this.state} />
      </div>
    );
  }
}

export default App;
