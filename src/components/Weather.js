import React, { useEffect, useState } from "react";
import { Card, CardBody, Text, Heading, Box, Flex, Image } from "@chakra-ui/react";
//import '../App.css';

function Weather({ data }) {
  const { location, current } = data;
  const date = new Date(location.localtime);
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const formattedDate = date.toLocaleDateString();

  const [wIcon, setWIcon] = useState("");

  const setBackground = () => {
    let bgImg = "/Images/default.jpg";
    let w_icon = "/weather_icons/default.png";

    if ( current.condition.text === "Sunny" || current.condition.text === "Clear" ) {
      bgImg = "/Images/sunny.jpg";
      w_icon = "/weather_icons/sunny.png";
    } else if ( current.condition.text === "Cloudy" || current.condition.text === "Partly cloudy" ) {
      bgImg = "/Images/cloudy.jpg";
      w_icon = "/weather_icons/clouds.png";
    } else if ( current.condition.text === "Rain" || current.condition.text === "Light Rain" || current.condition.text === "Patchy rain nearby" || current.condition.text === "Light rain shower" ) {
      bgImg = "/Images/rainy.jpg";
      w_icon = "/weather_icons/rain.png";
    } else if (current.condition.text === "Snow") {
      bgImg = "/Images/snowy.jpg";
      w_icon = "/weather_icons/snow.png";
    } else if (current.condition.text === "Mist") {
      bgImg = "/Images/mist.jpg";
      w_icon = "/weather_icons/mist.png";
    } else if (current.condition.text === "Windy") {
      bgImg = "/Images/windy.jpg";
      w_icon = "/weather_icons/wind.png";
    } else if (current.condition.text === "Haze") {
      bgImg = "/Images/hazy.jpg";
      w_icon = "/weather_icons/haze.png";
    } else {
      console.log("Condition not matched:", current.condition.text);
    }

    setWIcon(w_icon);

    //console.log("bgimg:", bgImg);

    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  };

  useEffect(() => {
    setBackground();
  }, [current.condition.text]);

  return (
    <Card width={{ base: "70%", sm: "35%", md: "60%" }} height="auto" margin="auto" padding={{ base: "15px", md: "20px" }} backgroundColor="rgba(255, 255, 255, 0.3)" borderRadius="10px" boxShadow="lg" >
      <CardBody>
        <Flex flexDirection={{ base: "column", md: "row" }} justify="space-between" alignItems="center" marginBottom="20px" >
          <Box>
            <Heading as="h3" size={{ base: "lg", md: "2xl" }}> {location.name} </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>{location.region}</Text>
            <Text fontSize={{ base: "sm", md: "md" }}>{location.country}</Text>
          </Box>
          <Box textAlign="right" p={1}>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="medium"> {formattedDate} </Text>
            <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="medium"> {day} </Text>
          </Box>
        </Flex>

        <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" justify="space-between" >
          <Text fontSize={{ base: "3xl", md: "6xl" }} fontWeight="medium" mb={{ base: "2px" }} > {current.temp_c}°C </Text>
          <Box textAlign="center" mt={{ base: "1px", md: "0" }} ml={{ base: "0", md: "20px" }} >
            <Image src={wIcon} alt={current.condition.text} boxSize={{ base: "40px", md: "60px" }} marginBottom="10px" />
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" marginBottom="10px" > {current.condition.text} </Text>
          </Box>
        </Flex>

        <Flex wrap="wrap" justify="space-between" alignItems="center" flexDirection={{ base: "column", md: "row" }} gap={{ base: "10px", md: "20px" }} >
          <Box textAlign="center" flex="1">
            <Text fontWeight="bold">Humidity</Text>
            <Text>{current.humidity}%</Text>
          </Box>
          <Box textAlign="center" flex="1">
            <Text fontWeight="bold">Wind Speed</Text>
            <Text>{current.wind_kph} kph</Text>
          </Box>
          <Box textAlign="center" flex="1">
            <Text fontWeight="bold">Precipitation</Text>
            <Text>{current.precip_mm} mm</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default Weather;
