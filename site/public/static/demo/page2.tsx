import { Button, TextBlock, toNewsKitIcon } from 'newskit';
import { ExpandMore } from '@emotion-icons/material';

const IconFilledExpandMore = toNewsKitIcon(ExpandMore);

export default () => (
  <div>
    <TextBlock as="h2">Standard Digital</TextBlock>
    <TextBlock>
      For those who want to read The Times &amp; The Sunday Times on the go.
    </TextBlock>
    <TextBlock as="h3">£15.00</TextBlock>
    <TextBlock>a month, monthly rolling contract.</TextBlock>
    <Button>Subscribe</Button>
    <Button>
      View Benefits <IconFilledExpandMore />
    </Button>
  </div>
);
