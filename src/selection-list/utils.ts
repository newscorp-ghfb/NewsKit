const getActiveElement = (currentRef: HTMLDivElement) => {
  const activeElementIndex = Array.from(currentRef.childNodes).findIndex(
    e => e === document.activeElement,
  );
  return {
    elements: currentRef.childNodes,
    activeElementIndex,
  };
};

export const handleArrowDown = (ref: HTMLDivElement | null) => {
  if (ref) {
    const {elements, activeElementIndex} = getActiveElement(ref);
    const nextOption = (elements[activeElementIndex + 1] ||
      elements[0]) as HTMLButtonElement;
    nextOption.focus();
  }
};

export const handleArrowUp = (ref: HTMLDivElement | null) => {
  if (ref) {
    const {elements, activeElementIndex} = getActiveElement(ref);
    const prevOption = (elements[activeElementIndex - 1] ||
      elements[elements.length - 1]) as HTMLButtonElement;
    prevOption.focus();
  }
};
