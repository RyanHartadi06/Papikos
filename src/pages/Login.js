import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center", marginTop:10, fontSize:25, fontWeight:"bold", color:"#3B3D3F"}}> Selamat Datang </Text>
                <Image style={{marginTop:20, alignSelf:"center"}} source={require('../images/focused_working.png')}/>
                    <TouchableOpacity style={styles.Buttonlogin} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{color:"#fff", fontSize:18}}>Masuk</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Buttonlogin:{
        paddingTop:12,
        paddingBottom:12,
        paddingStart:50,
        paddingEnd:50,
        margin:8,
        borderRadius:16,
        alignSelf:"center",
        backgroundColor:"#1E58B6"
    },
})
