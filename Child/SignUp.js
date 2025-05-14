
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,TextInput,Button } from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { H1, S } from "@expo/html-elements";
import { Pressable } from "react-native";
import { Image } from "react-native";

const SignUp = () => {
    const navigation = useNavigation();
    const [name] = useState();
    return(
        <View style={styles.container}>
            <StatusBar/>
            <View style={{paddingBottom: 50}}>
                <H1>SignUp</H1>
            </View>
            <TextInput style={styles.box} placeholder="Nama"/>
            <TextInput style={styles.box} placeholder="Email"/>
            <TextInput style={styles.box} placeholder="Password"/>
            <Text onPress={() => navigation.navigate('Login', {paramKey: name})} style={{paddingVertical:20, textAlign:'right'}}>
                Already Have account ?
            </Text>

            <Pressable style={styles.buttonstyle}>
                <Text style={{textAlign: "center", fontWeight:"bold", color: "white"}}>Login</Text>
            </Pressable>
            <View style={styles.bottomview}>
                <Text>
                    Or Login With social account
                </Text>
                <View style={{flexDirection :"row"}}>

                <Image 
                    source={require('../assets/google-logo.png')}
                    style={[styles.imageStyle]}
                    />
                <Image 
                    source={require('../assets/facebook-logo.png')}
                    style={styles.imageStyle}
                    />
                    </View>
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex:1,  
      backgroundColor: '#fff',
      paddingTop:20,
      paddingLeft:10,
      paddingRight:20,
      
    },
    box: {
      height: 64,
      width: 343,
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 5,
      paddingRight: 5,
    },
    buttonstyle: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "red",
        paddingVertical: 10,
        width : "100%",
        justifyContent:"center"
    },
    bottomview: {
        paddingTop: "50%",
        alignItems: "center"
    },
    imageStyle:{
        width: 50,
        height: 50,
        marginRight : 20
    }
  });
  