import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  background: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.secondary};
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${props =>
    props.color === 'white'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  text-transform: uppercase;
`;
