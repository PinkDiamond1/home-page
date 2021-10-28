import React from 'react';
import styled from 'styled-components/macro';
import './MainContainer.css';
import DesktopRoadmap from '../components/roadmap/DesktopRoadmap';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  /* overflow: auto; */
`;

const RoadmapContainer = styled.div`
  display: flex;
  margin-top: 10%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 6%;
  width: 100%;
`;

const Title = styled.span`
  text-align: center;
  font: normal normal bold 56px/64px montserrat-bold;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal bold 28px montserrat-bold;
  }
`;

const RoadmapItemLeft = styled.p`
  text-align: right;
  margin-right: 40px;
  font: normal normal normal 16px/24px montserrat-regular;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 13px montserrat-regular;
    margin-left: 40px;
    text-align: left;
  }
`;
const RoadmapItemRight = styled.p`
  text-align: left;
  margin-left: 40px;
  font: normal normal normal 16px/24px montserrat-regular;

  @media (max-width: ${({ theme: { mediaQueries } }) =>
      `${mediaQueries.mobilePixel + 1}px`}) {
    font: normal normal normal 13px montserrat-regular;
  }
`;

const RoadmapSection = () => {
  return (
    <Container id='roadmap'>
      <RoadmapContainer className='mobile-none'>
        <Title style={{ marginBottom: '40px' }}>Kaddex Roadmap</Title>
        <DesktopRoadmap />
      </RoadmapContainer>

      <RoadmapContainer className='desktop-none'>
        <Title style={{ marginBottom: '40px', marginTop: '20%' }}>
          Roadmap 2021
        </Title>
        <div class='timeline'>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft>Kaddex Beta on Mainnet</RoadmapItemLeft>
          </div>
          <div class='roadmap_container_completed right'>
            <RoadmapItemRight>1M TVL</RoadmapItemRight>
          </div>
          <div class='roadmap_container_completed left'>
            <RoadmapItemLeft>Tokenomics Deep Dive</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight>Kaddex Website Refresh</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft>Lite Paper</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight>
              Native and Bridged ERC-20 Token Pairs
            </RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft>Kaddex Full Launch on Mainnet</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight>Institutional Collaboration</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft>DEX Whitepaper</RoadmapItemLeft>
          </div>
          <div class='roadmap_container right'>
            <RoadmapItemRight>ERC-20 Public Sale</RoadmapItemRight>
          </div>
          <div class='roadmap_container left'>
            <RoadmapItemLeft>Transition to a DAO</RoadmapItemLeft>
          </div>
        </div>
      </RoadmapContainer>
    </Container>
  );
};

export default RoadmapSection;
