import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setUserEmail,
  setUserPassword,
  setUserName,
} from '../redux/RegisterReducer';
import {SCREEN} from '../constants';
import {showMessage} from 'react-native-flash-message';

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
      return showMessage({
        message: 'Error',
        description: 'Enter User Name',
      });
    if (email === ' ')
      return showMessage({
        message: 'Error',
        description: 'Enter Email',
      });

    // Check if email is not in correct format
    if (!emailRegex.test(email)) {
      return showMessage({
        message: 'Error',
        description: 'Enter a valid email address',
      });
    }
    if (password === ' ')
      return showMessage({
        message: 'Error',
        description: 'Enter password',
      });

    if (confirmPassword === ' ')
      return showMessage({
        message: 'Error',
        description: 'Enter Confirm Password',
      });

    if (!policyAgree)
      return showMessage({
        message: 'Error',
        description: 'Agree to policy',
      });

    if (password !== confirmPassword)
      return showMessage({
        message: 'Error',
        description: 'Password not match',
      });

    if (ReducerName === username) {
      return showMessage({
        message: 'Error',
        description: 'This username already exist',
      });
    }
    if (ReducerEmail === email) {
      return showMessage({
        message: 'Error',
        description: 'This Email already exist',
      });
    }
    dispatch(setUserName(username));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    navigation.navigate(SCREEN.SignIn);
  };
  return handleDataReg;
};

export default RegisterHandler;
