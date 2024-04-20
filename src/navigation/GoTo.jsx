import {useNavigation} from '@react-navigation/native';

/* Go to any screen by it's name */
const GoTo = ({destination}) => {
  const navigation = useNavigation();

  return () => {
    {
      navigation.navigate({destination});
    }
  };
};

export default GoTo;
