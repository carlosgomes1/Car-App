import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Title,
  TitleView,
  Input,
  InputCidade,
  InputContainer,
  InputEstado,
  InputIconCidade,
  InputWithIcon,
  InputIconEstado,
  Button,
  ButtonContainer,
  ButtonText,
} from './styles';

import api from '../../services/api';

interface Params {
  email: string;
  password: string;
}

const RegisterContinue = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  function handleNavigateBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setEmail(routeParams.email);
    setPassword(routeParams.password);
  }, []);

  function handleCreateUser() {
    api.post('/users', {
      name,
      password,
      whatsapp,
      email,
      uf,
      city,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity style={{ marginTop: 8 }} onPress={handleNavigateBack}>
          <Feather name="arrow-left" size={24} color="#042f59" />
        </TouchableOpacity>
        <TitleView>
          <Title>Continuar cadastro</Title>
        </TitleView>
        <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding">
          <InputWithIcon>
            <Feather name="user" size={24} color="#042f59" />
            <Input
              placeholder="Nome completo..."
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </InputWithIcon>

          <InputWithIcon>
            <FontAwesome name="whatsapp" size={24} color="#042f59" />
            <Input
              placeholder="WhatsApp..."
              keyboardType="numeric"
              value={whatsapp}
              onChangeText={(text) => setWhatsapp(text)}
            />
          </InputWithIcon>

          <InputContainer>
            <InputIconEstado>
              <FontAwesome name="map-marker" size={24} color="#042f59" />
              <InputEstado
                placeholder="UF..."
                value={uf}
                onChangeText={(text) => setUf(text)}
              />
            </InputIconEstado>

            <InputIconCidade>
              <FontAwesome name="building" size={24} color="#042f59" />
              <InputCidade
                placeholder="Cidade..."
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </InputIconCidade>
          </InputContainer>
          <ButtonContainer>
            <Button onPress={handleCreateUser}>
              <ButtonText> Cadastrar </ButtonText>
            </Button>
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

export default RegisterContinue;
