import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default class LupaPass extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:25, fontWeight:"bold"}}> Lupa Password </Text>
                <Image style={{marginTop:20, alignSelf:"center"}} source={require('../images/authentication.png')}/>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_231.png')}/>
                    <TextInput style={styles.Input}/>
                </View>
                <TouchableOpacity style={styles.Buttonlogin} onPress={() => this.props.navigation.navigate('MainApp')}>
                    <Text style={{color:"#fff", fontSize:18}}>Lanjutkan</Text>
                </TouchableOpacity>
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
