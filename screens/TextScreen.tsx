import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  TextScreen: undefined;
  Home: undefined;
  Tabs: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'TextScreen'>;

export default function TextScreen({ navigation }: Props) {

  const [value, setValue] = useState('');
  const [vowelCount, setVowelCount] = useState(0);
  const [consonantCount, setConsonantCount] = useState(0);
  const [isPalindrome, setIsPalindrome] = useState(false);

  // Função para contar vogais e consoantes
  const countVowelsAndConsonants = (text: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
    let cleanedText = text.toLowerCase().replace(/[^a-z]/g, ''); // Remove caracteres especiais

    for (let char of cleanedText) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (char >= 'a' && char <= 'z') {
        consonantCount++;
      }
    }

    setVowelCount(vowelCount);
    setConsonantCount(consonantCount);
    checkPalindrome(cleanedText);
  };

  // Função para verificar se é palíndromo
  const checkPalindrome = (text: string) => {
    const reversedText = text.split('').reverse().join('');
    setIsPalindrome(text === reversedText);
  };

  const handleAnalyze = () => {
    countVowelsAndConsonants(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          source={require('../assets/text-icon.webp')}
          style={styles.imagem}
          resizeMode="contain"
        />

        <Text style={styles.label}>Digite o texto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui sua palavra"
          value={value}
          onChangeText={setValue}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAnalyze}>
            <Text style={styles.buttonText}>Analisar</Text>
          </TouchableOpacity>
        </View>

        {/* Exibir resultados com ícones modernos */}
        <View style={styles.resultContainer}>
          <View style={styles.resultBox}>
            <Icon name="brightness-1" size={24} color="#ff6347" />
            <Text style={styles.resultText}>Vogais: {vowelCount}</Text>
          </View>

          <View style={styles.resultBox}>
            <Icon name="brightness-1" size={24} color="#4682b4" />
            <Text style={styles.resultText}>Consoantes: {consonantCount}</Text>
          </View>

          <View style={styles.resultBox}>
            <Icon name={isPalindrome ? 'check-circle' : 'error'} size={24} color={isPalindrome ? '#32cd32' : '#ff6347'} />
            <Text style={styles.resultText}>{isPalindrome ? 'É um Palíndromo!' : 'Não é um Palíndromo'}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.switchButton}
          onPress={() => navigation.navigate('Tabs')}
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
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  label: {
    fontSize: 22,
    marginBottom: 8,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  resultBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  resultText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: '#333',
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
    marginTop: 30,
  },
  switchButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 90,
    backgroundColor: '#d9d9d9',
  },
});
