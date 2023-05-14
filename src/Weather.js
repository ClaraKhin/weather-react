import React from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "4e982f559f14469b2722f0f59015fdae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Oval
      height={100}
      width={100}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
