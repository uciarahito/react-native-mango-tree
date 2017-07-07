import React from 'react'

import {Provider} from 'react-redux'

import { store } from './redux'

import { StackNavigator } from 'react-navigation'

import WelcomeScreen from './screen/WelcomeScreen'
import HomeScreen from './screen/HomeScreen'
import GameOverScreen from './screen/GameOverScreen'

const AppNav = StackNavigator({
    Welcome: { screen: WelcomeScreen },
    Home: { screen: HomeScreen },
    GameOver: { screen: GameOverScreen },
}, { headerMode: 'none' });

const App = () => {
    return (
        <Provider store={store}>
            <AppNav />
        </Provider>
    )
}

export default App