import React from 'react';

import { 
    View, 
    Text 
} from 'react-native';

import { Provider } from 'react-redux';

import { StackNavigator } from 'react-navigation';

import store from './redux';

import Welcome from './screen/WelcomeScreen';
import Home from './screen/HomeScreen';
import GameOver from './screen/GameOverScreen';

const AppNav = StackNavigator({
    Welcome: { screen: Welcome },
    Home: { screen: Home },
    GameOver: { screen: GameOver },
}, { headerMode: 'none' });


const App = () => {
    return (
        <Provider store={store}>
            <AppNav />
        </Provider>
    );
}

export default App;