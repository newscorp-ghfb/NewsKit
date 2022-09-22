import {InlineMessage} from 'newskit';
import {MarkdownElements} from '../../components/markdown-elements';
import {Mono} from '../../components/flags';

const appComponents = {InlineMessage, Mono, ...MarkdownElements};

export default function getMDXScope() {
  const allComponentScope = Object.entries(appComponents).reduce(
    (props, [ComponentName, Component]: [string, {propsInfo: object}]) => ({
      ...props,
      [ComponentName]: {
        __propsInfo: Component?.propsInfo ?? null,
      },
    }),
    {},
  );

  return {
    ...allComponentScope,
  };
}
