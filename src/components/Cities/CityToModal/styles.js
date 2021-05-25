import styled from 'styled-components/native';

export const CityToModal = styled.View`
  background-color: white;
  justify-content: space-between;
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${props => props.theme.colors.primary};
  padding: 40px 20px 20px 20px;
`;

export const Items = styled.ScrollView`
  height: 70%;
`;

export const Iata = styled.View`
  width: 50px;
  padding: 5px 5px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.graylight};
`;

export const IataText = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-family: 'Roboto-Medium';
`;

export const Item = styled.TouchableOpacity`
  padding: 15px 20px;
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.graylight};
  background-color: ${props =>
    props.active ? props.theme.colors.primary : 'white'};
`;

export const Footer = styled.View`
  padding: 20px;
`;
