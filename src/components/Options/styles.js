import styled from 'styled-components/native';

export const Options = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 210px;
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
`;

export const Option = styled.View`
  padding: 10px 20px;
  background-color: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.primary};
`;

export const OptionText = styled.Text`
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  font-size: 14px;
`;
