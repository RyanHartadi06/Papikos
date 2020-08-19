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
      const response = await Axios.get(`http://www.omdbapi.com/?apikey=133decb5&s=dragon+ball`)
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
            data={this.state.data.Search}
            renderItem={({item}) => (
              <TouchableOpacity key={item.imdbID} style={styles.itemlist}>
                <Image source={{ uri: `${item.Poster}` }} style={styles.Image} />
                <View>
                    <Text style={{fontWeight:"bold", alignSelf:"center"}}>{item.Title}</Text>
                    <Text style={{alignSelf:"center"}}>{item.Type}</Text>
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
    borderRadius:8,
    borderWidth:1
  },
  Image:{
    width: 100,
    height: 120,
    margin:8,
    resizeMode:"center",
  },
})