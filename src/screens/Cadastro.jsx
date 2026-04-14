import { useState, useEffect } from "react";
import { Text, TextInput, Button, StyleSheet, Alert } from "react-native";
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

    navigation.navigate("Perfil", { usuario });
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Formulário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TextInput
        style={styles.input}
        placeholder="Disciplina"
        value={disciplina}
        onChangeText={setDisciplina}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <MaskedTextInput
        style={styles.input}
        mask="(99) 99999-9999"
        placeholder="Telefone"
        value={telefone}
        onChangeText={(text) => setTelefone(text)}
      />

      <MaskedTextInput
        style={styles.input}
        mask="999.999.999-99"
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <Button title="Salvar" onPress={salvarDados} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});