import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  font-family: 'Roboto-Medium';
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  padding-left: 15px;
  padding-right: 15px;
`;
export const Label = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Medium';
  margin-bottom: 10px;
  color: ${props => props.theme.colors.gray};
`;
