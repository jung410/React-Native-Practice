/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/pages/Login'

class App extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#004ba0"
                />
                <Login/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#42a5f4',
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default App;
