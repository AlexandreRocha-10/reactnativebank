import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Account({nome, idade, selectedValue, valor, student }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cadastro de Conta</Text>

      <Text style={styles.subtitle}>{nome}</Text>
      <Text style={styles.subtitle}>{idade}</Text>
      <Text style={styles.subtitle}>{selectedValue}</Text>

      <Text style={styles.subtitle}>
          Limite: { valor.toFixed(0) }
      </Text>

      <Text style={styles.subtitle}>
      {
      student ? 'Estudante' : 'Não é Estudante'
      }
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#dd7b22',
    fontWeight: 'bold',
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 20,
  },
});