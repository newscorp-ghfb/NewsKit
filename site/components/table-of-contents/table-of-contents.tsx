import React, {useEffect, useState} from 'react';
import {Stack} from 'newskit';
import {StyledTableOfContents, StyledContentsNavItem} from './styled';
import {ContentsNavItemProps} from './types';
import {contentsObserver} from './contents-observer';
// import {useCalculatePosition} from './use-calculate-position';

export const TableOfContents: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>();
  const [contentsInfo, setContentsInfo] = useState<
    {id: string; title: string; element: HTMLElement}[]
  >();

  const getContentInfo = () => {
    const data: {id: string; title: string; element: HTMLElement}[] = [];

    document.querySelectorAll('[data-toc-indexed]').forEach(element => {
      const title = element.getAttribute('data-toc-indexed');
      if (title) {
        /* @ts-ignore next-line */
        data.push({id: element.id, title, element});
      }
    });
    setContentsInfo(data);
  };

  const setNewActiveElement = (id: string) => {
    const activeElement =
      contentsInfo && contentsInfo.findIndex(info => info.id === id);

    setActiveItem(activeElement);
  };

  // const {direction, size, min, max} = useCalculatePosition();

  useEffect(() => {
    if (!contentsInfo) {
      getContentInfo();
    }
    if (contentsInfo) {
      return contentsObserver(setNewActiveElement, contentsInfo);
    }
    return undefined;
  }, [contentsInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  const ContentsNavItem: React.FC<ContentsNavItemProps> = ({
    children,
    href,
    itemKey,
  }) => (
    <StyledContentsNavItem
      href={href as string}
      overrides={{
        stylePreset: 'contentsNavItem',
        typographyPreset: 'utilityButton010',
      }}
      itemKey={itemKey}
      isSelected={(activeItem || 0) === itemKey}
      data-selected={(activeItem || 0) === itemKey}
      onClick={e => {
        e.preventDefault();
        contentsInfo &&
          contentsInfo[itemKey].element.scrollIntoView({behavior: 'smooth'});
      }}
    >
      {children}
    </StyledContentsNavItem>
  );

  return (
    <StyledTableOfContents id="toc-navigation">
      <Stack flow="vertical-left">
        {contentsInfo &&
          contentsInfo.map((info, index) => (
            <ContentsNavItem key={info.id} itemKey={index} href={`#${info.id}`}>
              {info.title}
            </ContentsNavItem>
          ))}
      </Stack>
    </StyledTableOfContents>
  );
};
