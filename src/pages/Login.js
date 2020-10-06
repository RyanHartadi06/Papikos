import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Axios from 'axios';
import {storeData} from '../config';
const Login = ({navigation}) => {
  const formData = new FormData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    //form append ini awalnya params 1 buat sesuai dengan API , 2 buat inputnya
    formData.append('email', email);
    formData.append('password', password);
    Axios.post('http://papikos.wsjti.com/api/Auth/sign_in', formData)
      .then((result) => {
        console.log('result data', result.data.data);
        console.log('senddata', formData);
        // console.log('result', result);
        if (result.data.status == true) {
          navigation.navigate('MainApp');
          storeData('users', result.data.data);
          // setEmail('');
          // setPassword('');
          console.log('Sukses');
        } else {
          console.log('gagal');
        }
      })
      .catch((err) => console.log('err', err));
  };
  //   const postData = () => {
  //     const data = {
  //       emailnya,
  //       passwordnya,
  //     };
  //     fetch('http://modalin.evoindo.com/api/auth/authlogin', {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     })
  //       .then((res) => res.json())
  //       .catch((error) => console.log(error))
  //       .then((json) => {
  //         console.log('Data masuk:' + json);
  //       });
  //   };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: '#3B3D3F',
          }}>
          {' '}
          Selamat Datang{' '}
        </Text>
        <Image
          style={{marginTop: 20, alignSelf: 'center'}}
          source={require('../images/focused_working.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            marginRight: 20,
            paddingHorizontal: 20,
          }}>
          <Image
            style={{marginTop: 20, marginRight: 12}}
            source={require('../images/Group_231.png')}
          />
          <TextInput
            style={styles.Input}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={{flexDirection: 'row', marginRight: 20}}>
          <Image
            style={{marginTop: 20, marginRight: 12}}
            source={require('../images/Group_232.png')}
          />
          <TextInput
            style={styles.Input}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            fontSize: 13,
            color: '#1E58B6',
            alignSelf: 'flex-end',
            marginEnd: 30,
            marginTop: 10,
          }}
          onPress={() => this.props.navigation.navigate('LupaPass')}>
          {' '}
          Lupa Password{' '}
        </Text>
        <TouchableOpacity style={styles.Buttonlogin} onPress={submit}>
          <Text style={{color: '#fff', fontSize: 18}}>Masuk</Text>
        </TouchableOpacity>
        <Text style={{color: '#1E58B6', fontSize: 15, marginTop: 40}}>
          Masuk Melalui
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{marginTop: 20}}
            source={require('../images/Group_229.png')}
          />
          <Image
            style={{marginTop: 20, marginStart: 20}}
            source={require('../images/Group_230.png')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#A1A1A1', fontSize: 15, marginTop: 40}}>
            Tidak memiliki Akun?
          </Text>
          <Text
            style={{
              color: '#1E58B6',
              fontSize: 15,
              marginTop: 40,
              marginStart: 8,
              marginBottom: 20,
            }}
            onPress={() => this.props.navigation.navigate('Regis')}>
            Mendaftar
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    alignContent: 'center',
  },
  Buttonlogin: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 50,
    paddingEnd: 50,
    marginTop: 30,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#1E58B6',
  },
  Input: {
    alignSelf: 'center',
    width: 250,
    borderColor: '#1E58B6',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },
});
