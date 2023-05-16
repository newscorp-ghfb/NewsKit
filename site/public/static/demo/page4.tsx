import { GridLayout, Button, toNewsKitIcon, TextBlock } from 'newskit';

import { ExpandMore } from '@emotion-icons/material';

const IconFilledExpandMore = toNewsKitIcon(ExpandMore);

export default () => (
  <div>
    <TextBlock
      as="h2"
      typographyPreset="utilityHeading050"
      marginBlockEnd="space040"
    >
      Standard Digital
    </TextBlock>
    <TextBlock typographyPreset="utilityBody010" marginBlockEnd="space050">
      For those who want to read The Times &amp; The Sunday Times on the go.
    </TextBlock>
    <TextBlock
      as="h3"
      typographyPreset="utilityHeading050"
      marginBlockEnd="space030"
    >
      £15.00
    </TextBlock>
    <TextBlock typographyPreset="utilityLabel030" marginBlockEnd="space040">
      a month, monthly rolling contract.
    </TextBlock>
    <GridLayout columns="1fr 1fr">
      <Button overrides={{ width: '100%' }}>Subscribe</Button>
      <Button overrides={{ width: '100%' }}>
        View Benefits <IconFilledExpandMore />
      </Button>
    </GridLayout>
  </div>
);
