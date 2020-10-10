import Axios from 'axios';
import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListKos from '../components/ListKos';

const Kos = ({navigation}) => {
  const [getApi, getData] = useState([]);

  useEffect(() => {
    getDataFromApi();
  });
  const getDataFromApi = () => {
    Axios.get(
      'http://papikos.wsjti.com/api/kos/data?lat=-6.2008406&long=106.7987143',
    ).then((res) => {
      getData(res.data.data);
    });
  };
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 31, flex: 1, flexDirection: 'column'}}>
        {getApi.map((dataku, index) => {
          return (
            <ListKos
              key={index}
              nama={dataku.nama}
              image={{
                uri:
                  'http://papikos.wsjti.com/assets/images/upload/kos/' +
                  `${dataku.link_media}`,
              }}
              harga={dataku.harga}
              lokasi="Jl Bungur"
              onPress={() => {
                navigation.navigate('Detail', dataku);
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
export default Kos;
