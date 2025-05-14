import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { A } from '@expo/html-elements';
import ForgetPass from './Child/ForgetPass';
import Login from './Child/Login';
import SignUp from './Child/SignUp'

const Stack = createStackNavigator();

 function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="ForgetPass" component={ForgetPass}/>
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}