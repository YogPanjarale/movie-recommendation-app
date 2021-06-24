import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default class Details extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen!</Text>
        <Button onPress={() => {
                    this.props.navigation.navigate("Home");
                }}>Navigate Back</Button>
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
