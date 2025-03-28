import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  Alert 
} from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; 


type RootStackParamList = {
  CelsiusToFahrenheit: undefined;
  KmToMp: undefined;
  Home: undefined;
  Invite: undefined;
};

type Props = NativeStackScreenProps <RootStackParamList, 'Invite'>;

export default function Invite ({ navigation }: Props)  {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [confirmations, setConfirmations] = useState({
    children: 0,
    adults: 0,
    elderly: 0
  });
  const [age, setAge] = useState('');  // Estado para armazenar a idade digitada
  const [isAgeInputVisible, setIsAgeInputVisible] = useState(false);  // Controla a visibilidade do input de idade

  const gameDate = new Date('2025-04-15T19:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = gameDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConfirmPresence = () => {
    setIsAgeInputVisible(true);  // Exibe o input de idade
  };

  const handleSubmitAge = () => {
    const parsedAge = parseInt(age, 10);
    if (isNaN(parsedAge) || parsedAge <= 0) {
      Alert.alert('Idade inválida', 'Por favor, insira uma idade válida.');
      return;
    }

    // Atualiza os contadores com base na idade
    if (parsedAge <= 12) {
      setConfirmations(prev => ({
        ...prev,
        children: prev.children + 1
      }));
    } else if (parsedAge >= 60) {
      setConfirmations(prev => ({
        ...prev,
        elderly: prev.elderly + 1
      }));
    } else {
      setConfirmations(prev => ({
        ...prev,
        adults: prev.adults + 1
      }));
    }

    setAge('');  // Limpa o campo de idade
    setIsAgeInputVisible(false);  // Esconde o campo de idade
  };

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={ require('../assets/sccp.png') } 
        style={styles.eventImage}
        resizeMode="cover"
      />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Corinthians x Palmeiras</Text>
        <Text style={styles.subtitle}>A exterminação do mal verde</Text>
      </View>

      <View style={styles.countdownContainer}>
        <Ionicons name="time-outline" size={24} color="#333" />
        <Text style={styles.countdownText}>O Jogo irá começar em: {timeRemaining}</Text>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirmPresence}
        >
<MaterialCommunityIcons name="calendar-plus" size={24} color="black" />          <Text style={styles.confirmButtonText}>Confirmar Presença</Text>
          
        </TouchableOpacity>
      </View>

     
      {isAgeInputVisible && (
        <View style={styles.ageInputContainer}>
          <TextInput
            style={styles.ageInput}
            placeholder="Digite sua idade"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmitAge}
          >
            <Text style={styles.submitButtonText}>Confirmar Idade</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.confirmationCardsContainer}>
        <View style={styles.confirmationCard}>
          <FontAwesome5 name="child" size={24} color="#3498db" />
          <Text style={styles.confirmationCardText}>Crianças</Text>
          <Text style={styles.confirmationCardNumber}>{confirmations.children}</Text>
        </View>
        <View style={styles.confirmationCard}>
          <MaterialIcons name="people" size={24} color="#2ecc71" />
          <Text style={styles.confirmationCardText}>Adultos</Text>
          <Text style={styles.confirmationCardNumber}>{confirmations.adults}</Text>
        </View>
        <View style={styles.confirmationCard}>
          <FontAwesome5 name="walking" size={24} color="#e74c3c" />
          <Text style={styles.confirmationCardText}>Idosos</Text>
          <Text style={styles.confirmationCardNumber}>{confirmations.elderly}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  eventImage: {
    width: '100%',
    height: 250,
  },
  headerContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    color: '#666'
  },
  countdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ecf0f1'
  },
  countdownText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333'
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  },
  confirmButton: {
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
  confirmButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ageInputContainer: {
    padding: 20,
    alignItems: 'center'
  },
  ageInput: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 12,
    width: 170,
    alignItems: 'center'
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  confirmationCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  },
  confirmationCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    width: '30%'
  },
  confirmationCardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666'
  },
  confirmationCardNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  }
});
