import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash() {

  useEffect(() => {

    const tiempo = setTimeout(() => {
      router.replace('/(drawer)/inicio');
    }, 5000);

    return () => clearTimeout(tiempo);

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        APLICACIONES MÓVILES
      </Text>

      <Text style={styles.texto}>
        Cargando aplicación...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
  },

  titulo:{
    fontSize:30,
    color:'white',
    fontWeight:'bold',
  },

  texto:{
    fontSize:18,
    color:'white',
    marginTop:20,
  }

});