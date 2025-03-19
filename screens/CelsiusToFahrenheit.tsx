import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,  Keyboard, TouchableWithoutFeedback  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    CelsiusToFahrenheit: undefined;
    KmToMp: undefined;
    Home: undefined;

  };

type Props = NativeStackScreenProps <RootStackParamList, 'CelsiusToFahrenheit'>;
  
export default function CelsiusToFahrenheit({ navigation }: Props) {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const convertToFahrenheit = () => {
        const celsius = parseFloat(value);
        if (!isNaN(celsius)) {
            setResult(`${(celsius * 9 / 5 + 32).toFixed(2)} °F`);
        } else {
            setResult('Valor inválido');
        }
    };

    const convertToCelsius = () => {
        const fahrenheit = parseFloat(value);
        if (!isNaN(fahrenheit)) {
            setResult(`${((fahrenheit - 32) * 5 / 9).toFixed(2)} °C`);
        } else {
            setResult('Valor inválido');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={styles.container}>

                 <Image
                    source={require('../assets/temperature-icon.webp')}
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
                <TouchableOpacity style={styles.button} onPress={convertToFahrenheit}>
                    <Text style={styles.buttonText}>Converter para Fahrenheit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={convertToCelsius}>
                    <Text style={styles.buttonText}>Converter para Celsius</Text>
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
        backgroundColor: '#cc0000',
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