import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default class Home extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen!</Text>
                <Button onPress={() => {
                    this.props.navigation.navigate("Details", {"name":"hello"});
                }}>Navigate to details</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
