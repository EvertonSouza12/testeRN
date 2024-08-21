import { Text, View, StyleSheet, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const GetWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather();
  }, []);
  
  const getCurrentWeather = async () => {
    const URL = 'https://api.hgbrasil.com/weather?key=86dc17f7';

    try {
      const res = await fetch(URL);
      const json = await res.json();
      setWeather(json.city);
      console.log(res)
    }catch (error){
      console.log(error)
    }
  };
 

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={weather} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View>
            <Text>{item.city}</Text> 
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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

export default GetWeather;