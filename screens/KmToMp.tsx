import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'KmToMp'>;

export default function KmToMp({ navigation }: Props) {

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const convertToMph = () => {
    const km = parseFloat(value);
    if (!isNaN(km)) {
      setResult(`${(km / 1.609).toFixed(2)} mph`);
    } else {
      setResult('Valor inválido');
    }
  };

  const convertToKm = () => {
    const mph = parseFloat(value);
    if (!isNaN(mph)) {
      setResult(`${(mph * 1.609).toFixed(2)} km/h`);
    } else {
      setResult('Valor inválido');
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={styles.container}>

        <Image
          source={require('../assets/speed-icon.webp')}
          style={styles.imagem}
          resizeMode="contain"
        >

        </Image>

        <Text style={styles.label}>Digite o valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
          placeholder="Ex: 25"
        />

        {result ? <Text style={styles.result}>{result}</Text> : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={convertToKm}>
            <Text style={styles.buttonText}>Converter para KM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={convertToMph}>
            <Text style={styles.buttonText}>Converter para Mph</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="arrow-back" size={24} color="#000" />
          <Text style={styles.switchButtonText}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>

    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  label: { fontSize: 20, marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10
  },
  result: { fontSize: 20, marginTop: 10, textAlign: 'center' },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 20,
  },

  button: {
    backgroundColor: '#1a66ff',
    padding: 15,
    borderRadius: 12,
    width: 170,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },


  switchButton: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },

  switchButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },

  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 90,
    backgroundColor: "#d9d9d9"
  }

});