const layoutConfig = [
  ['1-span', {xs: 12}],
  ['2-span', {xs: 12, md: 6}],
  ['2-span-hero', {xs: 12, md: 6}],
  ['3-span', {xs: 12, md: 4}],
  ['3-span-hero', {xs: 12, md: 4}],
  ['4-span', {xs: 12, md: 6, xl: 3}],
];

const columnsCalculator = (
  span:
    | '1-span'
    | '2-span'
    | '2-span-hero'
    | '3-span'
    | '3-span-hero'
    | '4-span',
) => {
  let layoutColumnsConfig;

  layoutConfig.forEach(layout => {
    if (layout[0] === span) {
      /* eslint-disable prefer-destructuring */
      layoutColumnsConfig = layout[1];
    }
  });

  return layoutColumnsConfig;
};

export {columnsCalculator};
