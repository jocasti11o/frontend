import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
 SafeAreaView,
 StyleSheet,
 View,
 Button,
 ScrollView,
 TextInput,
 Image,
} from "react-native";

export default function login () {
 const [email, setEmail] = useState("");
 const [isValid, setIsValid] = useState(false);

 const validateEmail = (text) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setIsValid(regex.test(text));
 };

 return (
   
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Image
                  source={require("../assets/logosmart.png")}
                  style={styles.stretch}
               />
         <View style={styles.inputContainer}>
         <TextInput
            style={styles.inputField}
            placeholder="Enter Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            onChangeText={(text) => {
               setEmail(text);
               validateEmail(text);
            }}
            value={email}
         />
         </View>
         <View style={styles.imputFiled}>
         <TextInput
            style={styles.inputField}
            placeholder="Enter Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
         />
         </View>
         <View style={styles.buttonContainer}>
         <Button title="Submit" disabled={!isValid} />
         <StatusBar style="auto" />
         </View>
         <View style={styles.buttonContainer}>
            <Button title="Register" />

         </View>
      </ScrollView>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
 },
 inputContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#d1d1d1",
    borderWidth: 1,
    borderRadius: 5,
 },
 inputField: {
    height: 40,
    fontSize: 14,
    color: "#000",
 },
 buttonContainer: {
    paddingHorizontal: 15,
    marginTop: 20,
 },
 stretch: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
 }
});
