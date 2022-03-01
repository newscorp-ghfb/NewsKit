import * as React from 'react';
import {
  getSizingCssFromTheme,
  handleResponsiveProp,
  MQ,
  styled,
} from '../../../utils';
import {Block} from '../../../block';
import {GridLayout} from '../../grid-layout';
import {Button, Card, TextBlock} from '../../..';

export default {
  title: 'NewsKit Light/read-more',
  component: () => 'None',
};

const SizingCssFromTheme = styled(Block)`
  background: red;
  ${getSizingCssFromTheme('padding', {xs: 'sizing020', md: 'sizing050'})};
`;

export const Demo = () => (
  <>
    <TextBlock
      stylePreset={{
        xs: 'inkBase',
        sm: 'inkPositive',
        md: 'inkNegative',
        lg: 'inkBase',
      }}
      typographyPreset={{
        xs: 'editorialHeadline010',
        md: 'editorialDisplay010',
      }}
    >
      Text Block
    </TextBlock>

    <hr />
    <Block spaceStack={{xs: '10px', md: '100px'}}>Block 1</Block>
    <Block>Block 2</Block>
    <hr />
    <Button overrides={{minWidth: {xs: '100%', md: '230px'}}}>Button</Button>
    <hr />
    <h1>getSizingCssFromTheme</h1>
    <SizingCssFromTheme />
    <br />
    <h1>handleResponsiveProp</h1>

    <LineClamp clamp={{xs: '4', md: '3', lg: '1'}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </LineClamp>
  </>
);

const LineClamp = styled.div<{clamp: MQ<string>}>`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-wrap: break-word;
  line-height: 1;
  overflow: hidden;
  width: 100%;
  ${handleResponsiveProp({clamp: '2'}, ({clamp}) => ({
    '-webkit-line-clamp': clamp,
  }))};
`;

const BorderedBlock = styled(Block)`
  ${getSizingCssFromTheme('margin', {xs: '16px -20px', md: '16px 0px'})};
  ${getSizingCssFromTheme('padding', {xs: '0px 20px', md: '0px'})};
`;

const WrappedBlock = styled(Block)`
  ${getSizingCssFromTheme('padding', {xs: '16px 0px', md: '20px 15px'})};
  background: #ccc;
`;

const KickerTextBlockComp = styled(TextBlock)`
  display: inline;
`;

const IMAGE_SIZES = {
  vertical: {
    width: {
      // xs: '322px',
      // md: '295px',
      xs: '100%',
    },
    height: {
      xs: '138px',
      md: '188px',
    },
  },
  horizontal: {
    width: {
      xs: '110px',
      md: '132px',
    },
    height: {
      xs: '72px',
      md: '88px',
    },
  },
};

const ReadMoreHorizontal = ({
  articleUrl,
  image,
  teaserKicker,
  teaserHeadline,
}) => {
  const content = (
    <LineClamp clamp={{xs: '3', md: '2'}}>
      <KickerTextBlockComp
        aria-label={teaserKicker}
        stylePreset="readMoreKickerStylePreset"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialSubheadline020',
        }}
        dangerouslySetInnerHTML={{__html: `${teaserKicker} `}}
        className="read-more-kicker"
        as="span"
        noCrop
      />
      <KickerTextBlockComp
        aria-label={teaserHeadline}
        stylePreset="readMoreHeadlinerStylePreset"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialSubheadline020',
        }}
        dangerouslySetInnerHTML={{__html: teaserHeadline}}
        className="read-more-headline"
        as="h1"
        noCrop
      />
    </LineClamp>
  );

  return (
    <Card
      href={articleUrl}
      media={{src: image, overrides: IMAGE_SIZES.horizontal}}
      className="read-more-vertical-card"
      layout="horizontal"
      overrides={{
        horizontalRatio: '1:100',
        stylePreset: 'readMoreCardStylePreset',
        mediaContainer: {
          spaceInline: 'space040',
        },
      }}
    >
      <GridLayout alignItems="center" overrides={{height: '100%'}}>
        {content}
      </GridLayout>
    </Card>
  );
};
const ReadMoreVertical = ({
  articleUrl,
  image,
  teaserKicker,
  teaserHeadline,
}) => {
  const content = (
    <LineClamp clamp={{xs: '5', md: '3'}}>
      <KickerTextBlockComp
        aria-label={teaserKicker}
        stylePreset="readMoreKickerStylePreset"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialSubheadline020',
        }}
        dangerouslySetInnerHTML={{__html: `${teaserKicker} `}}
        className="read-more-kicker"
        as="span"
        noCrop
      />
      <KickerTextBlockComp
        aria-label={teaserHeadline}
        stylePreset="readMoreHeadlinerStylePreset"
        typographyPreset={{
          xs: 'editorialHeadline010',
          md: 'editorialSubheadline020',
        }}
        dangerouslySetInnerHTML={{__html: teaserHeadline}}
        className="read-more-headline"
        as="h1"
        noCrop
      />
    </LineClamp>
  );

  return (
    <Card
      href={articleUrl}
      media={{src: image, overrides: IMAGE_SIZES.vertical}}
      className="read-more-vertical-card"
      overrides={{
        stylePreset: 'readMoreCardStylePreset',
        mediaContainer: {
          spaceInline: 'space000',
        },
      }}
    >
      {content}
    </Card>
  );
};

const ReadMore = ({layout, articles}) => {
  const columns = {
    xs: layout === 'horizontal' ? '1fr' : `1fr 1fr 1fr`,
    md: layout === 'horizontal' ? '1fr' : `repeat(${articles.length}, 1fr)`,
  };

  const rowGap = {
    xs: '12px',
  };

  const columnGap = {
    xs: '20px',
  };

  const Item = layout === 'horizontal' ? ReadMoreHorizontal : ReadMoreVertical;

  return (
    <WrappedBlock>
      <BorderedBlock>
        <GridLayout columns={columns} columnGap={columnGap} rowGap={rowGap}>
          {articles.map(i => (
            <Item
              articleUrl={`#/id/${i}`}
              image={`https://placekitten.com/g/300/300?id=${i}`}
              teaserHeadline={`Headline ${i}`}
              teaserKicker={`Kicker ${i}`}
            />
          ))}
        </GridLayout>
      </BorderedBlock>
    </WrappedBlock>
  );
};

export const ReadMoreStory = () => {
  const items = [
    'title 1',
    'Piers Morgan: Putin’s a vile, snivelling, ruthless, heartless, narcissistic bully – but who’s going to stop him?',
    'title 3',
  ];
  return (
    <>
      <ReadMore articles={items.slice(0, 1)} layout="horizontal" />
      <hr />
      <ReadMore articles={items.slice(0, 2)} layout="horizontal" />
      <hr />
      <ReadMore articles={items.slice(0, 3)} layout="horizontal" />
      <hr />
      <ReadMore articles={items.slice(0, 1)} layout="vertical" />
      <hr />
      <ReadMore articles={items.slice(0, 2)} layout="vertical" />
      <hr />
      <ReadMore articles={items.slice(0, 3)} layout="vertical" />
    </>
  );
};
