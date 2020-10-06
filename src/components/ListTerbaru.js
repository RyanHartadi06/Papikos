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

const ListTerbaru = ({img, nama, harga, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.itemlist}>
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
      </View>
    </TouchableOpacity>
  );
};

export default ListTerbaru;
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  itemlist: {
    marginStart: 10,
    marginTop: 11,
    borderRadius: 8,
    width: 124,
    height: 180,
  },
  Image: {
    width: 124,
    height: 124,
    borderRadius: 15,
    paddingLeft: 15,
    marginBottom: 8,
  },
});
