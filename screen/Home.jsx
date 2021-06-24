import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ItemCard from '../components/ItemCard';
// import/ 'expo'

export default class Home extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <View style={styles.background}>
                <ItemCard name="Avatar" description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,`} onPress={(e)=>console.log("Hello",e)} />
                <Text>Home Screen!</Text>
                <Button onPress={() => {
                    this.props.navigation.navigate("Details", { "name": "hello" });
                }}>Navigate to details</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background: {

    },
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
