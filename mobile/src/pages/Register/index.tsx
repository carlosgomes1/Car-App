import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Form } from '@unform/mobile';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Mínimo 6 carácteres'),
});

import {
  Container,
  Title,
  TitleView,
  Input,
  InputWithIcon,
  ButtonCancelar,
  ButtonCadastrar,
  ButtonContainer,
  ButtonTextCadastrar,
  ButtonTextCancelar,
} from './styles';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateToRegisterContinue() {
    navigation.navigate('RegisterContinue', {
      email,
      password,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleView>
          <Title> Cadastre-se </Title>
        </TitleView>

        <KeyboardAvoidingView style={{ flex: 3 }} behavior="padding">
          <InputWithIcon>
            <Feather name="at-sign" size={24} color="#042f59" />
            <Input
              placeholder="E-mail..."
              value={email}
              onChangeText={(text: String) => setEmail(text)}
              autoCorrect={false}
            />
          </InputWithIcon>

          <InputWithIcon>
            <Feather name="lock" size={24} color="#042f59" />
            <Input
              placeholder="Senha..."
              secureTextEntry={true}
              value={password}
              onChangeText={(text: String) => setPassword(text)}
              autoCorrect={false}
            />
          </InputWithIcon>

          <ButtonContainer>
            <ButtonCancelar onPress={handleNavigateBack}>
              <ButtonTextCancelar> Cancelar </ButtonTextCancelar>
            </ButtonCancelar>
            <ButtonCadastrar onPress={handleNavigateToRegisterContinue}>
              <ButtonTextCadastrar> Continuar </ButtonTextCadastrar>
            </ButtonCadastrar>
          </ButtonContainer>
        </KeyboardAvoidingView>

        <FontAwesome
          name="truck"
          size={24}
          color="#042f59"
          style={{ textAlign: 'center' }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Register;
