import "./App.scss";
import Form from "./Form";
import Result from "./Result";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faCloudSunRain,
  faSun,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  // handleCitySubmit = (e) => {
  //   e.preventDefault();

  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

  //   fetch(API)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("Nie udało się");
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const date = new Date().toLocaleString();
  //       this.setState((prevState) => ({
  //         err: false,
  //         date: date,
  //         city: prevState.value,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState({
  //         err: true,
  //         city: this.state.value,
  //       });
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=efa2ef11f117f7485b2fca8e87a3a2f5&units=metric`;

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("Nie udało się");
        })
        .then((response) => response.json())
        .then((data) => {
          const date = new Date().toLocaleString();
          this.setState((prevState) => ({
            err: false,
            date: date,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
          }));
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            err: true,
            city: this.state.value,
          });
        });
    }
  }

  render() {
    return (
      <>
        <header>
          Weather App <em>Hajk Dallakjan</em>
        </header>
        <div className="weather_icons">
          <FontAwesomeIcon className="weather_icons--sun" icon={faSun} />
          <FontAwesomeIcon className="weather_icons--rain" icon={faCloudRain} />
          <FontAwesomeIcon
            className="weather_icons--sunetrain"
            icon={faCloudSunRain}
          />
          <FontAwesomeIcon className="weather_icons--snow" icon={faSnowflake} />
        </div>
        <div className="App">
          <Form
            value={this.state.value}
            change={this.handleInputChange}
            className="form"
            // submit={this.handleCitySubmit}
          />
          <Result weather={this.state} />
        </div>
      </>
    );
  }
}
<i class="fas fa-cloud-sun-rain"></i>;
