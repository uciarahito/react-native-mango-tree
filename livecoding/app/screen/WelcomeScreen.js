import React from 'react';

import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity 
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { connect } from 'react-redux';

import { start } from '../redux/actions';

import Home from './HomeScreen';

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#1F8610',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 50,
        fontWeight: 'bold',
        margin: 10
    },
    inputText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'green',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        backgroundColor: 'skyblue'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 5,
        margin: 10
    }
}


class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            treeName: '',
            warningText: '',
        }
    }

    start() {
        if(this.state.userName.length > 0 && this.state.treeName.length > 0) {
            this.setState({
                warningText: '',
            });
            this.props.start(this.state.userName, this.state.treeName);
            this.props.navigation.navigate('Home');
        } else {
            this.setState({
                warningText: 'UserName and Tree Name are required',
            });
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <View>
            <View>
                <Text>User Name</Text>
                <TextInput
                style={styles.input}
                onChangeText={(userName) => this.setState({userName})}
                value={this.state.userName}
                />
            </View>
            <View>
                <Text>Tree Name</Text>
                <TextInput
                style={styles.input}
                onChangeText={(treeName) => this.setState({treeName})}
                value={this.state.treeName}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                <Text onPress={() => this.start() }>Start</Text>
                </TouchableOpacity>
                <Text>{this.state.warningText}</Text>
            </View>
            </View>
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        treeName: state.treeName,
        maxAge: state.maxAge,
        produceAge: state.produceAge,
        currentHarvest: state.currentHarvest,
        countHarvest: state.countHarvest,
        isHealthy: state.isHealthy,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        start: (userName, treeName) => dispatch(start(userName, treeName)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);