import React from 'react';

import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native';

import { TabNavigator } from 'react-navigation';

import { connect } from 'react-redux';

import { 
    produceFruit, 
    harvestFruit ,
    addAge
} from '../redux/actions';

import GameOver from './GameOverScreen';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#1F8610',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 250,
        height: 250,
    },
}

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
        header: {
            visible: false
        }
    };

    goBackHome() {
        this.props.navigation.navigate('GameOver');
    }

    addAgeFruit() {
        this.props.addAge();
        this.props.produceFruit(this.props.actualAge);
    }

    harvest() {
        this.props.harvestFruit();
    }

    render() {
        console.log('+++++: ', this.props.image);
        if (this.props.actualAge < this.props.maxAge) {
            return (
                <View style={styles.container}>
                    <Text>Ini halaman home screen</Text>
                    <Image source={this.props.image} style={styles.image}/>
                    <Text>Current Age: {this.props.actualAge}</Text>
                    <Text>Count harvest: {this.props.countHarvest}</Text>
                    <Text>Current harvest: {this.props.currentHarvest}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {this.addAgeFruit() }}>
                        <Text>Click to Add Age!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {this.harvest() }}>
                        <Text>Harvest!</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <GameOver navigation={this.props.navigation} />
                </View>
            );
        }
    }
}

const mapStateToProps = (state) => {
    console.log('&&&&: ', state.tree)
    return {
        userName: state.tree.userName,
        treeName: state.tree.treeName,
        actualAge: state.tree.actualAge,
        maxAge: state.tree.maxAge,
        currentHarvest: state.tree.currentHarvest,
        image: state.tree.selectedImage,
        produceAge: state.tree.produceAge,
        countHarvest: state.tree.countHarvest,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAge: (age) => dispatch(addAge(age)),
        produceFruit: (age) => dispatch(produceFruit(age)),
        harvestFruit: () => dispatch(harvestFruit()),
    };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const HomeNav = TabNavigator({
    Home: {screen: Home},
    GameOver: {screen: GameOver},
},
    { tabBarVisible: false },
);

export default HomeNav