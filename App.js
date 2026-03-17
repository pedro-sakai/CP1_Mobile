import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');

  const [dados, setDados] = useState(null);

  useEffect(() => {
    console.log("Aplicativo iniciado!");
  }, []);

  const enviarFormulario = () => {
    const novoCadastro = {
      nome: nome,
      curso: curso,
      disciplina: disciplina,
      descricao: descricao
    };

    setDados(novoCadastro);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cadastre-se</Text>
      <View style={styles.formulario}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Curso</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu curso"
          value={curso}
          onChangeText={setCurso}
        />
        <Text style={styles.label}>Disciplina</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua disciplina"
          value={disciplina}
          onChangeText={setDisciplina}
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva-se brevemente"
          value={descricao}
          onChangeText={setDescricao}
          multiline={true}
          numberOfLines={3}
        />
        <View style={styles.botao}>
          <Button
            title="Enviar Cadastro"
            onPress={enviarFormulario}
          />
        </View>
      </View>

      {dados && (
        <View style={styles.resultado}>
          <Text style={styles.subtitulo}>Dados Cadastrados:</Text>
          <Text style={styles.texto}>Nome: {dados.nome}</Text>
          <Text style={styles.texto}>Curso: {dados.curso}</Text>
          <Text style={styles.texto}>Disciplina: {dados.disciplina}</Text>
          <Text style={styles.texto}>Descrição: {dados.descricao}</Text>
        </View>
      )}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 20,
    textAlign: 'center'
  },

  formulario: {
    marginBottom: 30
  },

  label: {
    fontSize: 22,
    marginTop: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 5
  },

  textArea: {
    height: 80,
    textAlignVertical: 'top'
  },

  botao: {
    marginTop: 20
  },

  resultado: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 10
  },

  texto: {
    fontSize: 18,
    marginBottom: 5
  }

});