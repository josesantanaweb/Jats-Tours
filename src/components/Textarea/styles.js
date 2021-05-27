import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-bottom: ${props => (props.only ? '0px' : '20px')};
`;

export const TextArea = styled.TextInput`
  font-size: 16px;
  background-color: ${props => props.theme.colors.graylight};
  font-family: 'Roboto-Regular';
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  padding-left: 15px;
  padding-right: 15px;
  height: 130px;
`;
