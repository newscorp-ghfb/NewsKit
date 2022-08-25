import React from 'react';
import {Block, Cell, Grid, Image, ImageProps} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import {SectionIntroduction} from '../../components/section-introduction';
import {Separator} from '../../components/separator';
import {StyledSection} from './styled';
import {ComponentPageCell} from '../../components/layout-cells';

export type CommonSectionProps = {
  children?: React.ReactNode;
  title: string;
  introduction?: React.ReactNode;
  id: string;
  toc?: string;
  hideSeparator?: boolean;
  lastItem?: boolean;
  media?: ImageProps | JSX.Element | React.ComponentType;
};

export const CommonSection: React.FC<CommonSectionProps> = ({
  children,
  title,
  introduction,
  id,
  toc,
  media,
  hideSeparator,
  lastItem,
}) => (
  <>
    <Cell xs={12}>
      <StyledSection id={id} data-toc-indexed={toc || title}>
        <Grid xsMargin="space000" xsRowGutter="space000">
          <SectionIntroduction
            subHeadingSpaceStack={
              children || media ? {xs: 'space080', lg: 'space100'} : 'space000'
            }
            title={title}
            lastItem={lastItem}
          >
            {introduction}
          </SectionIntroduction>
          {media && (
            <ComponentPageCell>
              <Block stylePreset="blockRoundedMedium">
                {renderIfReactComponent(media) || (
                  <Image {...(media as ImageProps)} />
                )}
              </Block>
            </ComponentPageCell>
          )}
          {children}
        </Grid>
      </StyledSection>
    </Cell>
    {!hideSeparator && (
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
    )}
  </>
);
