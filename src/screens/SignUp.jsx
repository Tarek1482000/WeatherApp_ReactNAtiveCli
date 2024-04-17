import {View, SafeAreaView, Text, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import Styles from '../style/Styles';
import SignHeader from '../components/SignHeader';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import RegisterHandler from '../utils/RegisterHandler';
import {COLOR, SCREEN, SIZE} from '../constants';

/* Sign Up Screen Which take user data and save it with redux after validate it */
const SignUp = () => {
  const [togglePolicyCheckBox, setPolicyCheckBox] = useState(false);
  const [username, setUsername] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [confirmPassword, setConfirmPassword] = useState(' ');

  /*  validate and Save Data  */
  const handleRegister = RegisterHandler({
    username,
    email,
    password,
    confirmPassword,
    policyAgree: togglePolicyCheckBox,
  });

  return (
    <SafeAreaView style={Styles.SignUpStyle.container}>
      {/* avoid Keyboard destroy screen */}
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        {/* Header Image with back button*/}
        <View style={{marginVertical: SIZE.xLarge * -4}}>
          <SignHeader screen={SCREEN.SignUp} />
        </View>

        <View style={Styles.SignUpStyle.inputContainer}>
          <Input
            placeholder={'Enter your name'}
            value={'User name'}
            inputScreen={SCREEN.SignUp}
            getInputValue={setUsername}
          />

          <Input
            placeholder={'Enter your email'}
            value={'Email'}
            inputScreen={SCREEN.SignUp}
            getInputValue={setEmail}
          />

          <Input
            placeholder={'Enter your password'}
            value={'Password'}
            inputScreen={SCREEN.SignUp}
            getInputValue={setPassword}
          />

          <Input
            placeholder={'Enter your password'}
            value={'Confirm Password'}
            inputScreen={SCREEN.SignUp}
            getInputValue={setConfirmPassword}
          />
        </View>
        <View style={Styles.SignUpStyle.policyCheckContainer}>
          <CheckBox
            disabled={false}
            value={togglePolicyCheckBox}
            onValueChange={newValue => setPolicyCheckBox(newValue)}
            tintColors={{true: COLOR.purple, false: COLOR.gray}}
          />
          <View style={Styles.SignUpStyle.policyTextContainer}>
            <Text style={Styles.SignUpStyle.policyText}>
              I accept & agree terms conditions
            </Text>
            <Text style={Styles.SignUpStyle.policyText}>& privacy policy</Text>
          </View>
        </View>

        <View style={Styles.SignUpStyle.RegButtonContainer}>
          <MyButton
            onPress={handleRegister}
            value="Sign Up"
            style={Styles.SignUpStyle.RegButtonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
