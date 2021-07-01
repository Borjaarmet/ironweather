import React, { Component } from "react";

export class CityCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    console.log("props", this.props);
    const { cityWeather } = this.props;
    const { date } = this.state;

    return (
      <div id="cityCard" className="container">
        <div className="card ">
          <h1 className="city">{cityWeather.city.name}</h1>

          <p className="dateNow">{date.toLocaleString(undefined, options)}</p>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${cityWeather.list[0].weather[0].icon}@4x.png`}
              alt="icon"
            ></img>
          </div>
          <h3 className="temp">{cityWeather.list[0].main.temp.toFixed()}ºC</h3>
          <h3 className="forecast">Forecast</h3>
          <div className=" ">
            <div className="card2">
              <div>
                <div>
                  <h3>{cityWeather.list[8].dt_txt.slice(0, 10)}</h3>
                  <img
                    className="iconForecast"
                    src={`http://openweathermap.org/img/wn/${cityWeather.list[7].weather[0].icon}@4x.png`}
                    alt="icon"
                  ></img>

                  <h4>Min {cityWeather.list[3].main.temp_min.toFixed()} ºC</h4>
                  <h4>Max {cityWeather.list[7].main.temp_max.toFixed()} ºC</h4>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h3>{cityWeather.list[16].dt_txt.slice(0, 10)}</h3>
                  <img
                    className="iconForecast"
                    src={`http://openweathermap.org/img/wn/${cityWeather.list[15].weather[0].icon}@4x.png`}
                    alt="icon"
                  ></img>
                  <h4>Min {cityWeather.list[11].main.temp_min.toFixed()} ºC</h4>
                  <h4>Max {cityWeather.list[15].main.temp.toFixed()} ºC</h4>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h3>{cityWeather.list[24].dt_txt.slice(0, 10)}</h3>
                  <img
                    className="iconForecast"
                    src={`http://openweathermap.org/img/wn/${cityWeather.list[23].weather[0].icon}@4x.png`}
                    alt="icon"
                  ></img>
                  <h4>Min {cityWeather.list[19].main.temp_min.toFixed()} ºC</h4>
                  <h4>Max {cityWeather.list[23].main.temp.toFixed()} ºC</h4>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h3>{cityWeather.list[32].dt_txt.slice(0, 10)}</h3>
                  <img
                    className="iconForecast"
                    src={`http://openweathermap.org/img/wn/${cityWeather.list[31].weather[0].icon}@4x.png`}
                    alt="icon"
                  ></img>
                  <h4>Min {cityWeather.list[27].main.temp_min.toFixed()} ºC</h4>
                  <h4>Max {cityWeather.list[31].main.temp.toFixed()} ºC</h4>
                </div>
              </div>
              <hr />
              <div>
                <div>
                  <h3>{cityWeather.list[39].dt_txt.slice(0, 10)}</h3>
                  <img
                    className="iconForecast"
                    src={`http://openweathermap.org/img/wn/${cityWeather.list[38].weather[0].icon}@4x.png`}
                    alt="icon"
                  ></img>
                  <h4>Min {cityWeather.list[35].main.temp_min.toFixed()} ºC</h4>
                  <h4>Max {cityWeather.list[38].main.temp.toFixed()} ºC</h4>
                </div>
              </div>
            </div>

            {/* <div>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CityCard;
