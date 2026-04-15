import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaskedTextInput } from "react-native-mask-text";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen({ navigation }) {

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

 
  useEffect(() => {
    async function carregarDados() {
      const dados = await AsyncStorage.getItem("usuario");

      if (dados) {
        const usuario = JSON.parse(dados);

        setNome(usuario.nome);
        setCurso(usuario.curso);
        setDisciplina(usuario.disciplina);
        setDescricao(usuario.descricao);
        setTelefone(usuario.telefone);
        setCpf(usuario.cpf);
      }
    }

    carregarDados();
  }, []);

  async function salvarDados() {

    if (
      !nome ||
      !curso ||
      !disciplina ||
      !descricao ||
      !telefone ||
      !cpf
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const usuario = {
      nome,
      curso,
      disciplina,
      descricao,
      telefone,
      cpf
    };

    await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

    Alert.alert("Sucesso", "Dados salvos com sucesso!");

    navigation.navigate("Perfil");

  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Formulário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Curso</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu curso"
        value={curso}
        onChangeText={setCurso}
      />

      <Text style={styles.label}>Disciplina</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Fale sobre você"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Telefone</Text>
      <MaskedTextInput
        style={styles.input}
        mask="(99) 99999-9999"
        placeholder="Digite seu telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />

      <Text style={styles.label}>CPF</Text>
      <MaskedTextInput
        style={styles.input}
        mask="999.999.999-99"
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <Button title="Salvar" onPress={salvarDados}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingHorizontal: 20,
  paddingTop: -30 
  },

  titulo: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10, 
  marginTop: 0 
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 4
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
  
});