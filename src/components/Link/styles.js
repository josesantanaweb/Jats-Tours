import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  background: transparent;
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: 'Roboto-Medium';
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'medium'
      ? '18px'
      : props.size === 'large'
      ? '36px'
      : '16px'};
`;
