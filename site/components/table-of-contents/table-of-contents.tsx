import React, {useCallback, useEffect, useState} from 'react';
import {Stack, Flow} from 'newskit';
import {StyledTableOfContents, StyledContentsNavItem} from './styled';
import {ContentsNavItemProps} from './types';
import {contentsObserver} from './contents-observer';

export const TableOfContents: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>();
  const [contentsInfo, setContentsInfo] = useState<
    {id: string; title: string}[]
  >();

  useEffect(() => {
    if (!contentsInfo) {
      const data: {id: string; title: string}[] = [];

      document.querySelectorAll('section[data-toc-indexed').forEach(element => {
        const title = element.getAttribute('data-toc-indexed');
        if (title) {
          data.push({id: element.id, title});
        }
      });

      setContentsInfo(data);
    }

    if (contentsInfo) {
      return contentsObserver((id: string) => {
        const activeElement =
          contentsInfo && contentsInfo.findIndex(info => info.id === id);

        setActiveItem(activeElement);
      }, contentsInfo);
    }
  }, [contentsInfo]);

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
      isSelected={(activeItem || 0) === itemKey}
    >
      {children}
    </StyledContentsNavItem>
  );

  return (
    <StyledTableOfContents>
      <Stack flow={Flow.VerticalLeft}>
        {contentsInfo &&
          contentsInfo.map((info, index) => (
            <ContentsNavItem itemKey={index} href={`#${info.id}`}>
              {info.title}
            </ContentsNavItem>
          ))}
      </Stack>
    </StyledTableOfContents>
  );
};
