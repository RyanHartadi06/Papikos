import Axios from 'axios';
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Gap from './Gap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      isError: false,
    };
  }
  
  
  // Mount User Method
  componentDidMount() {
    this.getKos()
  }

  //   Get Api Users
  getKos = async () => {
    try {
      const response = await Axios.get(`http://papikos.wsjti.com/api/kos/data?lat=-6.2008406&long=106.7987143`)
      console.log(response)
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    // If data finish load
    return (
      <View style={{flex:1}}>
            <FlatList
              data={this.state.data.data}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity key={item.id} style={styles.itemlist}>
                  <Image source={{ uri: "http://papikos.wsjti.com/assets/images/upload/kos/"+`${item.link_media}` }} style={styles.Image} />
                  <View style={styles.wrapper}>
                        <Text style={{fontWeight:"bold"}}>{item.nama}</Text>
                      <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:"bold"}}>Rp.{item.harga}</Text>
                        <Text style={{fontWeight:"bold"}}>Perbulan</Text>
                      </View>
                  </View>
                  <View style={{flexDirection: 'column'}}>
                     
                      <View style={{flexDirection : 'row'}}>
                        <Image source={require('../images/marker.png')} />
                        <Gap width={15}/>
                        <Text>Sumbersari , Jember</Text>
                      </View>
                  </View>
                </TouchableOpacity>
              )}
              />
        </View>
     
    );
    }
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', justifyContent: 'space-between' ,  paddingVertical: 10  },
  itemlist:{
    marginTop:31,
    borderRadius:8,
    width: '92%',
    height: 281,
    marginBottom:30
  },
  Image:{
    width: 313, height: 205, borderRadius: 8
  },
})