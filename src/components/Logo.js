import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

export default class Logo extends Component {
    render() {
        let imagePath = require('../img/mobinoma_logo.png');
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 150, height: 90}}
                    source={imagePath}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
