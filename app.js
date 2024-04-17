import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, TextInput } from 'react-native';

const App = () => {
  const openResume = () => {
    Linking.openURL('https://docs.google.com/document/d/1O8WutOT4KGwEZ6jph2n_L7dOZyCRkteLwKgCQZZNfbA/edit?usp=sharing');
  };

  const openLinkedin = () => {
    Linking.openURL('https://www.linkedin.com/in/kavin-karthik-442543247/?originalSubdomain=in');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kavin Karthik 22brs1049</Text>
      <TouchableOpacity style={styles.button} onPress={openResume}>
        <Text style={styles.buttonText}>Click me to view Kavin's resume</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openLinkedin}>
        <Text style={styles.buttonText}>Click me to view Kavin's LinkedIn</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>App by Kavin Karthik for ANDROID CLUB 2024.</Text>
      <TextInput style={styles.input} placeholder="Type anything here" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginBottom: 20, 
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: '80%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
  },
  input: {
    marginTop: 20,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default App;
