import React, { useEffect, useState } from 'react';
import { SafeAreaView, AsyncStorage, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import ItemList from '../../components/ItemList';

import {
  Container,
  ButtonAdd,
  CarsContainer,
  TextButtonAdd,
  Title,
  TitleView,
} from './styles';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  km: number;
  value: number;
  additional: string;
}

const MyCars = () => {
  const navigation = useNavigation();

  const [cars, setCars] = useState<Car[]>([]);
  const [att, setAtt] = useState(false);

  async function loadCars(id: number) {
    try {
      const response = await api.get(`/userCar/${id}`);
      setCars(response.data);
    } catch (error) {
      alert('ID Inválido para buscas');
    }
  }

  function handleAddNewCar() {
    navigation.navigate('CreateCar');
  }

  useEffect(() => {
    setAtt(!att);
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('@data').then((response) => {
      if (response === null) {
        alert('Erro ao carregar dados');
      } else {
        const responseParse = JSON.parse(response);
        loadCars(responseParse.id);
      }
    });
  }, [att]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <CarsContainer showsVerticalScrollIndicator={false}>
          <TitleView>
            <Title> Seus carros </Title>
            <TouchableOpacity onPress={() => setAtt(!att)}>
              <Feather name="refresh-cw" size={24} color="#042f59" />
            </TouchableOpacity>
          </TitleView>
          {cars.map((car) => (
            <TouchableOpacity key={car.id}>
              <ItemList
                brand={car.brand}
                model={car.model}
                value={car.value}
                km={car.km}
                year={car.year}
                additionals={car.additional}
                id={car.id}
              />
            </TouchableOpacity>
          ))}
        </CarsContainer>
        <ButtonAdd onPress={handleAddNewCar}>
          <TextButtonAdd> Adicionar novo carro </TextButtonAdd>
        </ButtonAdd>
      </Container>
    </SafeAreaView>
  );
};

export default MyCars;
