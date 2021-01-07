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
          <h4>Dane dla dnia i godziny: {date}</h4>
          <h4>Aktualna temperatura: {temp} &#176;C</h4>
          <h4>Wschód słońca o {sunriseTime} </h4>
          <h4>Zachód słońca o {sunsetTime}</h4>
          <h4>Siła wiatru {wind} m/s</h4>
          <h4>Ciśnienie {pressure} hPa</h4>
        </div>
        <div className="results__icons">
          <FontAwesomeIcon className="weather_icons--sun" icon={faCity} />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faCalendarTimes}
          />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faThermometerHalf}
          />
          <FontAwesomeIcon className="weather_icons--sun" icon={faSun} />
          <FontAwesomeIcon className="weather_icons--sun" icon={faCloudSun} />
          <FontAwesomeIcon className="weather_icons--sun" icon={faWind} />
          <FontAwesomeIcon
            className="weather_icons--sun"
            icon={faTachometerAlt}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="result">
      {err ? `Nie znalezniono w bazie ${city}` : content}
    </div>
  );
}
