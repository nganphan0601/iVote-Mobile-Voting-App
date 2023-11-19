import {createNativeStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import FirstScreen from '../screens/firstScreen';

const screens = {
    FirstScreen: {
        screen: FirstScreen
    },
    Home: {
        screen: Home
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);