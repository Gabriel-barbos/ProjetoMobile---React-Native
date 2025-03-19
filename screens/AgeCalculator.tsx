import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    CelsiusToFahrenheit: undefined;
    KmToMp: undefined;
    AgeCalculator: undefined;
    Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'AgeCalculator'>;

export default function AgeCalculator({ navigation }: Props) {
    const [idade, setIdade] = useState<string>('');
    const [resultado, setResultado] = useState<string | null>(null);

    const calcularIdade = () => {
        const idadeNum = parseInt(idade);

        if (isNaN(idadeNum) || idadeNum < 0) {
            setResultado('Por favor, insira uma idade válida.');
            return;
        }

        if (idadeNum < 12) {
            setResultado(`Idade: ${idadeNum} anos - Criança 👶`);
        } else if (idadeNum >= 12 && idadeNum < 60) {
            setResultado(`Idade: ${idadeNum} anos - Adulto 🧑`);
        } else {
            setResultado(`Idade: ${idadeNum} anos - Idoso 👴`);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/age-icon.webp')}
                    style={styles.imagem}
                    resizeMode="contain"
                />

                <Text style={styles.label}>Digite sua idade:</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Ex: 25"
                    keyboardType="numeric"
                    value={idade}
                    onChangeText={setIdade}
                />

                {resultado ? <Text style={styles.result}>{resultado}</Text> : null}

                <TouchableOpacity
                    style={styles.button}
                    onPress={calcularIdade}
                >
                    <Text style={styles.buttonText}>Calcular Idade</Text>
                </TouchableOpacity>

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

    button: {
        backgroundColor: '#ac00e6',
        padding: 15,
        borderRadius: 12,
        width: 250,
        alignItems: 'center',
        marginTop: 20
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
