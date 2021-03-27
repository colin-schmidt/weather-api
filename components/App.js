import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

class App extends React.Component {
  onSearchSubmit(inputValue) {
    axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=1a9495e2a429c1d62dd245b8da2a612e`,
      {
        params: {
          units: "imperial",
        },
      }
    );
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <WeatherDisplay weather={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

//http://api.openweathermap.org/data/2.5/weather?q=Madison&appid=1a9495e2a429c1d62dd245b8da2a612e
