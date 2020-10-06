import React, {useState} from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import Gap from '../components/Gap';
import Axios from 'axios';
const DetailKos = ({route}) => {
  const data = route.params;
  const [detail, setDetail] = useState({});
  const getData = () => {
    Axios.get(`http://papikos.wsjti.com/api/kos/detail/${data.id}`).then(
      (res) => {
        console.log('result getData', res.data.data);
        setDetail(res.data.data);
      },
    );
  };
  useEffect(() => {
    getData();
  });
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}>
      <View style={style.container}>
        <Image
          source={{
            uri: `http://papikos.wsjti.com/assets/images/upload/kos/${data.link_media}`,
            // `${dataku.link_media}`,
          }}
          style={style.img}
        />
        <Gap height={20} />
        <View style={style.row}>
          <Text style={style.title}>{data.nama}</Text>
          <Text style={style.price}>Rp.{data.harga}</Text>
        </View>
        <Gap height={20} />
        <Text>{data.deskripsi}</Text>
        <Gap height={20} />
        <Text style={style.title}>Tipe Kos</Text>
        <Gap height={20} />
        <View style={style.type}>
          <View style={style.isitipe}>
            <Text style={style.angka}>20</Text>
          </View>
          <Gap width={20} />
          <View style={style.isitipe}>
            <Text style={style.angka}>30</Text>
          </View>
        </View>
        <Gap height={20} />
        <Text style={style.title}>Details</Text>
        <Gap height={10} />
        <View style={style.kategori}>
          <Text style={style.text}>Jumlah Kamar</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.jumlah_kamar}</Text>
        </View>
        <View style={style.kategori}>
          <Text style={style.text}>Kategori</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.kategori}</Text>
        </View>
        <View style={style.kategori}>
          <Text style={style.text}>Jenis</Text>
          <Gap width={50} />
          <Text style={style.text}>
            {detail.jenis == 1 ? 'Laki Laki' : 'Perempuan'}
          </Text>
        </View>
        <Gap height={20} />
        <Text style={style.title}>Deskripsi</Text>
        <Gap height={20} />
        <Text>{detail.deskripsi}</Text>
        <Text style={style.title}>Pemilik</Text>
        <View style={style.kategori}>
          <Text style={style.text}>Jumlah Kamar</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.jumlah_kamar}</Text>
        </View>
        <View style={style.kategori}>
          <Text style={style.text}>Kategori</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.kategori}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailKos;
const style = StyleSheet.create({
  container: {padding: 25, flex: 1, backgroundColor: 'white'},
  img: {width: 350, height: 220},
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
  },
  kategori: {
    flex: 1,
    alignContent: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  isitipe: {
    backgroundColor: '#1E58B6',
    borderWidth: 0.5,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  angka: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    flex: 1,
  },
  type: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  price: {
    fontWeight: '200',
    fontSize: 20,
  },
});
