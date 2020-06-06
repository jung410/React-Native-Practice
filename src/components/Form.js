import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            id : '',
            password: ''
        };
    }

    checkIDPW = () => {
        if(this.state.id === 'test' && this.state.password === 'test') {
            console.log("로그인 성공");
        } else {
            console.log("로그인 실패");
        }
        console.log('id: ' + this.state.id + ' || ' + 'pw: ' + this.state.password);
    };

    inputChangeID = (id) => {
        this.setState({
            id
        });
    };

    inputChangePW = (password) => {
        this.setState({
            password
        });
    };

    render() {
        let imagePath = require('../img/mobinoma_logo.png');

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={"아이디"}
                    placeholderTextColor = "#ffffff"
                    onChangeText={this.inputChangeID}
                />
                <TextInput
                    style={styles.inputBox}
                    secureTextEntry={true}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={"비밀번호"}
                    placeholderTextColor = "#ffffff"
                    onChangeText={this.inputChangePW}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.checkIDPW}>
                        로그인
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10,
        textAlign: 'center'
    },
    button: {
        width: 300,
        backgroundColor:'#004ba0',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

});
