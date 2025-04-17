// CategoriaScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const produtosPorCategoria = {
  Bebidas: [
    {
      id: 1,
      nome: 'Coca-Cola',
      descricao: 'Refrigerante gelado para refrescar seu dia.',
      preco: 'R$ 5,00',
      imagem: require('../assets/drink.png'),
    },
    {
      id: 2,
      nome: 'Suco de Laranja',
      descricao: 'Suco natural e refrescante.',
      preco: 'R$ 6,00',
      imagem: require('../assets/doces.webp'),
    },
  ],
  Lanches: [
    {
      id: 1,
      nome: 'Hambúrguer',
      descricao: 'Hambúrguer artesanal com carne 100% bovina.',
      preco: 'R$ 20,00',
      imagem: require('../assets/lanches.webp'),
    },
    {
      id: 2,
      nome: 'Sanduíche de Frango',
      descricao: 'Frango grelhado com molho especial.',
      preco: 'R$ 18,00',
      imagem: require('../assets/drink.png'),
    },
  ],
  Sobremesas: [
    {
      id: 1,
      nome: 'Bolo de Chocolate',
      descricao: 'Bolo caseiro de chocolate com cobertura cremosa.',
      preco: 'R$ 12,00',
      imagem: require('../assets/drink.png'),
    },
    {
      id: 2,
      nome: 'Pudim',
      descricao: 'Pudim cremoso com calda de caramelo.',
      preco: 'R$ 8,00',
      imagem: require('../assets/drink.png'),
    },
  ],
};

const Foods = ({ route }) => {
  const { categoriaNome } = route.params; // Recebe o nome da categoria como parâmetro
  const produtos = produtosPorCategoria[categoriaNome]; // Filtra os produtos pela categoria

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{categoriaNome}</Text>

      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagem} style={styles.imagemAlimento} />
          <View style={styles.conteudo}>
            <Text style={styles.nomeAlimento}>{item.nome}</Text>
            <Text style={styles.descricaoAlimento}>{item.descricao}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
    elevation: 2,
  },
  imagemAlimento: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  conteudo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  nomeAlimento: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoAlimento: {
    fontSize: 14,
    color: '#555',
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default Foods;
