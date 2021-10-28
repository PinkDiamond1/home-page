import React from 'react';
import styled from 'styled-components/macro';
import Wrapper from '../../shared/Wrapper';
import CustomParticles from './CustomParticles';
import DesktopHeader from './header/DesktopHeader';
import { ReactComponent as Stripes } from '../../assets/images/shared/stripes.svg';

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

// const WrapperContainer = styled(Wrapper)`
//   height: 100vh;
//   width: 100%;
//   padding: 0 5em;
//   @media (max-width: ${({ theme: { mediaQueries } }) =>
//       `${mediaQueries.mobilePixel + 1}px`}) {
//     padding: 0 1.5em;
//   }
// `;

const MainContent = styled.div`
  height: 100%;
  width: 100%;
  /* margin-top: 10%; */
  /* height: ${({ theme: { header } }) => `calc(100% - ${header.height}px)`};
  & > div:first-child {
    height: ${({ theme: { header } }) => `calc(100% - ${header.height}px)`};
  } */
`;

const StripesContainer = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  line-height: 0;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <MainContainer id='main-container'>
      <CustomParticles />
      <DesktopHeader />
      <MainContent>{children}</MainContent>
      <StripesContainer>
        <Stripes />
      </StripesContainer>
    </MainContainer>
  );
};

export default Layout;
