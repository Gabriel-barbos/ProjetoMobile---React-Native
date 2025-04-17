// CardapioScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categorias = [
  {
    id: 1,
    nome: 'Bebidas',
    descricao: 'Refrescos, sucos naturais e refrigerantes geladinhos.',
    imagem: require('../assets/drink.png'),
  },
  {
    id: 2,
    nome: 'Lanches',
    descricao: 'Hambúrgueres, sanduíches artesanais e porções.',
    imagem: require('../assets/lanches.webp'),
  },
  {
    id: 3,
    nome: 'Sobremesas',
    descricao: 'Doces, bolos e sobremesas para adoçar seu dia.',
    imagem: require('../assets/doce-icon.jpeg'),
  },
];

const CardapioScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem do restaurante */}
      <View style={styles.containerImagem}>
        <Image
          source={require('../assets/capa.png')}
          style={styles.imagemRestaurante}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.tituloPrincipal}>Conheça nosso cardápio</Text>

      {/* Lista de categorias */}
      {categorias.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={item.imagem} style={styles.imagemCategoria} />
          <View style={styles.conteudo}>
            <View style={{ flex: 1 }}>
              <Text style={styles.tituloCategoria}>{item.nome}</Text>
              <Text style={styles.descricaoCategoria}>{item.descricao}</Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate('Categoria', { categoriaNome: item.nome })}
            >
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
    backgroundColor: '#fff',
    padding: 16,
  },
  containerImagem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemRestaurante: {
    width: 200,
    height: 200,
    borderRadius: 20,
    backgroundColor: '#d9d9d9',
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  imagemCategoria: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  conteudo: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloCategoria: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descricaoCategoria: {
    fontSize: 14,
    color: '#555',
    marginRight: 8,
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
