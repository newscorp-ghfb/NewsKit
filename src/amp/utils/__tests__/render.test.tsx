import React from 'react';
import amphtmlValidator from 'amphtml-validator';
import {Head} from '../../head';
import {Body} from '../../body';
import {renderToStaticMarkup} from '../render';
import {newskitLightTheme} from '../../../themes';

describe('amp renderToStaticMarkup test suite', () => {
  let html: string;

  beforeAll(() => {
    // This should use a styled component but the styles aren't rendering... :S
    html = renderToStaticMarkup(
      <Body theme={newskitLightTheme}>
        <div>
          <style>{`h1 {background: red; color: green; border: solid 5px blue;}`}</style>
          <h1>One Damn Ugly Heading</h1>
        </div>
      </Body>,
      <Head title="title" canonical="canonical" />,
    );
  });

  it('returns a string with relevant amp attribute inside it', () => {
    expect(html).toMatchSnapshot();
  });

  it('should be AMP compliant', async () => {
    const validator = await amphtmlValidator.getInstance();
    const result = validator.validateString(html);
    if (result.status !== 'PASS') {
      // Following formatting taken from amphtml-validator NPM readme.
      result.errors.forEach(error => {
        let msg = `line ${error.line}, col ${error.col}: ${error.message}`;
        if (error.specUrl !== null) {
          msg += ` (see ${error.specUrl})`;
        }
        // eslint-disable-next-line no-console
        (error.severity === 'ERROR' ? console.error : console.warn)(msg);
      });
    }
    expect(result.status).toEqual('PASS');
  });
});
