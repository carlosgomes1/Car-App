import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, AsyncStorage } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Input,
  InputWithIcon,
  Title,
  TitleView,
  InputCidade,
  InputContainer,
  InputEstado,
  InputIconCidade,
  InputIconEstado,
  ButtonConfirmar,
  TextButtonConfirmar,
} from './styles';

import api from '../../services/api';

const Options = () => {
  const [data, setData] = useState({
    email: '',
    name: '',
    whatsapp: '',
    uf: '',
    city: '',
  });

  async function loadData(id: number) {
    try {
      const response = await api.get(`/users/${id}`);
      setData(response.data);
    } catch (error) {
      alert('ID Inválido para buscas');
    }
  }

  useEffect(() => {
    try {
      AsyncStorage.getItem('@data').then((response) => {
        if (response === null) {
          alert('Erro ao carregar dados');
        } else {
          const responseParse = JSON.parse(response);
          loadData(responseParse.id);
        }
      });
    } catch (error) {
      alert('Ocorreu um erro, tente novamente mais tarde');
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleView>
          <Title> Seus dados </Title>
        </TitleView>

        <KeyboardAvoidingView behavior="padding" style={{ flex: 4 }}>
          <InputWithIcon>
            <Feather name="at-sign" size={24} color="#042f59" />
            <Input
              placeholder="E-mail..."
              value={data.email}
              onChangeText={() => {}}
              autoCorrect={false}
              keyboardType="email-address"
            />
          </InputWithIcon>
          <InputWithIcon>
            <Feather name="user" size={24} color="#042f59" />
            <Input
              placeholder="Nome completo..."
              value={data.name}
              onChangeText={() => {}}
              autoCapitalize="words"
            />
          </InputWithIcon>
          <InputWithIcon>
            <FontAwesome name="whatsapp" size={24} color="#042f59" />
            <Input
              placeholder="WhatsApp..."
              keyboardType="numeric"
              value={data.whatsapp}
              onChangeText={() => {}}
            />
          </InputWithIcon>

          <InputContainer>
            <InputIconEstado>
              <FontAwesome name="map-marker" size={24} color="#042f59" />
              <InputEstado
                placeholder="UF..."
                value={data.uf}
                onChangeText={() => {}}
              />
            </InputIconEstado>

            <InputIconCidade>
              <FontAwesome name="building" size={24} color="#042f59" />
              <InputCidade
                placeholder="Cidade..."
                value={data.city}
                onChangeText={() => {}}
              />
            </InputIconCidade>
          </InputContainer>
        </KeyboardAvoidingView>
        <ButtonConfirmar>
          <TextButtonConfirmar> Confirmar alterações </TextButtonConfirmar>
        </ButtonConfirmar>
      </Container>
    </SafeAreaView>
  );
};

export default Options;
