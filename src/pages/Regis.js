import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'

export default class Regis extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={{textAlign:"center", fontSize:25, fontWeight:"bold", color:"#3B3D3F"}}> Mendaftar </Text>
                <Text style={{textAlign:"center", marginTop:10, fontSize:15, color:"#A1A1A1"}}> Isi form dibawah & buat akun baru </Text>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/user.png')}/>
                    <TextInput style={styles.Input}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_231.png')}/>
                    <TextInput style={styles.Input} secureTextEntry={true}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_232.png')}/>
                    <TextInput style={styles.Input}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/lock_orientation.png')}/>
                    <TextInput style={styles.Input} secureTextEntry={true}/>
                </View>
                <TouchableOpacity style={styles.Buttonregis} onPress={() => this.props.navigation.navigate('MainApp')}>
                    <Text style={{color:"#fff", fontSize:18}}>Daftar</Text>
                </TouchableOpacity>
                <Text style={{color:"#1E58B6", fontSize:15, marginTop:40}}>Daftar Melalui</Text>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_229.png')}/>
                    <Image style={{marginTop:20, marginStart:20}} source={require('../images/Group_230.png')}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{color:"#A1A1A1", fontSize:15, marginTop:40}}>Sudah memiliki Akun?</Text>
                    <Text style={{color:"#1E58B6", fontSize:15, marginTop:40, marginStart:8, marginBottom:20}} onPress={() => this.props.navigation.navigate('Login')}>Masuk</Text>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        alignItems:"center",
        alignContent:"center",
    },
    Input:{
        alignSelf:"center",
        width:300,
        borderColor:"#1E58B6",
        borderBottomWidth:1
    },
    Buttonregis:{
        paddingTop:12,
        paddingBottom:12,
        paddingStart:50,
        paddingEnd:50,
        marginTop:30,
        borderRadius:16,
        alignSelf:"center",
        backgroundColor:"#1E58B6"
    },
})
