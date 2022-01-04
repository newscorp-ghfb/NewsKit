import React from 'react';
import {render} from '../../../test/test-utils';
import {Body} from '../body';
import {newskitLightTheme} from '../../../themes';

describe('Body renders', () => {
  it('with no props', () => {
    const fragment = render(<Body theme={newskitLightTheme} />, {
      container: document.createElement('body'),
    });
    expect(fragment.baseElement).toMatchSnapshot();
  });

  it('with children', () => {
    const fragment = render(
      <Body theme={newskitLightTheme}>
        <div>NewsKit Rocks</div>
      </Body>,
      {container: document.createElement('body')},
    );
    expect(fragment.baseElement).toMatchSnapshot();
  });
});
