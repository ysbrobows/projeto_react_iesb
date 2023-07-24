import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const exibirValores = () => {
    const mensagem = `Email: ${email}\nNome: ${nome}\nTelefone: ${telefone}\nEndereço: ${endereco}`;
    alert(mensagem, "Sucesso");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        value={telefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(text) => setEndereco(text)}
        value={endereco}
      />
      <TouchableOpacity style={styles.button} onPress={exibirValores}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    width: '80%',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
