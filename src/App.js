import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: false }
    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyAz3K4H2s8rPkhZn03tdoWUSqu4T2jNX6s',
                authDomain: 'auth-57670.firebaseapp.com',
                databaseURL: 'https://auth-57670.firebaseio.com',
                projectId: 'auth-57670',
                storageBucket: 'auth-57670.appspot.com',
                messagingSenderId: '431616796967'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    render() {
        return (
            <View>
            <Header headerText="Authentication" />
            <LoginForm />
            </View>
        );
    }
}

export default App;
