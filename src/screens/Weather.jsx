import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WeatherHeader from '../components/WeatherHeader';
import Styles from '../style/Styles';
import {SCREEN, SIZE} from '../constants';
import Goback from '../components/Goback';
import Input from '../components/Input';
import GetWeather from '../components/GetWeather';

/* Screen responsible for getting data  from API and Display it */
const Weather = () => {
  return (
    <SafeAreaView style={Styles.WeatherStyle.container}>
      <View>
        <Goback screen={SCREEN.Weather} />
        <WeatherHeader />
      </View>

      <View style={Styles.WeatherStyle.WeatherDataContainer}>
        <GetWeather />
        <GetWeather />
      </View>
    </SafeAreaView>
  );
};

export default Weather;
