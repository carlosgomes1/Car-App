import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 10px;

  margin: 5px 0;

  flex-direction: row;
  justify-content: space-between;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
`;

export const Photo = styled.View`
  width: 40%;
  border-radius: 8px;
`;

export const ContainerInformation = styled.View`
  width: 70%;

  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleCar = styled.Text`
  font-weight: 600;
  font-size: 20px;
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 10px;
  color: #999999;
`;

export const ContainerLabels = styled.View`
  flex-direction: row;
  flex: 1;
  margin: 12px 0;
`;

export const LabelTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
`;

export const BoxLabel = styled.View`
  justify-content: space-between;
  flex: 1;
  align-items: flex-start;
`;

export const AdditionalsContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const Additionals = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;
