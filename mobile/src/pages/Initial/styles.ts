import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px 12px 12px 12px;
  flex: 1;
  background-color: #efefef;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 300;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  justify-content: center;
  font-family: 'Roboto_500Medium';
`;

export const Description = styled.Text`
  font-size: 38px;
  font-weight: 300;
`;

export const Button = styled.TouchableOpacity`
  background-color: #042f59;
  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  margin-bottom: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;
