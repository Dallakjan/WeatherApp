import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faCalendarTimes,
  faThermometerHalf,
  faSun,
  faCloudSun,
  faWind,
  faTachometerAlt,
  faFrownOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Result(props) {
  const {
    date,
    err,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div className="result">
        <div>
          <h3>
            Wyniki wyszukiwania dla <em>{city}</em>
          </h3>
          <hr />
          <h4>Dane dla dnia i godziny: {date}</h4>
          <hr />
          <h4>Aktualna temperatura: {temp} &#176;C</h4>
          <hr />
          <h4>Wschód słońca o {sunriseTime} </h4>
          <hr />
          <h4>Zachód słońca o {sunsetTime}</h4>
          <hr />
          <h4>Siła wiatru {wind} m/s</h4>
          <hr />
          <h4>Ciśnienie {pressure} hPa</h4>
          <hr />
        </div>
        <div className="results__icons">
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faCity}
            style={{ color: "grey" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faCalendarTimes}
            style={{ color: "red" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faThermometerHalf}
            style={{ color: "orangered" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faSun}
            style={{ color: "yellow" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faCloudSun}
            style={{ color: "royalblue" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faWind}
            style={{ color: "lightblue" }}
          />
          <hr />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faTachometerAlt}
            style={{ color: "corn" }}
          />
          <hr />
        </div>
      </div>
    );
  }

  return (
    <div className="result">
      {err ? (
        <div>
          <h1>Nie znalezionio {city}</h1>
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faFrownOpen}
            style={{ color: "red", fontSize: 50 }}
          />
        </div>
      ) : (
        content
      )}
    </div>
  );
}
