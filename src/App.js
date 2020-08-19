import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import PreLogin from './pages/PreLogin'
import Login from './pages/Login'
import Regis from './pages/Regis'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreLogin">
        <Stack.Screen name="PreLogin" component={PreLogin} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTitle:null}}/>
        <Stack.Screen name="Regis" component={Regis} options={{headerTitle:null}}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
