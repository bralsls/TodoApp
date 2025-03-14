import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  const navigation = useNavigation();




  
  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Form</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput 
      style={styles.input} 
      placeholder='Password'
      secureTextEntry />
      <TouchableOpacity
      onPress={handleLogin}>
      <Text style={styles.buttonText}
      style={styles.button}>
      Login</Text></TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    color: '#f3f9'
  
  },
  input:{
    width:'80%',
    height: 50,
    backgroundColor:'#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    padding: 10,

  },
  buttonText:{
    color:'#FFFF',
    fontSize: 18,

  },
  button:{
    width:'80%',
    height: 30,
    backgroundColor:'#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8
  }

});


export default App;
