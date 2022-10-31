import {MQ} from '../utils/style';
import {uniq} from '../utils/uniq';

export const capitalize = (s: string) =>
  s.replace(/^./, firstLetter => firstLetter.toUpperCase());

export const extractAreas = (areaString: string) =>
  areaString
    .replace(/\n/g, ' ')
    .replace(/"/g, '')
    .replace(/  +/g, ' ')
    .trim()
    .split(' ');

export const filterInvalidAreas = (areaName: string): boolean =>
  areaName !== '.' && Boolean(areaName);

export const getAreasList = (areas: MQ<string>): string[] => {
  if (typeof areas === 'string') {
    return uniq(extractAreas(areas));
  }
  const list = Object.values(areas).reduce((acc: string[], val: string) => {
    const filtered = extractAreas(val);
    return [...acc, ...filtered];
  }, []);

  return uniq(list).filter(filterInvalidAreas);
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
    .filter(each => each.length)
    .map(each => (each.includes(`"`) ? each : `"${each}"`))
    .join('\n');
