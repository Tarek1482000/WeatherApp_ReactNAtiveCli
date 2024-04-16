import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

/* SignUp and SignIn Button */
const MyButton = ({onPress, value, style}) => (
  <>
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={style}>{value}</Text>
    </TouchableWithoutFeedback>
  </>
);

export default MyButton;
