import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
    CelsiusToFahrenheit: undefined;
    KmToMp: undefined;
    Home: undefined;
    Invite: undefined
  };

type Props = NativeStackScreenProps <RootStackParamList, 'Invite'>;


export default function Invite ({ navigation }: Props)  {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [confirmations, setConfirmations] = useState({
    children: 0,
    adults: 0,
    elderly: 0
  });

  // Data do próximo jogo (ajuste conforme necessário)
  const gameDate = new Date('2024-04-15T19:00:00');

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
    // Lógica para confirmar presença
    setConfirmations(prev => ({
      ...prev,
      adults: prev.adults + 1
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem do Evento */}
      <Image 
        source={{ uri: 'https://example.com/corinthians-game-banner.jpg' }} 
        style={styles.eventImage}
        resizeMode="cover"
      />

      {/* Título e Detalhes */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Corinthians x Palmeiras</Text>
        <Text style={styles.subtitle}>Derby Paulista - Campeonato Paulista</Text>
      </View>

      {/* Contagem Regressiva */}
      <View style={styles.countdownContainer}>
        <Ionicons name="time-outline" size={24} color="#333" />
        <Text style={styles.countdownText}>Próximo jogo em: {timeRemaining}</Text>
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirmPresence}
        >
          <Text style={styles.confirmButtonText}>Confirmar Presença</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>

      {/* Cards de Confirmação */}
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
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center'
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  detailsButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: 'white',
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

