import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Account from './pages/Account';
import Kos from './pages/Kos';
import Maps from './pages/Maps';
import Whislist from './pages/Whislist';
import PreLogin from './pages/PreLogin';
import Login from './pages/Login';
import Regis from './pages/Regis';
import LupaPass from './pages/LupaPass';
import UbahPass from './pages/UbahPass';
import Intro from './pages/Intro';
import Intro2 from './pages/Intro2';
import Intro3 from './pages/Intro3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Whislist" component={Whislist} />
      <Tab.Screen name="Kos" component={Kos} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen
          name="PreLogin"
          component={PreLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#F2F2F2',
              elevation: 0,
            },
            headerTintColor: '#1E58B6',
          }}
        />
        <Stack.Screen
          name="Regis"
          component={Regis}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#F2F2F2',
              elevation: 0,
            },
            headerTintColor: '#1E58B6',
          }}
        />
        <Stack.Screen
          name="LupaPass"
          component={UbahPass}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: '#F2F2F2',
              elevation: 0,
            },
            headerTintColor: '#1E58B6',
          }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
