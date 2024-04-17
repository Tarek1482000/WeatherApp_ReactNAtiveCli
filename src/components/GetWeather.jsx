import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

// import SunImage from '../assets/images/WeatherSun.png';

const SunImage = require('../assets/images/WeatherSun.png');

import {COLOR, FONT, SIZE} from '../constants';

import DateIcon from 'react-native-vector-icons/AntDesign';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../style/Styles';

/* Responsible for fetching API and handle data and display it  */
const GetWeather = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: null,
    cityName: null,
    observationTime: null,
  });

  useEffect(() => {
    handle();
  }, [handle]);

  const handle = async () => {
    // const url =
    //   'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5';

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'e6bb6b2a1dmshd5de888441f7a69p1a1e34jsn695a749b89f8',
    //     'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
    //   },
    // };

    try {
      // const response = await fetch(url, options);
      // const result = await response.json();

      /* An API Response Data */
      const result = {
        count: 1,
        data: [
          {
            app_temp: -71.9,
            aqi: 0,
            city_name: 'Port-aux-Français',
            clouds: 100,
            country_code: 'TF',
            datetime: '2024-04-15:19',
            dewpt: -67.2,
            dhi: 0,
            dni: 0,
            elev_angle: -20.37,
            ghi: 0,
            gust: 3.515625,
            h_angle: -90,
            lat: -78.5,
            lon: 38.5,
            ob_time: '2024-04-15 19:24',
            pod: 'n',
            precip: 0,
            pres: 611,
            rh: 17,
            slp: 1049.3441,
            snow: 0,
            solar_rad: 0,
            sources: [Array],
            state_code: '03',
            station: 'FAPE',
            sunrise: '04:41',
            sunset: '15:53',
            temp: -53.6,
            timezone: 'Africa/Johannesburg',
            ts: 1713209045,
            uv: 0,
            vis: 4,
            weather: [Object],
            wind_cdir: 'NW',
            wind_cdir_full: 'northwest',
            wind_dir: 311,
            wind_spd: 3.703707,
          },
        ],
      };

      /* Extract Data */
      const temperature = result.data[0].temp + '’';
      const cityName = result.data[0].city_name;
      const observationTime = result.data[0].ob_time.split(' ')[0];

      setWeatherData({
        temperature: temperature,
        cityName: cityName,
        observationTime: observationTime,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View>
        <Text style={Styles.WeatherStyle.temperatureText}>
          {weatherData.temperature}
        </Text>
        <Image
          source={SunImage}
          style={{resizeMode: 'contain', width: '100%'}}
        />
      </View>
      <View style={Styles.WeatherStyle.cityTextContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <LocationIcon
              name="location-pin"
              color={COLOR.orangeIcon}
              size={SIZE.large}
            />
          </View>
          <Text style={Styles.WeatherStyle.time_Location_Texts_Colors}>
            {weatherData.cityName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: SIZE.xLarge * -1.5,
          }}>
          <View style={{paddingHorizontal: SIZE.small}}>
            <DateIcon name="calendar" color={COLOR.orangeIcon} />
          </View>
          <Text style={Styles.WeatherStyle.time_Location_Texts_Colors}>
            {weatherData.observationTime}
          </Text>
        </View>
      </View>
    </>
  );
};

export default GetWeather;
