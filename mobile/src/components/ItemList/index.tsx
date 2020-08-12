import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  ContainerInformation,
  Photo,
  TitleCar,
  ContainerLabels,
  Label,
  LabelTitle,
  BoxLabel,
  Additionals,
  AdditionalsContainer,
} from './styles';

interface Props {
  id: number;
  brand: string;
  model: string;
  value: number;
  km: number;
  additionals: string;
  year: number;
}

const ItemList: React.FC<Props> = (props) => {
  return (
    <Container>
      <ContainerInformation>
        <TitleCar>{`${props.brand} ${props.model}`}</TitleCar>
        <ContainerLabels>
          <BoxLabel>
            <Label> KM Rodados </Label>
            <LabelTitle> {props.km} </LabelTitle>
          </BoxLabel>
          <BoxLabel>
            <Label> Ano </Label>
            <LabelTitle> {props.year} </LabelTitle>
          </BoxLabel>

          <BoxLabel>
            <Label> Preço </Label>
            <LabelTitle> {`R$ ${props.value}`} </LabelTitle>
          </BoxLabel>
        </ContainerLabels>
        <AdditionalsContainer>
          <Additionals> {props.additionals} </Additionals>
        </AdditionalsContainer>
      </ContainerInformation>
      <Photo>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri:
              'https://www.autossegredos.com.br/wp-content/uploads/2017/05/Fiat-argo-drive-2018-4.jpg',
          }}
        />
      </Photo>
    </Container>
  );
};

export default ItemList;
