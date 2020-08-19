import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Regis extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center", marginTop:10, fontSize:25, fontWeight:"bold", color:"#3B3D3F"}}> Mendaftar </Text>
                <Text style={{textAlign:"center", marginTop:10, fontSize:15, color:"#A1A1A1"}}> Isi form dibawah & buat akun baru </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
