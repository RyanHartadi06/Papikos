import React, {useState} from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import Gap from '../components/Gap';
import Axios from 'axios';
import Tipe from '../components/Tipe';
import FasilitasSub from '../components/FasilitasSub';
const DetailKos = ({route}) => {
  const data = route.params;
  const [detail, setDetail] = useState({});
  const [tipe, setTipe] = useState([]);
  const [fasilitas, setFasilitas] = useState([]);
  const getData = () => {
    Axios.get(`http://papikos.wsjti.com/api/kos/detail/${data.id}`).then(
      (res) => {
        setDetail(res.data.data);
      },
    );
  };
  const getTipeKos = () => {
    Axios.get(`http://papikos.wsjti.com/api/kos/detail/${data.id}`).then(
      (res) => {
        setTipe(res.data.data.dk);
      },
    );
  };
  const getFasilitas = () => {
    Axios.get(`http://papikos.wsjti.com/api/kos/detail/${data.id}`).then(
      (res) => {
        setFasilitas(res.data.data.subfas);
      },
    );
  };
  useEffect(() => {
    getData();
    getTipeKos();
    getFasilitas();
  }, []);
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
          {tipe.map((tipenya, index) => {
            return <Tipe angkanya={tipenya.type} key={index} />;
          })}
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
          <Text style={style.text}>Nama Pemilik</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.nama}</Text>
        </View>
        <View style={style.kategori}>
          <Text style={style.text}>Email</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.email}</Text>
        </View>
        <View style={style.kategori}>
          <Text style={style.text}>Nomor Hp</Text>
          <Gap width={50} />
          <Text style={style.text}>{detail.no_hp}</Text>
        </View>
        <Gap height={20} />
        <Text style={style.title}>Fasilitas</Text>
        <View style={style.type}>
          {fasilitas.map((fas, index) => {
            return <FasilitasSub fas={fas.nama} key={index} />;
          })}
        </View>
      </View>
      <View style={style.btn}>
        <Text style={style.txt}>Pesan Sekarang</Text>
      </View>
    </ScrollView>
  );
};

export default DetailKos;
const style = StyleSheet.create({
  container: {padding: 25, flex: 1, backgroundColor: 'white'},
  img: {width: 350, height: 220},
  txt: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
  },
  btn: {
    borderRadius: 20,
    width: 315,
    height: 41,
    backgroundColor: '#1E58B6',
    alignSelf: 'center',
  },
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
    justifyContent: 'space-around',
    marginVertical: 10,
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
