// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return ( // Add the return statement
    <View style={styles.headerContainer}>
      <Image 
        source={require('@/assets/images/logo.png')} // Adjust the path as needed
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#0066cc',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 150,
    height: 40,
    tintColor: 'white'
  }
});