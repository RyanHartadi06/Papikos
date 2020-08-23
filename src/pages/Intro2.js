import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Intro2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{marginTop:20, alignSelf:"center"}} source={require('../images/authentication.png')}/>
                <Text style={{fontSize:25, fontWeight:"bold", marginBottom:8}}>Nyaman</Text>
                <Text style={styles.text}>Kenyamanan kos dengan harga yang terjangkau dengan fasilitas yang lengkap</Text>
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
