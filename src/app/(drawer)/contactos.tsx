import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Contactos = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombreEnviado, setNombreEnviado] = useState('');
  const [correoEnviado, setCorreoEnviado] = useState('');

  const enviar = () => {
    setNombreEnviado(nombre);
    setCorreoEnviado(correo);
  };

  const limpiar = () => {
    setNombre('');
    setCorreo('');
    setNombreEnviado('');
    setCorreoEnviado('');
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Contactos</Text>

        <Image
          source={require('@/assets/images/banner03.png')}
          style={styles.banner}
        />

        <View style={styles.formulario}>

          <TextInput
            placeholder="Escribe tu Nombre"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            placeholder="Escribe tu Correo"
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={enviar}
          >
            <Text style={styles.textoBoton}>ENVIAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botonLimpiar}
            onPress={limpiar}
          >
            <Text style={styles.textoBoton}>LIMPIAR</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.resultado}>
          Nombre: {nombreEnviado}
        </Text>

        <Text style={styles.resultado}>
          Correo: {correoEnviado}
        </Text>

        <View style={styles.redes}>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com')}
          >
            <FontAwesome
              name="facebook-square"
              size={45}
              color="#1877F2"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com')}
          >
            <FontAwesome
              name="instagram"
              size={45}
              color="#E1306C"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.youtube.com')}
          >
            <FontAwesome
              name="youtube-play"
              size={45}
              color="red"
            />
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
};

export default Contactos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  banner: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  formulario: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
  },

  input: {
    backgroundColor: 'white',
    height: 40,
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  boton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  botonLimpiar: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  textoBoton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },

  resultado: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },

  redes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 20,
  },
});
