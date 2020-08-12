import React, { useEffect, useState } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Header,
  CarModel,
  CarImage,
  CarImageContainer,
  Details,
  Label,
} from './styles';

interface Params {
  id: number;
}

interface Detail {
  id: number;
  brand: string;
  model: string;
  year: number;
  km: number;
  value: number;
  additional: string;
  user_id: number;
}

const Detail = () => {
  const [detail, setDetails] = useState<Detail>({} as Detail);
  const [owner, setOwner] = useState('');
  const [active, setActive] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`/cars/${routeParams.id}`).then((response) => {
      setDetails(response.data.car);
      setOwner(response.data.name);
    });
  }, []);

  function handleNavigateBack() {
    navigation.navigate('Home');
  }

  function teste() {
    setActive(!active);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Feather name="arrow-left" size={24} color="#042f59" />
          </TouchableOpacity>
          <CarModel>{`${detail.brand} ${detail.model}`}</CarModel>
          <TouchableOpacity onPress={teste}>
            <Feather name="heart" size={24} color={active ? 'red' : 'black'} />
          </TouchableOpacity>
        </Header>
        <CarImageContainer horizontal>
          <CarImage
            source={{
              uri:
                'https://cdn.domtotal.com/img/noticias/2016-08/1052337_273777.jpg',
            }}
          />

          <CarImage
            source={{
              uri:
                'https://www.autossegredos.com.br/wp-content/uploads/2017/05/Fiat-argo-drive-2018-4.jpg',
            }}
          />
        </CarImageContainer>
        <Label> KM Rodados </Label>
        <Details> {detail.km} </Details>
        <Label> Ano </Label>
        <Details> {detail.year} </Details>
        <Label> Valor </Label>
        <Details> R$ {detail.value} </Details>
        <Label> Proprietário </Label>
        <Details> {owner} </Details>
      </Container>
    </SafeAreaView>
  );
};

export default Detail;
