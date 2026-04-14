import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Perfil() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregar() {
      const dados = await AsyncStorage.getItem("usuario");
      if (dados) setUsuario(JSON.parse(dados));
    }

    carregar();
  }, []);

  if (!usuario) return <Text>Sem dados</Text>;

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Perfil</Text>

      <Image
        source={require('./assets/icon.png')}
        style={styles.foto}
      />

      <Text style={styles.texto}>Nome: {usuario.nome}</Text>
      <Text style={styles.texto}>RM: 565956</Text>

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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20
  },

  texto: {
    fontSize: 18
  }
});