import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  background: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  height: 50px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
`;
