import {
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Styles from '../style/Styles';

import SignBack from '../assets/images/SignBack.png';

import WeatherBack from '../assets/images/WeatherBack.png';
import useGoBack from '../navigation/useGoBack';
import {SCREEN, SIZE} from '../constants';

/* Go back Button to previous screen  */
const Goback = ({screen}) => {
  const goBack = useGoBack();
  return (
    <>
      {screen === SCREEN.SignUp ? (
        <View>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image source={SignBack} style={Styles.SignUpStyle.backButton} />
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      {screen === SCREEN.SignIn ? (
        <View>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image source={SignBack} style={Styles.SignInStyle.backButton} />
          </TouchableWithoutFeedback>
        </View>
      ) : null}

      {screen === SCREEN.Weather ? (
        <View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              zIndex: 1,
              marginHorizontal: SIZE.xLarge,
              marginVertical: SIZE.small,
            }}
            onPress={goBack}>
            <Image
              source={WeatherBack}
              style={{
                width: SIZE.xLarge * 2.2,
                height: SIZE.xLarge * 2.2,
                resizeMode: 'cover',
                marginVertical: SIZE.xLarge * 1.3,
                marginHorizontal: SIZE.large,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default Goback;
