import React, { useState } from "react";
import axios from "axios";


export default function Weather() {
  let [city, setCity] = useState("");

  function handleSearch(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let appId = "caa883a4a60d93878755b08a933f74ea";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function showTemp(response) {
    console.log(response);
    let userInput = response.data.name;
    let temp = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = Math.round(response.data.main.humidity);
    let wind = Math.round(response.data.wind.speed);
    alert(
      `The Weather in ${userInput} is ${description} with a temperature of ${temp}, humidity ${humidity} and wind speed of ${wind}`
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoComplete="off"
          className="form-control"
          onChange={handleSearch}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
