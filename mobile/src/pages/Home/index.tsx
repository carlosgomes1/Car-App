import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, List } from './styles';

import ItemList from '../../components/ItemList';

import api from '../../services/api';

interface Item {
  id: Number;
  brand: string;
  model: string;
  year: Number;
  km: Number;
  value: Number;
  additional: string;
}

const Home = () => {
  const navigation = useNavigation();

  const [cars, setCars] = useState<Item[]>([]);

  useEffect(() => {
    api.get('/cars').then((response) => {
      setCars(response.data);
    });
  }, []);

  function navigateToDetail(id: number) {
    navigation.navigate('Detail', {
      id,
    });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <List
          data={cars}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigateToDetail(item.id)}>
              <ItemList
                brand={item.brand}
                model={item.model}
                value={item.value}
                km={item.km}
                year={item.year}
                additionals={item.additional}
                id={item.id}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Home;
