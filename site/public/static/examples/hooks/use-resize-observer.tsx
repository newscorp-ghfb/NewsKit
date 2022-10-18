export const Component = () => {
  const [, setDimensions] = React.useState({top: 0, left: 0});
  const ref = React.useRef<HTMLDivElement>(null);

  // Optional callback to access the full DOMRect object if required.
  const optionalCallback = (entry: DOMRectReadOnly) =>
    setDimensions({top: entry.x, left: entry.left});

  // Access the width and the height returned from the observed element.
  const [width, height] = useResizeObserver(ref, optionalCallback);
  return (
    <>
      <StyledDiv ref={ref}>
        {width} x {height}
      </StyledDiv>
    </>
  );
};
