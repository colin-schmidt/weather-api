import React from "react";

const WeatherDisplay = (props) => {
  return (
    <div className="ui segment">
      <h1>Current weather:</h1>
      <div className="ui horizontal segments">
        <div className="ui segment">function to show weather icon</div>
        <div className="ui segment">function to show current temp</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
