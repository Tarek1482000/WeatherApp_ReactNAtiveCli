import Setup from './src/navigation/Setup';
import {SCREEN} from './src/constants/index';

/* Select Wanted Screen to Start App With*/
const App = () => {
  return <Setup startScreen={SCREEN.SignUp} />;
};

export default App;
