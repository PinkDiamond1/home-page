import React from 'react';
import { FEATURES, LPS, ZERO_GAS } from '../../constants/features';
import { ColumnContainer, FlexContainer } from '../shared/Container';
import Label from '../shared/Label';
import FeatureCard from './FeatureCard';

const FeatureSection = () => {
  return (
    <ColumnContainer className="relative w-100 align-fs" gap={100} style={{ marginTop: 170, flexWrap: 'wrap', padding: '0 80px' }}>
      <FlexContainer className="justify-sb tablet-column">
        <Label className="align-fs" fontFamily="syncopate" size="big">
          unique
          <br />
          features
        </Label>
        <Label
          className="align-fs"
          color="light-blue"
          size="small"
          desktopStyle={{ marginLeft: 100, marginTop: 16, marginRight: 100, maxWidth: 584 }}
          tabletStyle={{ marginTop: 35 }}
          mobileStyle={{ marginTop: 35 }}
        >
          Safe DeFi begins with our Gas free DEX.
          <br />
          Gas will always stay free because the Kadena blockchain scales horizontally.
          <br /> <br />
          The Kaddex DAO will play a large role in how Kaddex operates, controlling the parameters for individual pools. The DAO will have a strong
          focus on ecosystem development, working to help growing the entire Kadena blockchain.
        </Label>

        <FeatureCard feature={ZERO_GAS} />
        <FeatureCard feature={LPS} />
      </FlexContainer>

      <FlexContainer className="justify-sb">
        {FEATURES.slice(2).map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </FlexContainer>
    </ColumnContainer>
  );
};

export default FeatureSection;
