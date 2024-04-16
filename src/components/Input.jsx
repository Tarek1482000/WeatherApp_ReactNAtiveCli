import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Styles from '../style/Styles';
import {COLOR, SCREEN, SIZE} from '../constants';

import EyeIcon from 'react-native-vector-icons/Ionicons';

import LockIcon from 'react-native-vector-icons/Feather';

import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons';

/* Handle TextInput container  in case SignUp and in Case SignIn */

/* 
  In case Sign Up 
  use eye Icon and 
  when click it toggle password visibility
*/

/* 
  In case Sign In
  use Lock Icon Icon and Email Icon
*/
const Input = ({value, placeholder, inputScreen, getInputValue}) => {
  const [isPass, setPass] = useState(true);
  return (
    <View style={{marginBottom: SIZE.xLarge}}>
      {/* In case Sign Up */}
      {inputScreen === SCREEN.SignUp ? (
        <>
          {/* name of input above it*/}
          <View>
            <Text style={Styles.SignUpStyle.textInput}>{value}</Text>
          </View>

          {/* If password require display eye icon*/}
          {value === 'Password' || value === 'Confirm Password' ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder={placeholder}
                style={[Styles.SignUpStyle.input, {width: '100%'}]}
                inputMode={value === 'Email' ? 'email' : 'text'}
                secureTextEntry={isPass}
                onChangeText={value => {
                  getInputValue ? getInputValue(value) : null;
                }}
              />
              <View style={{marginHorizontal: SIZE.xLarge * -2}}>
                <EyeIcon
                  name="eye-outline"
                  size={SIZE.xLarge}
                  onPress={() => (isPass ? setPass(false) : setPass(true))}
                />
              </View>
            </View>
          ) : (
            <View>
              {/* If password not require */}
              <TextInput
                placeholder={placeholder}
                style={Styles.SignUpStyle.input}
                inputMode={value === 'Email' ? 'email' : 'text'}
                secureTextEntry={
                  value === 'Password' || value === 'Confirm Password'
                    ? true
                    : false
                }
                onChangeText={value => {
                  getInputValue ? getInputValue(value) : null;
                }}
              />
            </View>
          )}
        </>
      ) : null}

      {/* In case Sign In */}
      {inputScreen === SCREEN.SignIn ? (
        <>
          <View>
            <Text style={Styles.SignUpStyle.textInput}>{value}</Text>
          </View>

          {/* In case Password required display lock Icon */}
          {value === 'Password' ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginHorizontal: SIZE.small}}>
                <LockIcon name="lock" size={SIZE.large} color={COLOR.black} />
              </View>
              <TextInput
                placeholder={placeholder}
                style={Styles.SignInStyle.input}
                inputMode={value === 'Email' ? 'email' : 'text'}
                secureTextEntry={isPass}
                onChangeText={value => {
                  getInputValue ? getInputValue(value) : null;
                }}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {/* In case Email required display email Icon */}
              <View style={{marginHorizontal: SIZE.small}}>
                <EmailIcon
                  name="email-outline"
                  size={SIZE.large}
                  color={COLOR.black}
                />
              </View>
              <TextInput
                placeholder={placeholder}
                style={Styles.SignInStyle.input}
                inputMode={value === 'Email' ? 'email' : 'text'}
                onChangeText={value => {
                  getInputValue ? getInputValue(value) : null;
                }}
              />
            </View>
          )}
        </>
      ) : null}
    </View>
  );
};

export default Input;
