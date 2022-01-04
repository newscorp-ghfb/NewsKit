import * as React from 'react';
import {Image} from '..';
import {styled} from '../../utils/style';

export const name = 'image';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const component = () => (
  <React.Fragment>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
        />
      </Container>
    </div>
    <div>
      <Container>
        <Image
          src="http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-3-2.png"
          aspectWidth={3}
          aspectHeight={2}
          alt="Example Image"
          hideLoadingIcon
        />
      </Container>
    </div>
  </React.Fragment>
);
