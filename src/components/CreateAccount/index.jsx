import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Account from '../Account';

export default function CreateAccount() {
  const [nome, onChangeNome] = useState('');
  const [idade, onChangeIdade] = useState(null);
  const [selectedValue, setSelectedValue] = useState("Masculino");
  const [valor, setValor] = useState(50);
  const [student, setstudent] = useState(false);
  const [cadastro, setcadastro] = useState(null);

  const onPress = () => {
    setcadastro(
        <Account 
        nome={ nome }
        idade={ idade }
        selectedValue={ selectedValue }
        valor={ valor }
        student={ student }
        />
    );
  }

  const onPressVoltar = () => {
    setcadastro(null);
  }

  return (
    <View>

        {       
            cadastro != null ? cadastro : 

        <View style={styles.container}>
            
            <Text style={styles.title} >Cadastro de Conta</Text>
      
            <View style={styles.inputscontainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNome}
                    placeholder="Qual o sua nome"
                    value={nome}
                    required
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeIdade}
                    value={idade}
                    placeholder="Qual a sua idade"
                    keyboardType="numeric"
                    required
                />
            </View>
     
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
            </Picker>

            <Slider
            style={styles.slider}
            minimumValue={0}
            minimumTrackTintColor="green"
            maximumValue={100}
            maximumTrackTintColor="red"
            onValueChange={ (value) => setValor(value) }
            />
            <Text>Limite: { valor.toFixed(0) }</Text>

            <Switch
            value={student}
            style={styles.switch}
            onValueChange={ (value) => setstudent(value) }
            />

            <Text>
            {
                student ? 'Estudante' : 'Não é Estudante'
            }
            </Text>

            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>

        }

            <View style={styles.buttonarea}>
                <TouchableOpacity style={styles.buttonvoltar} onPress={onPressVoltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>

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
  inputscontainer: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  picker: {
    alignItems: "center",
    height: 60,
    width: 200,
    margin: 12,
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    margin: 12,
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10,
    margin: 12,
  },
  buttonarea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonvoltar: {
    backgroundColor: '#dd7b22',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});