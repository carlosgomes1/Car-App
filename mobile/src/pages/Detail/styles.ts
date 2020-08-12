import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 14px 12px 12px 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarModel = styled.Text`
  font-size: 20px;
  font-weight: 400;
`;

export const CarImageContainer = styled.ScrollView`
  height: 10%;
  border: 1px solid blue;
  margin: 16px 0;
`;

export const CarImage = styled.Image`
  width: 80%;
  height: 100%;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333333;
  font-weight: 500;
`;

export const Details = styled.Text`
  font-size: 24px;
  color: #6c6c80;
  margin: 4px 0 16px 0;
`;
