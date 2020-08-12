import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import {
  Container,
  TitleContainer,
  Title,
  Description,
  DescriptionContainer,
  Button,
  ButtonText,
} from './styles';

const Initial = () => {
  const navigation = useNavigation();

  function handleNavigationToLogin() {
    navigation.navigate('Login');
  }

  function handleNavigationToHome() {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TitleContainer>
          <FontAwesome name="truck" size={56} color="#042f59" />
          <Title> Bem-vindo </Title>
        </TitleContainer>

        <DescriptionContainer>
          <Description>
            Anuncie seu carro aqui para milhares de usuários.
          </Description>
          <Description>Sem taxas e sem custos.</Description>
        </DescriptionContainer>

        <View>
          <Button onPress={handleNavigationToHome}>
            <ButtonText> Ver carros </ButtonText>
            <Feather name="arrow-right" size={24} color="white" />
          </Button>
          <Button onPress={handleNavigationToLogin}>
            <ButtonText> Anunciar carro </ButtonText>
            <Feather name="arrow-right" size={24} color="white" />
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Initial;
