import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Title,
  TitleView,
  Input,
  FormContainer,
  Button,
  ButtonContainer,
  ButtonText,
} from './styles';

const CreateCar = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    brand: '',
    model: '',
    year: '',
  });

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleContinue() {
    navigation.navigate('CreateCarContinue', {
      brand: data.brand,
      model: data.model,
      year: data.year,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <TitleView>
            <Title>Cadastrar novo carro</Title>
          </TitleView>
          <FormContainer>
            <Input
              placeholder="Marca do carro"
              value={data.brand}
              onChangeText={(text: string) => setData({ ...data, brand: text })}
            />
            <Input
              placeholder="Modelo do carro"
              value={data.model}
              onChangeText={(text: string) => setData({ ...data, model: text })}
            />
            <Input
              placeholder="Ano do carro"
              keyboardType="numeric"
              value={data.year}
              onChangeText={(text: string) => setData({ ...data, year: text })}
            />
            <TouchableOpacity />
            <ButtonContainer>
              <Button cancelar={true} onPress={handleNavigateBack}>
                <ButtonText cancelar={true}>Cancelar</ButtonText>
              </Button>
              <Button cancelar={false} onPress={handleContinue}>
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

export default CreateCar;
