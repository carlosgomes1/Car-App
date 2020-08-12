import styled from 'styled-components/native';

interface MyProps {
  cancelar: Boolean;
}

export const Container = styled.View`
  padding: 12px 12px 12px 12px;
  flex: 1;
  background-color: #efefef;
`;

export const TitleView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-weight: 300;
  color: #042f59;
`;

export const FormContainer = styled.View`
  flex: 4;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  color: #042f59;
  background-color: #fff;
  padding: 18px 8px 18px 18px;
  border: 1px solid #042f59;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  padding: 14px;
  align-items: center;
  border-radius: 12px;
  border: ${(props: MyProps) =>
    props.cancelar === true ? '1px solid #042f59' : ''};
  background-color: ${(props: MyProps) =>
    props.cancelar === true ? '#fff' : '#042f59'};
`;

export const ButtonText = styled.Text`
  color: ${(props: MyProps) => (props.cancelar === true ? '#042f59' : '#fff')};
  font-weight: 400;
  font-size: 16px;
`;
