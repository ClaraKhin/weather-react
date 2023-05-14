import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "4e982f559f14469b2722f0f59015fdae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h3>Weather!</h3>
    </div>
  );
}
