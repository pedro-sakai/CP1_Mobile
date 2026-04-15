import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Perfil() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarDados() {
      const dados = await AsyncStorage.getItem("usuario");

      if (dados) {
        setUsuario(JSON.parse(dados));
      }
    }

    carregarDados();
  }, []);

  if (!usuario) {
    return <Text>Nenhum dado encontrado</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../img/fotoperfil.jpg')}
        style={styles.foto}
      />

      <Text>Nome: Pedro Sakai</Text>
      <Text>RM: 565956</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  titulo: {
    fontSize: 26,
    marginBottom: 20
  },

  foto: {
    width: 170,
    height: 170,
    borderRadius: 70,
    marginBottom: 20
  },

  texto: {
    fontSize: 25
  }
});