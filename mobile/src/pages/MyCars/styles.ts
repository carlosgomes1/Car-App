import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px 12px 12px 12px;
  flex: 1;
  background-color: #efefef;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #042f59;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.34);
  padding: 14px;

  align-items: center;

  border-radius: 8px;
`;

export const TextButtonAdd = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 18px;
`;

export const TitleView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 16px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-weight: 300;
  color: #042f59;
`;

export const CarsContainer = styled.ScrollView``;
