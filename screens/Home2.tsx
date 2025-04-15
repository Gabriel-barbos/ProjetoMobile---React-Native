import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Home: undefined;
  AgeCalculator: undefined;
  Invite: undefined;
  Lottery: undefined;
  Text: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home2({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mini Projetos 2</Text>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('CelsiusToFahrenheit')}
        >
          <Image
            source={require('../assets/food-icon.png')} // ícone de Cardápio
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>Cardápio</Text>
        </TouchableOpacity>

     
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212', // fundo escuro
  },
  title: {
    alignSelf: 'flex-start',
    color: '#ffffff', // título claro
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'flex-start', 
    width: '100%', 
  },
  card: {
    width: '48%', 
    padding: 15,
    backgroundColor: '#1f1f1f', // fundo escuro dos cards
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  cardText: {
    color: '#ffffff', // texto branco nos cards
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
