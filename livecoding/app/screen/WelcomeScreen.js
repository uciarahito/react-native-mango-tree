import React from 'react'

import { connect } from 'react-redux'

import { start } from '../redux/actions'

import {
    View,
    Text,
} from 'react-native'

class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Ini halaman Welcome</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F8610',
    },
});

const mapStateToProps = state => {
    console.log('***: ', state)
    return {
        state: state.tree
    }
}

const mapDispatchToProps = dispatch => {
    return {
        start: () => {
            dispatch(start())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)