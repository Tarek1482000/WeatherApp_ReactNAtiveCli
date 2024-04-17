import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../constants';
import {useSelector} from 'react-redux';

import {showMessage} from 'react-native-flash-message';

/* Validate user data input and check if it is not empty or username email  exists and if passwords right*/
/* Go to next screen */

const LoginHandler = ({email: email, password: password}) => {
  const navigation = useNavigation();

  const ReducerEmail = useSelector(state => state.RegisterData.ReducerEmail);
  const ReducerPassword = useSelector(
    state => state.RegisterData.ReducerPassword,
  );
  const handleLoginData = () => {
    if (email === ' ') {
      showMessage({
        message: 'Error',
        description: 'Email is Empty',
      });

      return;
    }
    if (password === ' ') {
      showMessage({
        message: 'Error',
        description: 'Password is Empty',
      });

      return;
    }

    if (ReducerEmail === email) {
      if (ReducerPassword === password) {
        navigation.navigate(SCREEN.Weather);
      } else {
        showMessage({
          message: 'Error',
          description: 'Wrong Password',
        });

        return;
      }
    } else {
      return showMessage({
        message: 'Error',
        description: 'Wrong Email',
      });

      return;
    }
  };

  return handleLoginData;
};

export default LoginHandler;
