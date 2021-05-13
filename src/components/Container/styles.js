import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.white};
`;
