import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default class AssetExample extends React.Component {

  handlePress = () => {
    Alert.alert('Imagem foi clicada');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Outro componente importado para pagina principal
        </Text>

        <TouchableOpacity onPress={this.handlePress}>
          <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 80
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});