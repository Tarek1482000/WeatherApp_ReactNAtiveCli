import {View} from 'react-native';
import React from 'react';

import SignHeaderImage from '../components/SignHeaderImage';

import Goback from '../components/Goback';
import Styles from '../style/Styles';

/* Header Image integreted with Back Button configurations */
const SignHeader = ({screen}) => {
  return (
    <View style={{flex: 1}}>
      <View style={Styles.SignInStyle.backButtonContainer}>
        <Goback screen={screen} />
      </View>

      <View>
        <SignHeaderImage screen={screen} />
      </View>
    </View>
  );
};

export default SignHeader;
