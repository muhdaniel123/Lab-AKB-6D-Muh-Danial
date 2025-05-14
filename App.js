import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {useFonts} from 'expo-font';
import { A } from '@expo/html-elements';
import ForgetPass from './Child/ForgetPass';
import Login from './Child/Login';
import SignUp from './Child/SignUp'


 function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require("./assets/fonts/Inter-Black-900.otf"),
    'Inter-Italic': require("./assets/fonts/Inter-Black-Italic-900.otf")
  });

  if(!fontsLoaded) {
    return<Text>Memuat Font</Text>
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.main}>
      <Text>Default Text</Text>
      <Text style={{fontFamily:"Inter-Black"}}>Inter Black Font</Text>
      <Text style={{fontFamily:"Inter-Italic"}}>Inter Italic Font</Text>
    </View>
    </SafeAreaView>
  );
}

export default () => {
  return(
      <App/>
  )
}


const style = StyleSheet.create({
  container: {
    flex:1
  },
  main: {
    flex:1,
    backgroundColor: "white",
    alignItems:'center',
    justifyContent:'center'
  }
})