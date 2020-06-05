/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import Heading from './Heading'
import Input from './Input'


class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            types: 'All'
        }
    }

    inputChange(inputValue){
        console.log('Input Value: ' + inputValue);
        this.setState({ inputValue });
    }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        };
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        };
        todoIndex++;
        const todos = [...this.state.todos, todo];

        this.setState({ todos, inputValue: ''}, () => {
            alert('State: ' + this.state);
        });
    }

    render() {

        const { inputValue } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView keyboardSouldPersistTaps='always'
                    style={styles.content}>
                    <Heading/>
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
});

export default App;
