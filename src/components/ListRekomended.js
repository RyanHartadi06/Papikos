import Axios from 'axios';
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    this.getMovieData()
  }

  //   Get Api Users
  getMovieData = async () => {
    try {
      const response = await Axios.get(`http://papikos.wsjti.com/api/dashboard/data`)
      console.log(response)
      this.setState({ isError: false, isLoading: false, data: response.data })
    } catch (error) {
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    // If data finish load
    return (
      <View style={styles.container}>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
            data={this.state.data.rekomended}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id} style={styles.itemlist}>
                <Image source={{ uri: "http://papikos.wsjti.com/assets/images/upload/kos/"+`${item.link_media}` }} style={styles.Image} />
                <View>
                    <Text style={{fontWeight:"bold", alignSelf:"center" , marginBottom:8}}>{item.nama}</Text>
                    <Text style={{alignSelf:"center"}}>Rp.{item.harga}</Text>
                </View>
              </TouchableOpacity>
            )}
            />
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container:{
      marginTop:8,
  },
  itemlist:{
    marginStart:10,
    marginTop:11,
    borderRadius:8,
  },
  Image:{
    width: 199,
    height: 132,
    borderRadius : 15,
    marginBottom:8
  },
})