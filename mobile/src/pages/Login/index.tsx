import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Input,
  InputContainer,
  InputWithIcon,
  ButtonText,
  Button,
  ButtonContainer,
  CreateAccount,
} from './styles';

interface Data {
  id: number;
  email: string;
}

const Login = () => {
  const navigate = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNavigateBack() {
    navigate.goBack();
  }

  function handleNavigateToRegister() {
    navigate.navigate('Register');
  }

  async function saveDataOnStorage(data: Data) {
    await AsyncStorage.setItem('@data', JSON.stringify(data));
  }

  async function handleLogin() {
    try {
      const response = await api.post('/session', {
        email,
        password,
      });

      saveDataOnStorage(response.data);

      navigate.navigate('MyTabs');
    } catch (error) {
      alert('Credenciais inválidas');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity style={{ marginTop: 8 }} onPress={handleNavigateBack}>
          <Feather name="arrow-left" size={24} color="#042f59" />
        </TouchableOpacity>

        <InputContainer>
          <FontAwesome name="truck" size={80} color="#042f59" />
        </InputContainer>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <InputContainer>
            <InputWithIcon>
              <Feather name="at-sign" size={24} color="#042f59" />
              <Input
                placeholder="E-mail..."
                value={email}
                onChangeText={(text: String) => setEmail(text)}
              />
            </InputWithIcon>
            <InputWithIcon>
              <Feather name="lock" size={24} color="#042f59" />
              <Input
                placeholder="Senha..."
                secureTextEntry={true}
                value={password}
                onChangeText={(text: String) => setPassword(text)}
              />
            </InputWithIcon>
          </InputContainer>
        </KeyboardAvoidingView>

        <ButtonContainer>
          <Button onPress={handleLogin}>
            <ButtonText> Login </ButtonText>
          </Button>
          <TouchableOpacity onPress={handleNavigateToRegister}>
            <CreateAccount> Não tem uma conta? </CreateAccount>
          </TouchableOpacity>
        </ButtonContainer>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
