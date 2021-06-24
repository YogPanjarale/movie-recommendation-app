import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,TouchableOpacity} from 'react-native';
function getStars(rating,total) {
    const percentage = (rating/total)*100
    const stars = Math.floor(percentage/20)
    let star = ""
    for (let i = 0; i < stars; i++) {
        star+="⭐"
    }
    return star
}
export default class ItemCard extends Component {
    render() {
        const { name, description,onPress } = this.props;
        const stars=9
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>

                <View style={styles.left}>
                    <Text style={styles.nameText}>{name}</Text>
                    <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>{description}</Text>
                    <View style={{height:20}}/>
                    <Text style={styles.dateText}>12 March 2016</Text>
                    <View style={{height:20}}/>
                    <Text style={styles.dateText}>{getStars(stars,10)} {stars}/10</Text>
                </View>
                <View>
                    <Image source={{uri:"https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"}}
                      style={styles.image}
                      />
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    image:{ width: 150, height: 200 ,borderRadius:10},
    left: {  flex:1, flexDirection: 'column' },
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#141414",
        shadowColor: "#00000044",
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    nameText: {
        fontSize: 24,
        color: "#ffffff",
    },
    dateText: {
        fontSize: 12,
        color: "#ffffff",
    },
    description: {
        color: "#ffffff",
        fontSize: 14,
        flexShrink: 1,
    }
})