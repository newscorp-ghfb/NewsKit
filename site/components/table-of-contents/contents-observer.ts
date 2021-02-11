import debounce from 'debounce';

const getHtmlReadElement = (HtmlElementsList: Array<HTMLElement | null>) => {
  const elementsAboveMidHeightData: Array<{
    id: string;
    elementXTopPosition: number;
  }> = [];

  HtmlElementsList.forEach(element => {
    if (element !== null) {
      const elementXTopPosition = element.getBoundingClientRect().top;
      if (elementXTopPosition < window.innerHeight / 2) {
        elementsAboveMidHeightData.push({id: element.id, elementXTopPosition});
      }
    }
  });

  // The following statement covers  the case of an user scrolling back to the top, after have visited another section,
  // leaving the first section below the mid height
  if (elementsAboveMidHeightData.length === 0 && HtmlElementsList[0]) {
    return HtmlElementsList[0].id;
  }

  // Closest Html element's id to view port's mid height
  return elementsAboveMidHeightData[elementsAboveMidHeightData.length - 1].id;
};

const handleScroll = (
  HtmlElementsList: Array<HTMLElement | null>,
  handleIntersection: Function,
) => {
  const readHtmlElement = getHtmlReadElement(HtmlElementsList);
  if (readHtmlElement) {
    handleIntersection(readHtmlElement);
  }
};

export const contentsObserver = (
  handleIntersection: (id: string) => void,
  contentsInfo: Array<{id: string}>,
) => {
  if (typeof document === 'undefined') {
    return () => {};
  }

  // eslint-disable-next-line no-undef
  const d = document;
  const htmlElementsList = contentsInfo.map(info => d.getElementById(info.id));
  const onScroll = debounce(() => {
    handleScroll(htmlElementsList, handleIntersection);
  });

  d.addEventListener('scroll', onScroll);

  return () => {
    d.removeEventListener('scroll', onScroll);
  };
};
