import styled from 'styled-components/native';

export const Top = styled.View`
  align-items: center;
  flex: 3;
  position: relative;
`;

export const TopInner = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Cover = styled.Image`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`;

export const LogoutContainer = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Logout = styled.Image`
  width: 20px;
`;

export const Logo = styled.Image`
  width: 117px;
  height: 40px;
  margin-bottom: 20px;
`;

export const Bottom = styled.View`
  background-color: ${props => props.theme.colors.white};
  flex: 1;
  justify-content: space-between;
`;

export const BottomInner = styled.View`
  justify-content: space-between;
  align-items: flex-start;
`;

export const BottomContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.graylight};
`;

export const Footer = styled.View`
  padding: 20px;
  height: 90px;
`;
