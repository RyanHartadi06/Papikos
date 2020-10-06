import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getData} from '../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    getData('users').then((res) => {
      const dataku = res;
      console.log('ini datanya' + dataku);
      setTimeout(() => {
        if (dataku) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('PreLogin');
        }
      }, 1000);
    });
  });
  return (
    <View>
      <Text>Ini Splash</Text>
    </View>
  );
};

export default Splash;
