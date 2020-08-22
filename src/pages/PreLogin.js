import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, Button, widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native'

export default class PreLogin extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={{fontSize:25, fontWeight:"bold", color:"#1E58B6"}}> Papikos </Text>
                <Image style={{marginTop:20}} source={require('../images/product_manager.png')}/>
                <Text style={{fontSize:25, fontWeight:"bold", color:"#0E0E0E", marginTop:16}}> Selamat Datang di Papikos </Text>
                <Text style={{fontSize:18, fontWeight:"bold", color:"#A1A1A1", margin:16, textAlign:"center"}}>Masuk agar anda dapat mendapatkan fitur yang menarik dari papikos</Text>
                <View style={{flexDirection:"row", margin:8}}>
                    <TouchableOpacity style={styles.Buttonlogin} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{color:"#fff", fontSize:18}}>Masuk</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttonregis} onPress={() => this.props.navigation.navigate('Regis')}>
                        <Text style={{color:"#3B3D3F", fontSize:18}}>Daftar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:"#A1A1A1", fontSize:18, marginTop:40}}>Atau Melalui</Text>
                <View style={{flexDirection:"row"}}>
                    <Image style={{marginTop:20}} source={require('../images/Group_229.png')}/>
                    <Image style={{marginTop:20, marginStart:20}} source={require('../images/Group_230.png')}/>
                </View>
                </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        alignContent:"center",
        marginTop:20,
    },
    Buttonlogin:{
        paddingTop:8,
        paddingBottom:8,
        paddingStart:20,
        paddingEnd:20,
        margin:8,
        borderRadius:16,
        backgroundColor:"#1E58B6"
    },
    Buttonregis:{
        paddingTop:8,
        paddingBottom:8,
        paddingStart:20,
        paddingEnd:20,
        borderWidth:2,
        borderColor:"#3B3D3F",
        margin:8,
        borderRadius:16,
        backgroundColor:"#fff"
    },
    
})
