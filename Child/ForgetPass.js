import { Button, Pressable, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text,TextInput } from "react-native";
import { H1 } from "@expo/html-elements";

const ForgetPass = ({route}) => {
    return(
        <View style={styles.container}>
            <StatusBar/>
            <View style={styles.header}>
            <H1>FORGOT PASSWORD</H1>
            </View>
        
        <Text style={styles.teksfield}>
            Please, Enter your email address. you will receive a link to create a new password via email.
        </Text>
        <TextInput style={styles.box} placeholder="Email"/>
        
        <Pressable style={styles.buttonstyle}>
            <Text style={{textAlign: "center", fontWeight:"bold", color: "white"}}>Send</Text>
        </Pressable>
        
    </View>   
    )
}

export default ForgetPass

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop:10,
      paddingLeft:20,
      paddingRight:20,
    },
    header: {
        alignItems: "flex-start",
        paddingBottom: 50
    },
    box: {
      height: 64,
      width: 343,
      alignItems: "flex-start",
      borderColor: "gray",
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 10,
      paddingLeft: 5,
      paddingRight: 5,
    },
    teksfield: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    buttonstyle: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "red",
        paddingVertical: 10,
        width : "100%",
        justifyContent:"center"
    }
  });
  
  