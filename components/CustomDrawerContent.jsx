import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Home')}
      >
      <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => props.navigation.navigate('Previsão do tempo')}
      >
      <Text style={styles.itemText}>Previsão do tempo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
});

export default CustomDrawerContent;
