import * as React from 'react';
import {DateLine} from '..';

export const name = 'date-line';

export const component = () => (
  <React.Fragment>
    <div>
      <DateLine
        prefix="Updated: "
        date="2017-01-01T04:32:00.000Z"
        dateFormat="d MMM yyyy, H:mm"
      />
    </div>
    <div>
      <DateLine
        date="2017-07-01T14:32:00.000Z"
        dateFormat="MMMM d yyyy, h:mmaaaaa'm'"
        suffix=", The Times"
      />
    </div>
    <div>
      <DateLine
        date="2017-07-01T14:32:00.000Z"
        dateFormat="MMMM d yyyy, h:mmaaaaa'm'"
        suffix=", The Times"
        $color="inkContrast"
      />
    </div>
  </React.Fragment>
);
