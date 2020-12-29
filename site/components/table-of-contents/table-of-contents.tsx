import React, {useState} from 'react';
import {Stack, Flow} from 'newskit';
import {StyledTableOfContents, StyledContentsNavItem} from './styled';
import {ContentsNavItemProps} from './types';

export const TableOfContents: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const ContentsNavItem: React.FC<ContentsNavItemProps> = ({
    children,
    href,
    itemKey,
  }) => (
    <StyledContentsNavItem
      href={href as string}
      overrides={{
        stylePreset: 'contentsNavItem',
        typographyPreset: 'utilityButton020',
      }}
      onClick={() => setActiveItem(itemKey)}
      itemKey={itemKey}
      isSelected={activeItem === itemKey}
    >
      {children}
    </StyledContentsNavItem>
  );

  return (
    <StyledTableOfContents>
      <Stack flow={Flow.VerticalLeft}>
        <ContentsNavItem itemKey={0} href="#interactive-demo">
          Interactive Demo
        </ContentsNavItem>
        <ContentsNavItem itemKey={1} href="#anatomy">
          Anatomy
        </ContentsNavItem>
        <ContentsNavItem itemKey={2} href="#variations">
          Variations
        </ContentsNavItem>
        <ContentsNavItem itemKey={3} href="#behaviours">
          Behaviours
        </ContentsNavItem>
        <ContentsNavItem itemKey={4} href="#usage">
          Usage
        </ContentsNavItem>
        <ContentsNavItem itemKey={5} href="#accessibility">
          Accessibility
        </ContentsNavItem>
        <ContentsNavItem itemKey={6} href="#seo">
          SEO
        </ContentsNavItem>
        <ContentsNavItem itemKey={7} href="#props">
          Props
        </ContentsNavItem>
      </Stack>
    </StyledTableOfContents>
  );
};
