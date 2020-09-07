import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoBox() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>heeeeyhhhhoo </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    padding: 5,
    backgroundColor: 'lightblue',
    borderRadius: "1px, solid, black",

  },
  text: {
      color: "black",
      fontSize:13,
      textAlign: "center",
  }
});