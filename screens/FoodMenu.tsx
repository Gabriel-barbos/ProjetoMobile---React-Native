// CardapioScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categorias = [
  {
    id: 1,
    nome: 'Bebidas',
    imagem: 'https://images.unsplash.com/photo-1589187155475-54dbb5a3166c', // coloque URLs reais ou locais
  },
  {
    id: 2,
    nome: 'Lanches',
    imagem: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
  },
  {
    id: 3,
    nome: 'Sobremesas',
    imagem: 'https://images.unsplash.com/photo-1542444459-db3cc0bfd2ac',
  },
];

const CardapioScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {categorias.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <View style={styles.conteudo}>
            <Text style={styles.titulo}>{item.nome}</Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagem: {
    width: 100,
    height: 100,
  },
  conteudo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CardapioScreen;
