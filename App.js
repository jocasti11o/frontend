import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Login from './components/Login';
import Registrer from './components/Registrer';

export default function App() {
 const [showLogin, setShowLogin] = useState(true);
 const [showRegistrer, setShowRegistrer] = useState(false);

 const showComponent = () => {
    if (showLogin) {
      return <Login />;
    } else if (showRegistrer) {
      return <Registrer />;
    }
 };

 const handleLoginPress = () => {
    setShowLogin(true);
    setShowRegistrer(false);
 };

 const handleRegistrerPress = () => {
    setShowLogin(false);
    setShowRegistrer(true);
 };

 const handleLogoutPress = () => {
    Alert.alert('Sesión cerrada con éxito');
 };

 return (
    <View style={styles.container}>
      {showComponent()}
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLoginPress} />
        <Button title="Registrer" onPress={handleRegistrerPress} />
        <Button title="Logout" onPress={handleLogoutPress} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 buttonContainer: {
    marginTop: 20,
 },
});

