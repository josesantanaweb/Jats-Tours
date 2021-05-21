import styled from 'styled-components/native';

export const ClassModal = styled.View``;

export const Title = styled.View`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.graylight};
`;

export const Option = styled.TouchableHighlight`
  padding: 10px 0;
  margin-bottom: ${props => (props.last ? '20px' : '0')};
`;
