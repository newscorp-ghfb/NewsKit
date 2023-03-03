import * as React from 'react';
import {Headline} from '../headline';
import {Block} from '../block';
import {
  getStylePreset,
  getTransitionPresetFromTheme,
  getStylePresetFromTheme,
  styled,
} from '../utils/style';
import {Image} from '../image';
import {Paragraph, Tag} from '..';
import {GridLayout} from '../grid-layout/grid-layout';
import {GridLayoutProps} from '../grid-layout/types';
import {logicalProps, LogicalProps} from '../utils/logical-properties';

const CardContext = React.createContext({useAreas: false});
const useCardContext = () => React.useContext(CardContext);

const StyledCard = styled(GridLayout)`
  position: relative;
  ${props => getStylePreset('', '')(props)}
  ${getTransitionPresetFromTheme('backgroundColorChange')}
`;

export const Card = ({
  children,
  ...props
}: Omit<GridLayoutProps, 'overrides'> & {
  overrides: GridLayoutProps['overrides'] & {stylePreset?: string};
}) => {
  const {areas} = props;

  return (
    <CardContext.Provider value={{useAreas: Boolean(areas)}}>
      <StyledCard {...props}>
        {children}

        {/* {href && (
        // Cover link is not tabbable or read by screen-reader
        <CardCoverLink
          href={href}
          tabIndex={hasTouchLinkInChildren ? -1 : undefined}
          aria-hidden={hasTouchLinkInChildren ? 'true' : undefined}
        />
      )} */}
      </StyledCard>
    </CardContext.Provider>
  );
};

const StyledCardMedia = styled(GridLayout)<{useAreas: boolean}>`
  ${prop => prop.useAreas && `grid-area: media;`}
`;

export const CardMedia = ({
  src,
  loadingAspectRatio = '3:2',
}: {
  src: string;
  loadingAspectRatio?: string;
}) => {
  const {useAreas} = useCardContext();
  return (
    <StyledCardMedia useAreas={useAreas}>
      <Image
        loadingAspectRatio={loadingAspectRatio}
        src={src}
        alt=""
        style={{maxWidth: '100%'}}
      />
    </StyledCardMedia>
  );
};
const StyledCardContent = styled(GridLayout)<{useAreas: boolean}>`
  ${prop => prop.useAreas && `grid-area: content;`}
`;

export const CardContent = (props: GridLayoutProps) => {
  const {useAreas} = useCardContext();
  return <StyledCardContent {...props} useAreas={useAreas} />;
};

// Card Actions has larger z-index than Cover link so goes over it
const StyledCardActions = styled(Block)<{useAreas: boolean} & LogicalProps>`
  position: relative;
  z-index: 2;
  ${prop => prop.useAreas && `grid-area: actions;`}
  ${logicalProps()}
`;

export const CardActions = ({
  children,
  ...rest
}: {children: React.ReactNode; stylePreset?: string} & LogicalProps) => {
  const {useAreas} = useCardContext();
  return (
    <StyledCardActions useAreas={useAreas} {...rest}>
      {children}
    </StyledCardActions>
  );
};

const StyledCardLink = styled(GridLayout)<{expand?: boolean}>`
  ${getStylePresetFromTheme('headlineLink')};
  text-decoration: none;
  ${props =>
    props.expand &&
    `
   
    &:before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
    }
    `}
`;

export const CardLink = (
  props: GridLayoutProps & {href: string; expand?: boolean},
) => <StyledCardLink as="a" {...props} />;

const cardHref = '/card-link';

export const CardComposableExample = () => (
  <Card
    overrides={{
      maxWidth: {xl: '600px', md: '420px'},
      stylePreset: 'cardComposable',
    }}
    rowGap="space040"
    columns={{xs: '200px 1fr', md: '1fr'}}
    areas={{
      xs: `
        media content
        media actions
      `,
      md: `
        media
        content
        actions
      `,
    }}
  >
    <CardContent
      rowGap="space040"
      overrides={{paddingInline: 'space040', paddingBlockStart: 'space040'}}
    >
      <CardLink href={cardHref} expand>
        <Headline kickerText="KICKER">Title of the card</Headline>
      </CardLink>
      <Paragraph>Some kind of intro</Paragraph>
    </CardContent>

    <CardMedia src="/placeholder-3x2.png" />

    <CardActions>
      <Tag href="/news">News</Tag>
    </CardActions>
  </Card>
);
