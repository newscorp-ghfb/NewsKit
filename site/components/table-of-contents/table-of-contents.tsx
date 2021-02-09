import React, {useEffect, useState} from 'react';
import {Stack, Flow} from 'newskit';
import {StyledTableOfContents, StyledContentsNavItem} from './styled';
import {ContentsNavItemProps} from './types';
import {contentsObserver} from './contents-observer';

export const TableOfContents: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>();
  const [contentsInfo, setContentsInfo] = useState<
    {id: string; title: string}[]
  >();

  const getContentsData = () => {
    const data: {id: string; title: string}[] = [];

    document.querySelectorAll('section[data-toc-indexed').forEach(element => {
      const title = element.getAttribute('data-toc-indexed');
      if (title) {
        data.push({id: element.id, title});
      }
    });
    setContentsInfo(data);
  };

  const handleIntersection = (id: string) => {
    const activeElement =
      contentsInfo && contentsInfo.findIndex(info => info.id === id);

    if (activeElement !== activeItem) {
      setActiveItem(activeElement);
    }
  };

  useEffect(() => {
    if (!contentsInfo) getContentsData();
    console.log(contentsInfo);
    if (!activeItem && contentsInfo)
      contentsObserver(handleIntersection, contentsInfo);

    // TODO NOT working
    return () => {
      document.removeEventListener('scroll', () => {
        console.log('removing listener');
        handleIntersection;
      });
    };
    // IT does not run the return on unmount. Is it because runs again only when contentsInfo
    // changes?
    // I tried to add document.location.href but tells me it is undefined... Are we hydrating?

    // ALSO.. eslint keeps adding "[activeItem, contentsInfo, handleIntersection]"
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
