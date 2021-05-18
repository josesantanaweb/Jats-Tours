import styled from 'styled-components/native';

export const ClassModal = styled.View``;

export const Title = styled.View`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.graylight};
`;

export const Option = styled.TouchableHighlight`
  padding: 15px 0;
`;
