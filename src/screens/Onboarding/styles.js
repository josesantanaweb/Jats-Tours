import styled from 'styled-components/native';
import {windowWidth} from '../../utils/Dimentions';

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`;

export const Next = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Carousel = styled.View`
  align-items: center;
  width: ${windowWidth}px;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-size: 16px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Dots = styled.View`
  flex-direction: row;
  margin-top: 20px;
  position: absolute;
  bottom: 40px;
`;

export const Dot = styled.View`
  width: 7px;
  height: 7px;
  border-radius: 7px;
  margin: 0 5px;
`;
