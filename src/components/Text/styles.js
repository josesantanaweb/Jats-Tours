import styled from 'styled-components/native';

export const Text = styled.Text`
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
  font-family: ${props =>
    props.weight === 'bold' ? 'Roboto-Medium' : 'Roboto-Regular'};
  color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.gray};
  text-transform: ${props =>
    props.uppercase === 'uppercase' ? 'uppercase' : 'capitalize'};
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '18px'
      : props.size === 'large'
      ? '24px'
      : props.size === 'xlarge'
      ? '36px'
      : '16px'};
`;
