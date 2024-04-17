import {useNavigation} from '@react-navigation/native';
import {SCREEN} from '../constants';
import {useSelector} from 'react-redux';

/* Validate user data input and check if it is not empty or username email  exists and if passwords right*/
/* Go to next screen */

const LoginHandler = ({email: email, password: password}) => {
  const navigation = useNavigation();

  const ReducerEmail = useSelector(state => state.RegisterData.ReducerEmail);
  const ReducerPassword = useSelector(
    state => state.RegisterData.ReducerPassword,
  );
  const handleLoginData = () => {
    if (ReducerEmail === email) {
      if (ReducerPassword === password) {
        navigation.navigate(SCREEN.Weather);
      } else {
        PushNotificationsIOS.getInitialNotification('Wrong Password');
      }
    } else {
      PushNotificationsIOS.getInitialNotification('Wrong email');
    }
  };

  return handleLoginData;
};

export default LoginHandler;
