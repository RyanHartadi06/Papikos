import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Gap from '../components/Gap';
const Account = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={style.bg}>
        <Image style={style.img} source={require('../images/Image.png')} />
        <Gap height={20} />
        <Text style={style.txt}>Hello , Ryan</Text>
      </View>

      {/* <Text>sad</Text> */}
    </View>
  );
};

export default Account;

const style = StyleSheet.create({
  bg: {
    backgroundColor: '#1E58B6',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  txt: {
    fontSize: 20,
    color: 'white',
  },
});
