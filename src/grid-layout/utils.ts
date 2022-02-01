import {MQ} from '../utils/style';

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return '';
  return s.replace(/^./, firstLetter => firstLetter.toUpperCase());
};

export const extractAreas = (ariaString: string) =>
  ariaString
    .replace(/\n/g, '')
    .replace(/"/g, '')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');

export const uniq = (array: string[]) => Array.from(new Set(array));

export const filterInvalidAreas = (areaName: string): boolean =>
  areaName !== '.' && Boolean(areaName);

export const getAreasList = (areas: MQ<string>): string[] => {
  if (typeof areas === 'string') {
    return uniq(extractAreas(areas));
  }

  if (typeof areas === 'object') {
    const list = Object.values(areas).reduce((acc: string[], val: string) => {
      const filtered = extractAreas(val);
      return [...acc, ...filtered];
    }, []);

    return uniq(list).filter(filterInvalidAreas);
  }

  return [];
};

export const areaToValidCSS = (areasToStandardise?: string) =>
  areasToStandardise
    ?.split('\n')
    .map(eachArea =>
      eachArea
        .split(/\s+/)
        .filter(eachAreaNested => !!eachAreaNested)
        .join(' '),
    )
    .filter(each => each?.length)
    .map(each => (each.includes(`"`) ? each : `"${each}"`))
    .join('\n');
