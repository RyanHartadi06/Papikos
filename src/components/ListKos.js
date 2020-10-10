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
import Gap from './Gap';

const ListKos = ({image, nama, harga, lokasi, onPress}) => {
  return (
    <TouchableOpacity style={styles.itemlist} onPress={onPress}>
      <Image source={image} style={styles.Image} />
      <View style={styles.wrapper}>
        <Text style={{fontWeight: 'bold'}}>{nama}</Text>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: 'bold'}}>Rp.{harga}</Text>
          <Text style={{fontWeight: 'bold'}}>Perbulan</Text>
        </View>
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../images/marker.png')} />
          <Gap width={15} />
          <Text>{lokasi}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListKos;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  itemlist: {
    marginTop: 31,
    borderRadius: 8,
    width: '92%',
    height: 300,
    marginBottom: 30,
  },
  Image: {
    width: 350,
    height: 205,
    borderRadius: 8,
  },
});
