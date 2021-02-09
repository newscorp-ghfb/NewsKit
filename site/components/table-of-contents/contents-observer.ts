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

  // This case covers when the users scrolls top the top again leaving the first section below the mid height
  if (elementsAboveMidHeightData.length === 0 && HtmlElementsList[0])
    return HtmlElementsList[0].id;

  // // Closest Html element's id to view port's mid height
  return elementsAboveMidHeightData[elementsAboveMidHeightData.length - 1].id;
};

const handleScroll = (
  HtmlElementsList: Array<HTMLElement | null>,
  handleIntersection: Function,
) => {
  // TODO to remove
  console.log('handling scroll');
  const readHtmlElement = getHtmlReadElement(HtmlElementsList);
  if (readHtmlElement) handleIntersection(readHtmlElement);
};

export const contentsObserver = (
  handleIntersection: Function,
  contentsData: Array<{id: string}>,
) => {
  const HtmlElementsList = contentsData.map(data =>
    document.getElementById(data.id),
  );

  document.addEventListener(
    'scroll',
    debounce(function() {
      handleScroll(HtmlElementsList, handleIntersection);
    }),
  );
};
