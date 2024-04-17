import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from '../redux/RegisterReducer';
import {SCREEN} from '../constants';

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
    if (username === ' ')
      return PushNotificationsIOS.getInitialNotification('Enter User Name');
    if (email === ' ')
      return PushNotificationsIOS.getInitialNotification('Enter Email');

    // Check if email is not in correct format
    if (!emailRegex.test(email)) {
      PushNotificationsIOS.getInitialNotification(
        'Enter a valid email address',
      );
      return;
    }
    if (password === ' ')
      return PushNotificationsIOS.getInitialNotification('Enter password');
    if (confirmPassword === ' ')
      return PushNotificationsIOS.getInitialNotification(
        'Enter Confirm Password',
      );
    if (!policyAgree)
      return PushNotificationsIOS.getInitialNotification('Agree to policy');

    if (password !== confirmPassword)
      return PushNotificationsIOS.getInitialNotification('Password not match');

    if (ReducerName === username) {
      return PushNotificationsIOS.getInitialNotification(
        'This username already exist',
      );
    }
    if (ReducerEmail === email) {
      return PushNotificationsIOS.getInitialNotification(
        'This Email already exist',
      );
    }
    dispatch(setUserName(username));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    navigation.navigate(SCREEN.SignIn);
  };
  return handleDataReg;
};

export default RegisterHandler;
