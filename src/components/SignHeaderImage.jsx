import {Image, Text, View} from 'react-native';
import React from 'react';
import SignInHeader from '../assets/images/SignInHeader.png';
import SignUpHeader from '../assets/images/SignUpHeader.png';
import Styles from '../style/Styles';
import {SCREEN} from '../constants';

/* Header Image Configuration  using any image for any screen */
const SignHeaderImage = ({screen}) => {
  return (
    <View>
      {screen === SCREEN.SignUp ? (
        <Image source={SignUpHeader} style={Styles.SignUpStyle.image} />
      ) : null}
      {screen === SCREEN.SignIn ? (
        <Image source={SignInHeader} style={Styles.SignInStyle.image} />
      ) : null}
    </View>
  );
};

export default SignHeaderImage;
