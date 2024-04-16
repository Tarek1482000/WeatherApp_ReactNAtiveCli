import {View, SafeAreaView, Image, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import Styles from '../style/Styles';
import SignHeader from '../components/SignHeader';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import LoginHandler from '../utils/LoginHandler';
import {COLOR, SCREEN, SIZE} from '../constants';
import TwitterIcon from 'react-native-vector-icons/AntDesign';
import FacebookIcon from 'react-native-vector-icons/Ionicons';
import GoogleIcon from '../assets/images/GoogleIcon.png';

/* Handle User Login Data and validate it then go to next screen */
const SignIn = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const handleLogin = LoginHandler({
    email: email,
    password: password,
  });

  return (
    <SafeAreaView style={Styles.SignInStyle.container}>
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Header Image with back button*/}
        <View style={{marginVertical: SIZE.xLarge * -4}}>
          <SignHeader screen={SCREEN.SignIn} />
        </View>

        {/* Login Inputs*/}
        <View style={Styles.SignInStyle.inputContainer}>
          <Input
            placeholder={'Enter your email'}
            value={'Email'}
            inputScreen={SCREEN.SignIn}
            getInputValue={setEmail}
          />

          <Input
            placeholder={'Enter your password'}
            value={'Password'}
            inputScreen={SCREEN.SignIn}
            getInputValue={setPassword}
          />
        </View>

        {/* Display Forgot Password */}
        <View style={Styles.SignInStyle.forgotPassTextContainer}>
          <Text style={Styles.SignInStyle.forgotPassText}>
            Forgot Password?
          </Text>
        </View>

        {/* Display Sign In Button */}
        <View style={Styles.SignInStyle.LoginButtonContainer}>
          <MyButton
            onPress={handleLogin}
            value="Sign In"
            style={Styles.SignInStyle.LoginButtonText}
          />
        </View>

        {/* Display  ----- or ------ */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: SIZE.small + 3,
          }}>
          <View style={Styles.SignInStyle.space}></View>
          <Text style={Styles.SignInStyle.OrText}>or</Text>
          <View style={Styles.SignInStyle.space}></View>
        </View>

        {/* Display  Google - Facebook  - Twitter Icon*/}
        <View style={Styles.SignInStyle.IconsContainer}>
          <View style={Styles.SignInStyle.googleIconBackground}>
            <Image
              source={GoogleIcon}
              alt="Google Icon"
              style={Styles.SignInStyle.googleIcon}
            />
          </View>

          <View style={Styles.SignInStyle.IconBackground}>
            <FacebookIcon
              name="logo-facebook"
              color={COLOR.blueFacebook}
              size={SIZE.xLarge * 1.2}
            />
          </View>
          <View style={Styles.SignInStyle.IconBackground}>
            <TwitterIcon
              name="twitter"
              color={COLOR.blueTwitter}
              size={SIZE.xLarge * 1.2}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
