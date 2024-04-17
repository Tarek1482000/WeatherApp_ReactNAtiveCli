import {View, Text, Image} from 'react-native';
import React from 'react';
import Styles from '../style/Styles';

// import WeatherHeaderPic from '../assets/images/WeatherHeader.png';
const WeatherHeaderPic = require('../assets/images/WeatherHeader.png');

/* Header Image Configuration */
const WeatherHeader = () => {
  return (
    <>
      <Image source={WeatherHeaderPic} style={Styles.WeatherStyle.image} />
    </>
  );
};

export default WeatherHeader;
