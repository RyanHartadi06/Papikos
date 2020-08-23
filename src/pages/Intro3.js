import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{marginTop:20, alignSelf:"center"}} source={require('../images/authentication.png')}/>
                <Text style={{fontSize:25, fontWeight:"bold", marginBottom:8}}>Strategis</Text>
                <Text style={styles.text}>Tempat kos yang dekat dengan tempat - tempat yang menunjang kebutuhan,seperti lokasi kampus ataupun tempat kerja</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        alignContent:"center",
    },
    text:{
        textAlign:"center",
        alignSelf:"center",
        color:"#A1A1A1",
        fontSize:20,
        marginStart:16,
        marginEnd:16
    }
})
