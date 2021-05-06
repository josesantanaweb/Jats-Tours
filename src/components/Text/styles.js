import styled from 'styled-components/native';

export const Text = styled.Text`
  font-family: ${props =>
    props.weight === 'bold' ? 'Roboto-Medium' : 'Roboto-Regular'};
  color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.gray};
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '18px'
      : props.size === 'large'
      ? '36px'
      : '16px'};
`;
