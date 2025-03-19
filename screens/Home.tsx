import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Home: undefined;
  AgeCalculator: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadoras de Conversão</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CelsiusToFahrenheit')}
        >
          <Image
            source={require('../assets/temperature-icon.webp')}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Celsius ↔ Fahrenheit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('KmToMp')}
        >
          <Image
            source={require('../assets/speed-icon.webp')}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Km/h ↔ mph </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AgeCalculator')}
        >
          <Image
            source={require('../assets/age-icon.webp')}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Calculadora de idade </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6e6e6',
  },
  title: {
    alignSelf: 'flex-start', 
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
  },
  card: {
    width: '48%', 
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
