const getActiveElementIndex = (currentRef: HTMLDivElement) =>
  Array.from(currentRef.childNodes).findIndex(
    e => e === document.activeElement,
  );

export const handleArrowDown = (ref: HTMLDivElement | null) => {
  if (ref) {
    const elements = ref.childNodes;
    const activeElementIndex = getActiveElementIndex(ref);
    const nextOption = (elements[activeElementIndex + 1] ||
      elements[0]) as HTMLButtonElement;
    nextOption.focus();
  }
};

export const handleArrowUp = (ref: HTMLDivElement | null) => {
  if (ref) {
    const elements = ref.childNodes;
    const activeElementIndex = getActiveElementIndex(ref);
    const prevOption = (elements[activeElementIndex - 1] ||
      elements[elements.length - 1]) as HTMLButtonElement;
    prevOption.focus();
  }
};
