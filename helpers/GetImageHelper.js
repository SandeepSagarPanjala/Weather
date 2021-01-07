import * as React from "react";

export default getWeatherImage = (type) => {
    return type === "Clear" 
        ? require("../assets/images/clear.jpg")
        : type === "Clear 2"
        ? require("../assets/images/clear 2.jpg")
        : type === "Clear 3"
        ? require("../assets/images/clear 3.jpg")
        : null;
}