import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { gerarSorteio, verificarAcertos } from './components/lottery';

type RootStackParamList = {
    CelsiusToFahrenheit: undefined;
    KmToMp: undefined;
    Home: undefined;
    Lottery: undefined
  };

type Props = NativeStackScreenProps <RootStackParamList, 'Lottery'>;


export default function Lottery({ navigation }: Props) {
  const [numeroUsuario, setNumeroUsuario] = useState<string>('');
  const [resultado, setResultado] = useState('');
  const [animacao] = useState(new Animated.Value(1));

  const handleAposta = () => {
    if (numeroUsuario.length !== 6 || isNaN(Number(numeroUsuario))) {
      alert('Por favor, insira um número de exatamente 6 dígitos.');
      return;
    }
  
    const numerosUsuario = numeroUsuario.split('').map(Number);
    const numerosSorteados = gerarSorteio();
    const resultadoAposta = verificarAcertos(numerosUsuario, numerosSorteados);
  
    if (resultadoAposta === 'Campeão! Você acertou os 6 números!') {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animacao, { toValue: 1.5, duration: 300, useNativeDriver: true }),
          Animated.timing(animacao, { toValue: 1, duration: 300, useNativeDriver: true }),
        ])
      ).start();
    }
  
    setResultado(resultadoAposta);
    setNumeroUsuario(''); // Limpa o número após a aposta
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require('../assets/lottery-icon.png')}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Text style={styles.label}>Digite seu número de 6 dígitos:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 123456"
          keyboardType="numeric"
          maxLength={6}
          value={numeroUsuario}
          onChangeText={setNumeroUsuario}
        />

        <TouchableOpacity
          style={styles.button} onPress={handleAposta}
        >
          <Text style={styles.buttonText}>Apostar</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{resultado}</Text>

        {resultado === 'Campeão! Você acertou os 6 números!' && (
          <Animated.Text style={[styles.campeao, { transform: [{ scale: animacao }] }]}>
            CAMPEÃO!
          </Animated.Text>
        )}

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  label: {
    fontSize: 20,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    marginBottom: 10
  },
  result: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
  campeao: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20
  },
  button: {
    backgroundColor: '#F0E936',
    padding: 15,
    borderRadius: 12,
    width: 250,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#000',
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
    gap: 12,
    marginTop: 20
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
  }
});