import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from '../redux/RegisterReducer';
import {SCREEN} from '../constants';
import {Alert} from 'react-native';

/* Validate user data input and check if it is not empty or username email  duplicated and if passwords are match*/
/* Save User */
const RegisterHandler = ({
  username,
  email,
  password,
  confirmPassword,
  policyAgree,
}) => {
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const ReducerName = useSelector(state => state.RegisterData.ReducerName);
  const ReducerEmail = useSelector(state => state.RegisterData.ReducerEmail);

  const handleDataReg = () => {
    if (username === ' ') return Alert.alert('Enter User Name');
    if (email === ' ') return Alert.alert('Enter Email');

    // Check if email is not in correct format
    if (!emailRegex.test(email)) {
      Alert.alert('Enter a valid email address');
      return;
    }
    if (password === ' ') return Alert.alert('Enter password');
    if (confirmPassword === ' ') return Alert.alert('Enter Confirm Password');
    if (!policyAgree) return Alert.alert('Agree to policy');

    if (password !== confirmPassword) return Alert.alert('Password not match');

    if (ReducerName === username) {
      return Alert.alert('This username already exist');
    }
    if (ReducerEmail === email) {
      return Alert.alert('This Email already exist');
    }
    dispatch(setUserName(username));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    navigation.navigate(SCREEN.SignIn);
  };
  return handleDataReg;
};

export default RegisterHandler;
