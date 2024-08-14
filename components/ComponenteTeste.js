import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ComponenteTeste extends React.Component {
  render() {
    return (
      <View>
        <Text style={estilos.Texto}>Texto do componente de teste</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create ({
  Texto: {
    fontSize: 24,
    textAlign: 'center',
  }
})