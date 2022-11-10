import React, {useEffect, useState} from 'react';
import {
  EventTrigger,
  InstrumentationProvider,
  Stack,
  useInstrumentation,
} from 'newskit';
import {StyledTableOfContents, StyledContentsNavItem} from './styled';
import {ContentsNavItemProps} from './types';
import {contentsObserver} from './contents-observer';

export const TableOfContents: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>();
  const [contentsInfo, setContentsInfo] = useState<
    {id: string; title: string; element: Element}[]
  >();

  const {fireEvent} = useInstrumentation();

  const getContentInfo = () => {
    const data: {id: string; title: string; element: Element}[] = [];

    document.querySelectorAll('[data-toc-indexed]').forEach(element => {
      const title = element.getAttribute('data-toc-indexed');
      if (title) {
        data.push({id: element.id, title, element});
      }
    });
    setContentsInfo(data);
  };

  const setNewActiveElement = (id: string) => {
    const activeElement =
      contentsInfo && contentsInfo.findIndex(info => info.id === id);

    if (activeElement !== activeItem) {
      setActiveItem(activeElement);

      const section =
        activeElement &&
        contentsInfo[activeElement] &&
        contentsInfo[activeElement].id;

      if (section) {
        const data = {
          originator: 'page-scroll',
          trigger: EventTrigger.Scroll,
          context: {
            section,
          },
        };
        fireEvent(data);
      }
    }
  };
  useEffect(() => {
    if (!contentsInfo) {
      getContentInfo();
    }
    if (contentsInfo) {
      return contentsObserver(setNewActiveElement, contentsInfo);
    }
    return undefined;
  }, [contentsInfo, activeItem]); // eslint-disable-line react-hooks/exhaustive-deps


  const handleTOCClick = (
    event: React.MouseEvent<HTMLElement>,
    itemKey: number,
  ) => {
    if (contentsInfo !== undefined) {
      event.preventDefault();
      contentsInfo[itemKey].element.scrollIntoView({behavior: 'smooth'});
    }
  };


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
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        handleTOCClick(event, itemKey);
      }}
    >
      {children}
    </StyledContentsNavItem>
  );

  return (
    <InstrumentationProvider context={{area: 'toc-navigation'}}>
      <StyledTableOfContents id="toc-navigation">
        <Stack flow="vertical-left">
          {contentsInfo &&
            contentsInfo.map((info, index) => (
              <ContentsNavItem
                key={info.id}
                itemKey={index}
                href={`#${info.id}`}
              >
                {info.title}
              </ContentsNavItem>
            ))}
        </Stack>
      </StyledTableOfContents>
    </InstrumentationProvider>
  );
};
