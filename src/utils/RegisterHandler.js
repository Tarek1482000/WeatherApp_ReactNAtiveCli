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
    if (username === ' ') return console.error('Enter User Name');
    if (email === ' ') return console.error('Enter Email');

    // Check if email is not in correct format
    if (!emailRegex.test(email)) {
      console.error('Enter a valid email address');
      return;
    }
    if (password === ' ') return console.error('Enter password');
    if (confirmPassword === ' ') return console.error('Enter Confirm Password');
    if (!policyAgree) return console.error('Agree to policy');

    if (password !== confirmPassword)
      return console.error('Password not match');

    if (ReducerName === username) {
      return console.error('This username already exist');
    }
    if (ReducerEmail === email) {
      return console.error('This Email already exist');
    }
    dispatch(setUserName(username));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));
    navigation.navigate(SCREEN.SignIn);
  };
  return handleDataReg;
};

export default RegisterHandler;
