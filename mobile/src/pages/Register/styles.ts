import styled from 'styled-components/native';

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

export const InputWithIcon = styled.View`
  border: 1px solid #042f59;
  border-radius: 16px;
  padding: 16px;

  margin: 6px 0px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: #042f59;
  flex: 1;
  padding-left: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputEstado = styled.TextInput`
  font-size: 16px;
  color: #042f59;
  flex: 1;

  padding-left: 10px;
`;

export const InputCidade = styled.TextInput`
  font-size: 16px;
  color: #042f59;
  flex: 1;

  padding-left: 10px;
`;

export const InputIconEstado = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #042f59;
  border-radius: 16px;

  padding: 16px;
  margin: 6px 6px 6px 0;

  flex: 1;
`;

export const InputIconCidade = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #042f59;
  border-radius: 16px;

  padding: 16px;
  margin: 6px 0px;

  flex: 3;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 16px;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
  width: 48%;
  background-color: #042f59;
  padding: 14px;

  align-items: center;

  border-radius: 12px;
`;

export const ButtonTextCadastrar = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 16px;
`;

export const ButtonCancelar = styled.TouchableOpacity`
  width: 48%;
  background-color: transparent;

  border: 1px solid #042f59;

  padding: 14px;
  align-items: center;
  border-radius: 12px;
`;

export const ButtonTextCancelar = styled.Text`
  color: #042f59;
  font-weight: 400;
  font-size: 16px;
`;
