import React, { Component } from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity,ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class Login extends Component {
    render() {
        return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{textAlign:"center", marginTop:10, fontSize:25, fontWeight:"bold", color:"#3B3D3F"}}> Selamat Datang </Text>
                <Image style={{marginTop:20, alignSelf:"center"}} source={require('../images/focused_working.png')}/>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_231.png')}/>
                    <TextInput style={styles.Input}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_232.png')}/>
                    <TextInput style={styles.Input}/>
                </View>
                <Text style={{textAlign:"center", marginTop:10, fontSize:13, color:"#1E58B6", alignSelf:"flex-end", marginEnd:30, marginTop:10}}> Lupa Password </Text>
                <TouchableOpacity style={styles.Buttonlogin} onPress={() => this.props.navigation.navigate('MainApp')}>
                    <Text style={{color:"#fff", fontSize:18}}>Masuk</Text>
                </TouchableOpacity>
                <Text style={{color:"#1E58B6", fontSize:15, marginTop:40}}>Masuk Melalui</Text>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_229.png')}/>
                    <Image style={{marginTop:20, marginStart:20}} source={require('../images/Group_230.png')}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{color:"#A1A1A1", fontSize:15, marginTop:40}}>Tidak memiliki Akun?</Text>
                    <Text style={{color:"#1E58B6", fontSize:15, marginTop:40, marginStart:8, marginBottom:20}}>Mendaftar</Text>
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
    Buttonlogin:{
        paddingTop:12,
        paddingBottom:12,
        paddingStart:50,
        paddingEnd:50,
        marginTop:30,
        borderRadius:16,
        alignSelf:"center",
        backgroundColor:"#1E58B6"
    },
    Input:{
        alignSelf:"center",
        width:300,
        borderColor:"#1E58B6",
        borderBottomWidth:1
    }
})
