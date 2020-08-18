import React from 'react'
import { View, Text , TouchableOpacity ,StyleSheet , Image} from 'react-native'
import Gap from '../components/Gap'

const Home = () => {
  return (
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
    </View>
   
    
  )
}

export default Home

const styles = StyleSheet.create({
    flex: { flex: 1 },
    header: {
		backgroundColor: '#2C1F62',
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
})
