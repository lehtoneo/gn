import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function InfoBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Neighbor </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

});
