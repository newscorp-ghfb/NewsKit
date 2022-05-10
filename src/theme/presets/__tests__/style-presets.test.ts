import {stylePresets} from '../style-presets';

describe('style presets should', () => {
  test('only have valid attributes', () => {
    const allowedList = [
      'solid',
      'none',
      'underline',
      'ellipsis',
      'uppercase',
      'center',
      'nowrap',
      /*
        TODO: The following values are temporary workarounds because
        currently we don't have opacity tokens ready.
        We can remove these after we introduce the opacity tokens
        Here is the ticket for that:
        https://nidigitalsolutions.jira.com/browse/PPDSC-2095
      */
      '0',
      '0.2',
      '0.4',
    ].join('|');
    const validAttributes = new RegExp(`({{[a-zA-Z.0-9]+}}|${allowedList})`);

    Object.values(stylePresets).forEach(preset =>
      Object.values(preset).forEach(states =>
        Object.values(states).forEach(attribute =>
          expect(attribute).toMatch(validAttributes),
        ),
      ),
    );
  });
});
