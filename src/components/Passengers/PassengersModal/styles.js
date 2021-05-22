import styled from 'styled-components/native';

export const PassengersModal = styled.View``;

export const Title = styled.View`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.graylight};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 10px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Control = styled.TouchableOpacity`
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;
