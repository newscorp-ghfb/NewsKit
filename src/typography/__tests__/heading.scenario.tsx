import * as React from 'react';
import {H6, H5, H4, H3, H2, H1} from '..';

const title = 'We tell the stories that matter.';

export default {
  name: 'typography/heading',
  children: [
    {
      name: 'heading-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <br />
          <H1>Default H1 - {title}</H1>
          <br />
          <H2>Default H2 - {title}</H2>
          <br />
          <H3>Default H3 - {title}</H3>
          <br />
          <H4>Default H4 - {title}</H4>
          <br />
          <H5>Default H5 - {title}</H5>
          <br />
          <H6>Default H6 - {title}</H6>
        </React.Fragment>
      ),
    },
    {
      name: 'heading-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <H1 overrides={{stylePreset: 'linkInline', typePreset: 'body010'}}>
            H1 with override
          </H1>
          <br />
          <H2 overrides={{stylePreset: 'linkInline', typePreset: 'body020'}}>
            H2 with override
          </H2>
          <br />
          <H3 overrides={{stylePreset: 'linkInline', typePreset: 'body030'}}>
            H3 with override
          </H3>
          <br />
          <H4 overrides={{stylePreset: 'linkInline', typePreset: 'body010'}}>
            H4 with override
          </H4>
          <br />
          <H5 overrides={{stylePreset: 'linkInline', typePreset: 'body020'}}>
            H5 with override
          </H5>
          <br />
          <H6 overrides={{stylePreset: 'linkInline', typePreset: 'body030'}}>
            H6 with override
          </H6>
        </React.Fragment>
      ),
    },
  ],
};
