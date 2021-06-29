import React, { Component } from "react";

import iconCloudy from "../assets/images/noun_cloudy_854513 (1).png";
import iconSun from "../assets/images/noun_sun_854469 (1).png";
import iconCloudy2 from "../assets/images/noun_cloudy_854511 (1).png";
import iconRainy from "../assets/images/noun_rainy_854528 (1).png";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

class CityCard extends Component {
  state = { date: new Date() };
  render() {
    console.log("props: ", this.props);
    return (
      <div id="cityCard" className="hidden">
        <div className="card ">
          <h1 className="city">
            {this.props.city},{this.props.country}
          </h1>
          <div className="date">
            <p> {this.state.date.toLocaleDateString(undefined, options)}</p>
          </div>
          <h3 className="description">
            <i>"{this.props.description}"</i>
          </h3>
          <hr />
          {this.props.description === "few clouds" && (
            <img className="icon " src={iconCloudy} alt="" />
          )}
          {this.props.description === "broken clouds" && (
            <img className="icon " src={iconCloudy} alt="" />
          )}
          {this.props.description === "clear sky" && (
            <img className="icon " src={iconSun} alt="" />
          )}
          {this.props.description === "overcast clouds" && (
            <img className="icon " src={iconCloudy2} alt="" />
          )}
          {this.props.description === "scattered clouds" && (
            <img className="icon" src={iconCloudy} alt="" />
          )}
          {this.props.description === "light rain" && (
            <img className="icon" src={iconRainy} alt="" />
          )}
          {this.props.description === "light moderate rain" && (
            <img className="icon" src={iconRainy} alt="" />
          )}
          <h3 className="temp"> {this.props.temperature.toFixed()} ºC</h3>
          <h3 className="forecast">Forecast</h3>
          <div className="card2 ">
            <div>
              <h4>{this.props.day1}</h4>
              <h4>{this.props.day1Temp.toFixed()} ºC</h4>
              <h5> "{this.props.day1Desc}"</h5>
            </div>

            <div>
              <h4>{this.props.day2}</h4>
              <h4>{this.props.day2Temp.toFixed()} ºC</h4>
              <h5> "{this.props.day2Desc}"</h5>
            </div>

            <div>
              <h4>{this.props.day3}</h4>
              <h4>{this.props.day3Temp.toFixed()} ºC</h4>
              <h5>"{this.props.day3Desc}"</h5>
            </div>

            <div>
              <h4>{this.props.day4}</h4>
              <h4>{this.props.day4Temp.toFixed()} ºC</h4>
              <h5> "{this.props.day4Desc}"</h5>
            </div>

            <div>
              <h4>{this.props.day5}</h4>
              <h4>{this.props.day5Temp.toFixed()} ºC</h4>
              <h5>"{this.props.day5Desc}"</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityCard;
