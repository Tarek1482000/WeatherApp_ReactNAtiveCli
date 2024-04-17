import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {COLOR, FONT, SIZE} from '../constants/index';

/* Sign Up Screen Components style */
const SignUpStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZE.xLarge,
    paddingVertical: StatusBar.currentHeight,
    backgroundColor: COLOR.white,
  },
  backButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    marginHorizontal: SIZE.xLarge * 0.75,
    marginVertical: SIZE.xLarge * 5.3,
  },
  backButton: {
    resizeMode: 'contain',
    width: SIZE.xLarge * 1.8,
    height: SIZE.xLarge * 3,
  },
  image: {resizeMode: 'contain', width: '100%'},

  textInput: {
    marginHorizontal: SIZE.large,
    marginTop: -SIZE.small,
    position: 'absolute',
    zIndex: 1,
    color: COLOR.black,
    fontSize: SIZE.small + 4,
    backgroundColor: COLOR.white,
    paddingRight: SIZE.small,
    paddingLeft: SIZE.small,
    fontFamily: FONT.medium,
  },
  inputContainer: {
    marginHorizontal: SIZE.large,
    width: '87%',
    marginTop: SIZE.xLarge,
  },
  input: {
    borderWidth: 0.2,
    borderRadius: 4,
    paddingHorizontal: SIZE.xLarge * 2.2,
  },

  policyCheckContainer: {
    flexDirection: 'row',
    marginHorizontal: SIZE.large,
    marginTop: -SIZE.large,
  },
  policyTextContainer: {
    marginTop: SIZE.xLarge * 0.2,
    marginLeft: SIZE.xLarge * 0.1,
  },
  policyText: {fontFamily: FONT.medium, color: COLOR.black},

  RegButtonContainer: {
    marginTop: SIZE.xLarge,
    alignItems: 'center',
  },
  RegButtonText: {
    fontSize: SIZE.large,
    fontFamily: FONT.bold,
    color: COLOR.white,
    backgroundColor: COLOR.purple,
    padding: SIZE.large,
    paddingRight: SIZE.xLarge * 5,
    paddingLeft: SIZE.xLarge * 5,
    borderRadius: 8,
  },
});

/* Sign In Screen Components style */
const SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZE.xLarge,
    paddingVertical: StatusBar.currentHeight,
    backgroundColor: COLOR.white,
  },
  backButtonContainer: {
    zIndex: 1,
    position: 'absolute',
    marginHorizontal: SIZE.xLarge * 0.75,
    marginVertical: SIZE.xLarge * 5.3,
  },
  backButton: {
    resizeMode: 'contain',
    width: SIZE.xLarge * 1.8,
    height: SIZE.xLarge * 3,
  },
  image: {resizeMode: 'contain', width: '100%'},

  textInput: {
    marginHorizontal: SIZE.large,
    marginTop: -SIZE.small,
    position: 'absolute',
    zIndex: 1,
    color: COLOR.black,
    fontSize: SIZE.small + 4,
    backgroundColor: COLOR.white,
    paddingRight: SIZE.small,
    paddingLeft: SIZE.small,
    fontFamily: FONT.medium,
  },
  inputContainer: {
    marginHorizontal: SIZE.large,
    width: '87%',
    marginTop: SIZE.xLarge,
  },
  input: {
    borderWidth: 0.2,
    borderRadius: 4,
    width: '100%',
    marginHorizontal: SIZE.xLarge * -1.6,
    paddingHorizontal: SIZE.xLarge * 1.6,
  },

  forgotPassTextContainer: {
    alignItems: 'flex-end',
    marginTop: -SIZE.large,
    marginRight: SIZE.xLarge,
  },

  forgotPassText: {
    fontFamily: FONT.regular,
    color: COLOR.black,
    fontSize: SIZE.medium,
  },

  LoginButtonContainer: {
    marginTop: SIZE.xLarge,
    alignItems: 'center',
  },
  LoginButtonText: {
    fontSize: SIZE.large,
    fontFamily: FONT.bold,
    color: COLOR.white,
    backgroundColor: COLOR.purple,
    padding: SIZE.large,
    paddingRight: SIZE.xLarge * 5,
    paddingLeft: SIZE.xLarge * 5,
    borderRadius: 8,
  },
  OrText: {
    fontSize: SIZE.large,
    fontFamily: FONT.bold,
    color: COLOR.black,
    paddingRight: SIZE.small,
    paddingLeft: SIZE.small,
  },
  space: {
    height: 0.2,
    width: '36%',
    backgroundColor: COLOR.gray,
    marginTop: SIZE.large - 3,
  },
  IconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: SIZE.large,
  },
  IconBackground: {
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: COLOR.gray,
    borderRadius: SIZE.small - 5,
    height: '26%',
    width: '14%',
    marginHorizontal: SIZE.small,
    paddingHorizontal: SIZE.small,
  },
  googleIconBackground: {
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: COLOR.gray,
    borderRadius: SIZE.small - 5,
    height: '26%',
    width: '14%',
    marginHorizontal: SIZE.small,
    paddingHorizontal: SIZE.small,
  },
  googleIcon: {
    resizeMode: 'contain',
    width: '100%',
    height: SIZE.xLarge * 7,
  },
});

/* Weather Screen Components style */
const WeatherStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: SIZE.small,
  },
  backButton: {
    resizeMode: 'contain',
    height: SIZE.xLarge + 30,
    width: SIZE.xLarge + 28,
    position: 'absolute',
    zIndex: 1,
    marginTop: SIZE.xLarge * 0.9,
    marginLeft: SIZE.xLarge * 0.89,
  },
  image: {width: '100%', height: '40%', resizeMode: 'contain'},
  WeatherDataContainer: {
    flex: 1,
    marginVertical: SIZE.xLarge * -10,
    marginHorizontal: SIZE.xLarge,
  },

  temperatureText: {
    position: 'absolute',
    zIndex: 1,
    color: COLOR.orange,
    marginTop: SIZE.xLarge * 4,
    marginLeft: SIZE.xLarge * 2,
  },
  cityTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginLeft: SIZE.xLarge * 0.2,
    marginTop: SIZE.xLarge * -3,
    marginVertical: SIZE.xLarge * -2.3,
  },
  time_Location_Texts_Colors: {
    color: COLOR.black,
  },
});

export default {
  WeatherStyle,
  SignUpStyle,
  SignInStyle,
};
