import {
  Block,
  GridLayout,
  Button,
  TextBlock,
  styled,
  useTheme,
  toNewsKitIcon,
} from 'newskit';
import { ExpandMore } from '@emotion-icons/material';

const IconFilledExpandMore = toNewsKitIcon(ExpandMore);

const StyledContainer = styled(Block)`
  max-width: 287px;
`;

const PublicationName = () => {
  const theme = useTheme();
  return theme.componentDefaults.publicationName || 'The NewsKit Daily';
};

export default () => (
  <StyledContainer
    paddingBlock="space050"
    paddingInline="space040"
    stylePreset="pricingCardSurface"
  >
    <TextBlock
      as="h2"
      typographyPreset="utilityHeading050"
      marginBlockEnd="space040"
      stylePreset="inkContrast"
    >
      Standard Digital
    </TextBlock>
    <TextBlock
      typographyPreset="utilityBody010"
      marginBlockEnd="space050"
      stylePreset="inkSubtle"
    >
      For those who want to read <PublicationName /> on the go.
    </TextBlock>
    <TextBlock
      as="h3"
      typographyPreset="utilityHeading050"
      marginBlockEnd="space030"
      stylePreset="inkContrast"
    >
      £15.00
    </TextBlock>
    <TextBlock
      typographyPreset="utilityLabel030"
      marginBlockEnd="space040"
      stylePreset="inkSubtle"
    >
      a month, monthly rolling contract.
    </TextBlock>
    <GridLayout columns="1fr 1fr">
      <Button
        overrides={{ width: '100%', stylePreset: 'buttonOutlinedPrimary' }}
      >
        Subscribe
      </Button>
      <Button
        overrides={{ width: '100%', stylePreset: 'buttonMinimalPrimaryNoWrap' }}
      >
        View Benefits <IconFilledExpandMore />
      </Button>
    </GridLayout>
  </StyledContainer>
);
