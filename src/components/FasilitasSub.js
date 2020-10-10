import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const FasilitasSub = ({fas}) => {
  return (
    <View>
      <View style={style.isitipe}>
        <Text style={style.angka}>{fas}</Text>
      </View>
    </View>
  );
};

export default FasilitasSub;
const style = StyleSheet.create({
  isitipe: {
    backgroundColor: '#1E58B6',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 120,
    height: 40,
  },
  angka: {
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    flex: 1,
  },
});
