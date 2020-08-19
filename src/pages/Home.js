import React from 'react'
import { View, Text , TouchableOpacity ,StyleSheet , Image, ScrollView} from 'react-native'
import Gap from '../components/Gap'
import Axios from 'axios';
import List from '../components/List'

const Home = () => {
  return (
    <ScrollView>

    
  <View style={{flex : 1 , flexDirection : 'column' , paddingLeft : 18 , paddingRight : 18 , paddingTop : 15}}>
      <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1 }}>
          <Text style={{color:'black'}}>Ryan</Text>
					<Text style={{color:'black'}}>Ryanhartadi999@gmail.com</Text>
				</View>
		   <Text style={{color:'black'}}>Ryan</Text>
      </View>
      <Gap height={25}/>
    <View style={styles.header}>
        <View style={styles.flex}>
            <Text style={styles.name}>Selamat Datang , Ryan</Text>
            <Text style={styles.desc}>Temukan Kos yang sesuai kebutuhan anda di aplikasi PapiKos</Text>
            <Text style={styles.desc}>Selanjutnya</Text>
        </View>
        <Image source={require('../images/Image.png')} style={styles.img} />
    </View>
    <Gap height={25}/>
    <View style={styles.body}>
      <Text style={{fontSize:20,fontWeight:"bold", color:"#3B3D3F", marginStart:8}}>Katerogi</Text>
      <View style={styles.kategori}>
        <View style={styles.subkategori}>
          <Gap height={8}/> 
          <Image style={{alignSelf:"center"}} source={require('../images/medieval-house.png')}/>
          <Text style={styles.text}>Kos Area</Text>
        </View>
        <View style={styles.subkategori}>
          <Gap height={8}/>
          <Image style={{alignSelf:"center"}} source={require('../images/architecture-and-city.png')}/>
          <Text style={styles.text}>Kos Rumahan</Text>
        </View>
        <View style={styles.subkategori}>
          <Gap height={8}/>
          <Image style={{alignSelf:"center"}} source={require('../images/real-estate.png')}/>
          <Text style={styles.text}>Kontrakan</Text>
        </View>
      </View>
      <Text style={{fontSize:20,fontWeight:"bold", color:"#3B3D3F", marginStart:8}}>Terbaru</Text>
    </View>
    <List/>
    <Gap height={25}/>
    <Text style={{fontSize:20,fontWeight:"bold", color:"#3B3D3F", marginStart:8}}>Kos yang Dipesan</Text>
    <List/>
  </View>

  </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    flex: { flex: 1, },
    header: {
		backgroundColor: '#1E58B6',
		height: 145,
		borderRadius: 15,
		flexDirection: 'row',
    },
	name: {
		marginTop: 15,
		fontSize: 15,
        marginLeft: 25,
        color:'white'
	},
	desc: {
		marginTop: 3,
		marginLeft: 25,
        color: '#4D4545',
        color:'white',
        maxWidth : '60%'
    },
    img: { width: 82, height: 66, marginRight: 25, marginTop: 16 },
    kategori:{
      flexDirection:"row",
      alignSelf:"center",
    },
    subkategori:{
      backgroundColor:"#f7f7f7",
      padding:8,
      margin:8,
      borderRadius:8,
    },
    text:{
      color:"#A1A1A1", 
      textAlign:"center",
      fontWeight:"bold"
    }
})
