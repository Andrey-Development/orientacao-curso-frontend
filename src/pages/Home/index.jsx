// HOME/index.jsx

import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import { useState } from 'react';

function Home () {
  const [nome, setNome] = useState('Andrey Nunes');
  const [email, setEmail] = useState('nandreyout@gmail.com');
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate("About", { nome: nome, email: email })
  }

    return (
        <View style={styles.container}>
        <Text>Home</Text>
        <Button title='Ir para About' onPress={ handlePress } />
      </View>
    )
}

export default Home;