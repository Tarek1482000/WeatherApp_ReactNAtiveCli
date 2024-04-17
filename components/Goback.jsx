import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Styles from '../style/Styles';

// import SignBack from '../assets/images/SignBack.png';
// import WeatherBack from '../assets/images/WeatherBack.png';

const SignBack = require('../assets/images/SignBack.png');
const WeatherBack = require('../assets/images/WeatherBack.png');

import useGoBack from '../navigation/useGoBack';
import {SCREEN, SIZE} from '../constants';

/* Go back Button to previous screen  */
const Goback = ({screen}) => {
  const goBack = useGoBack();
  return (
    <View style={{flex: 1}}>
      {screen === SCREEN.SignUp ? (
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image source={SignBack} style={Styles.SignUpStyle.backButton} />
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      {screen === SCREEN.SignIn ? (
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image source={SignBack} style={Styles.SignInStyle.backButton} />
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      {screen === SCREEN.Weather ? (
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={WeatherBack}
              style={Styles.WeatherStyle.backButton}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Goback;
