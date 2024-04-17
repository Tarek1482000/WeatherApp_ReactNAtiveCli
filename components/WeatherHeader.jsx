import {View, Text, Image} from 'react-native';
import React from 'react';
import Styles from '../style/Styles';
import {SCREEN, SIZE} from '../constants';
import Goback from './Goback';

// import WeatherHeaderPic from '../assets/images/WeatherHeader.png';
const WeatherHeaderPic = require('../assets/images/WeatherHeader.png');

/* Header Image Configuration */
const WeatherHeader = () => {
  return (
    <View style={{flex: 1}}>
      <View style={Styles.WeatherStyle.backButtonContainer}>
        <Goback screen={SCREEN.Weather} />
      </View>
      <View style={{flex: 1, marginTop: SIZE.xLarge * -7}}>
        <Image source={WeatherHeaderPic} style={Styles.WeatherStyle.image} />
      </View>
    </View>
  );
};

export default WeatherHeader;
