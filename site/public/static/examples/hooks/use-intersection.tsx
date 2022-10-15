const Section = ({title}: {title: string}) => {
  const [ref, isIntersected] = useIntersection({rootMargin: '120px'});

  const isVisible = isIntersected;

  console.log(`Render Section ${title}`, {isVisible});

  return <StyledDiv ref={ref}>{title}</StyledDiv>;
};

export const Component = () => (
  <>
    {Array.from({length: 5}).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Section key={index + 1} title={`${index + 1}`} />
    ))}
  </>
);
