import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px 12px 12px 12px;
  flex: 1;
  background-color: #e1e1e1;
`;

export const InputContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
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

export const Button = styled.TouchableOpacity`
  background-color: #042f59;
  padding: 14px;

  align-items: center;

  border-radius: 16px;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 18px;
`;

export const CreateAccount = styled.Text`
  font-size: 16px;
  color: #999999;

  text-align: center;
`;
