import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.white
      : props.theme.colors.black};
`;
