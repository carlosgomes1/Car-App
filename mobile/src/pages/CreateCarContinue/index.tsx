import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Button,
  ButtonContainer,
  ButtonText,
  Input,
  Title,
  TitleView,
  FormContainer,
} from './styles';

interface Params {
  brand: string;
  model: string;
  year: number;
}

const CreateCarContinue = () => {
  const [data, setData] = useState({
    value: '',
    km: '',
    additional: '',
  });

  const [userId, setUserId] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    AsyncStorage.getItem('@data').then((response) => {
      if (response === null) {
        alert('Erro ao carregar dados');
      } else {
        const responseParse = JSON.parse(response);
        setUserId(responseParse.id);
      }
    });
  }, []);

  function handleNavigateBack() {
    navigation.goBack();
  }

  async function handleConcluir() {
    const dataOK = {
      brand: routeParams.brand,
      model: routeParams.model,
      year: Number(routeParams.year),
      km: Number(data.km),
      value: Number(data.value),
      additional: data.additional,
    };

    try {
      await api.post('/cars', dataOK, {
        headers: {
          user_id: userId,
        },
      });
      navigation.navigate('MyTabs');
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao enviar os dados, tente novamente mais tarde');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <TitleView>
            <Title>Continuar cadastro</Title>
          </TitleView>
          <FormContainer>
            <Input
              placeholder="Valor do carro"
              keyboardType="numeric"
              value={data.value}
              onChangeText={(text: string) => setData({ ...data, value: text })}
            />
            <Input
              placeholder="KM Rodados"
              keyboardType="numeric"
              value={data.km}
              onChangeText={(text: string) => setData({ ...data, km: text })}
            />
            <Input
              placeholder="Adicionais. Ex: 1.6 16V AUTOMÁTICO"
              value={data.additional}
              onChangeText={(text: string) =>
                setData({ ...data, additional: text })
              }
            />
            <TouchableOpacity />
            <ButtonContainer>
              <Button cancelar={true} onPress={handleNavigateBack}>
                <ButtonText cancelar={true}>Cancelar</ButtonText>
              </Button>
              <Button cancelar={false} onPress={handleConcluir}>
                <ButtonText cancelar={false}>Continuar</ButtonText>
              </Button>
            </ButtonContainer>
          </FormContainer>
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

export default CreateCarContinue;
