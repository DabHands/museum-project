/* eslint-disable react/prop-types */
import React from 'react';
import * as s from './AppBar.theme';

type AppBarProps = {
  homeHref: string;
  aboutHref: string;
  homeTitle: string;
  aboutTitle: string;
};

export const AppBar = ({homeHref, aboutHref, homeTitle, aboutTitle} : AppBarProps) => {
  return (
  <s.AppBarBody>

    <s.AppBarSection>
      <s.AppBarHrefLink href={homeHref}>{homeTitle}</s.AppBarHrefLink>
    </s.AppBarSection>

    <s.AppBarSection>
      <span>|</span>
    </s.AppBarSection>

    <s.AppBarSection>
      <s.AppBarHrefLink href={aboutHref}>{aboutTitle}</s.AppBarHrefLink>
    </s.AppBarSection>

  </s.AppBarBody>
  );
};
