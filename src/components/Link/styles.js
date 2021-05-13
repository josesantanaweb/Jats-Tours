import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  background: transparent;
`;

export const Label = styled.Text`
  color: ${props =>
    props.color ? props.theme.colors.white : props.theme.colors.primary};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};
  font-family: 'Roboto-Medium';
  font-size: ${props =>
    props.size === 'small'
      ? '16px'
      : props.size === 'medium'
      ? '18px'
      : props.size === 'large'
      ? '36px'
      : '14px'};
`;
