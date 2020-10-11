import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Gap from './Gap';

const Tipe = ({angkanya}) => {
  return (
    <View style={style.isitipe}>
      <Text style={style.angka}>{angkanya}</Text>
    </View>
  );
};

export default Tipe;
const style = StyleSheet.create({
  isitipe: {
    backgroundColor: '#1E58B6',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  angka: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    flex: 1,
  },
});
