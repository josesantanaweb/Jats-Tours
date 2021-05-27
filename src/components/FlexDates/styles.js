import styled from 'styled-components/native';

export const FlexDates = styled.View`
  width: 100%;
  padding: 10px 20px;
  flex-direction: row;
`;

export const Checkbox = styled.TouchableHighlight`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.theme.colors.primary};
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const CheckActive = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
`;
