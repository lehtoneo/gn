import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Good Neighbor </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  text: {
      color: '#fff',
      fontSize:23,
      textAlign: "center",
  }
});