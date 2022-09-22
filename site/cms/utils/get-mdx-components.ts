import {InlineMessage} from 'newskit';
import {Mono} from '../../components/flags';

const newskitComponents = {InlineMessage};
const docSiteComponents = {Mono};

export default function getMDXComponents(): Record<string, unknown> {
  return {
    ...newskitComponents,
    ...docSiteComponents,
  };
}
