import { Text, View, StyleSheet, } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

const GetWeather = () => {

  const [weather, setWather] = useState([]);
  useEffect(() => {
    getCurrentWeather();
  },[])
  
  const getCurrentWeather = () => {
    const URL = 'https://api.hgbrasil.com/weather?key=86dc17f7'

    fetch(URL).then(res => (
      res.json()
    )).then(data =>{
      setWather(data)
      console.log(data)
    })
  };
  return (
    <View>
      <FlatList data={weather} renderItem={({ item }) => <View>
          <text>{item.city}</text>
      </View>}/>
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