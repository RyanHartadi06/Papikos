import Axios from 'axios';
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ListRekomended = ({img, nama, harga}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemlist}>
        <Image source={img} style={styles.Image} />
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
              marginBottom: 8,
            }}>
            {nama}
          </Text>
          <Text style={{alignSelf: 'center'}}>{harga}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListRekomended;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  itemlist: {
    marginStart: 10,
    marginTop: 11,
    borderRadius: 8,
  },
  Image: {
    width: 199,
    height: 132,
    borderRadius: 15,
    marginBottom: 8,
  },
});
