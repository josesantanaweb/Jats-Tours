import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.black
      : props.theme.colors.white};
`;
