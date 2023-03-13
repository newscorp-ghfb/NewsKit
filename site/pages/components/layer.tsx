import React from 'react';
import {
  Block,
  getColorCssFromTheme,
  InlineMessage,
  Layer,
  LayerOrganizer,
  styled,
  TextBlock,
  toNewsKitIcon,
  UnorderedList,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageCell} from '../../components/layout-cells';
import {Playground} from '../../components/playground';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageBasicTemplate} from '../../templates/component-page-template/component-page-basic-template';
import {
  CommonSection,
  ComponentAPISection,
  RelatedComponentsSection,
  UsageSection,
} from '../../templates/template-sections';

import {Link} from '../../components/link';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const StyledLayer = styled(Layer)<{
  color?: string;
  width?: string;
  offset?: string;
  position?: string;
}>`
  position: ${({position}) => position || 'absolute'};
  box-sizing: border-box;
  width: ${({width}) => width || '50%'};
  height: 150px;
  top: ${({offset}) => offset || '0%'};
  left: ${({offset}) => offset || '0%'};
  padding: 20px;
  ${({color = 'gray', ...props}) =>
    getColorCssFromTheme('backgroundColor', color)(props)};
`;

const Box = styled.div<{
  width?: string;
  height?: string;
}>`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 4px;
`;

const LayerOrganizerPlayground = ({
  red,
  green,
}: {
  red: boolean;
  green: boolean;
}) => {
  const [isRedOpen, setIsRedOpen] = React.useState(false);
  const [isGreenOpen, setIsGreenOpen] = React.useState(false);

  React.useEffect(() => {
    setIsRedOpen(red);
  }, [red]);

  React.useEffect(() => {
    setIsGreenOpen(green);
  }, [green]);

  return (
    <LayerOrganizer>
      {isRedOpen && (
        <StyledLayer
          width="300px"
          color="interfaceNegative020"
          position="fixed"
          offset="40%"
        >
          <TextBlock
            stylePreset="inkContrast"
            typographyPreset="utilityBody010"
          >
            This will be rendered into a new layer organizer
          </TextBlock>
        </StyledLayer>
      )}
      {isGreenOpen && (
        <StyledLayer
          width="300px"
          color="interfacePositive020"
          position="fixed"
          offset="50%"
        >
          <TextBlock
            stylePreset="inkContrast"
            typographyPreset="utilityBody010"
          >
            This will be rendered into a new layer organizer
          </TextBlock>
        </StyledLayer>
      )}
    </LayerOrganizer>
  );
};
const LayerPlayground = ({blue, orange}: {blue: boolean; orange: boolean}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isBlueOpen, setIsBlueOpen] = React.useState(false);
  const [isOrangeOpen, setIsOrangeOpen] = React.useState(false);

  React.useEffect(() => {
    setIsBlueOpen(blue);
  }, [blue]);

  React.useEffect(() => {
    setIsOrangeOpen(orange);
  }, [orange]);

  return (
    <Box ref={ref}>
      {isBlueOpen && (
        <StyledLayer color="blue010" appendToRef={ref}>
          <TextBlock
            stylePreset="layerPlaygroundText"
            typographyPreset="utilityBody010"
          >
            This will be rendered into a new layer
          </TextBlock>
        </StyledLayer>
      )}
      {isOrangeOpen && (
        <StyledLayer color="amber010" offset="20%" appendToRef={ref}>
          <TextBlock
            stylePreset="layerPlaygroundText"
            typographyPreset="utilityBody010"
          >
            This will be rendered into a new layer
          </TextBlock>
        </StyledLayer>
      )}
    </Box>
  );
};

const LayerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageBasicTemplate
    headTags={{
      title: 'Layer',
      description:
        'Layers allow for the stacking of components and other elements, giving control over how they interact together and appear to users.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Layer',
      hero: {
        illustration: 'components/layer/layer-illustration',
      },
      introduction:
        'Layers allow for the stacking of components and other elements, giving control over how they interact together and appear to users.',
    }}
    componentDefaultsKey="layer"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v6.0.0',
      storybookId: 'components-layer--story-layer-default',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/layer',
    }}
  >
    <CommonSection
      id="overview"
      toc="Overview"
      title="Overview"
      introduction={
        <>
          Control over how different layers appear and interact together is
          important when building reusable components, as most modern user
          interfaces use layers to manage how components and other elements
          appear to users.
          <br />
          <br />
          Previously, the NewsKit design system utilised{' '}
          <InlineCode>z-index</InlineCode> to order component and element depth.
          However, we discovered that this approach did not work effectively
          when building and working with components due to the lack of control
          it afforded.
          <br />
          <br />
          Our solution allows for greater user control via the{' '}
          <InlineCode>LayerOrganizer</InlineCode> and{' '}
          <InlineCode>Layer</InlineCode> components which rely on the{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"
            target="_blank"
          >
            stacking context and stacking order
          </Link>{' '}
          to achieve the same functionality, rather than the traditional{' '}
          <InlineCode>z-index</InlineCode>.
        </>
      }
    />
    <CommonSection
      id="layerOrganizer"
      toc="Layer organizer"
      title="Layer organizer"
      introduction={
        <>
          The layer organizer is a provider-type component that needs to be
          added at the root level of your application. It creates a new stacking
          context and adds an extra <InlineCode>div</InlineCode> element to your
          application which will be used to host rendered layers. For example,
          the NewsKit{' '}
          <Link
            href="https://www.newskit.co.uk/components/modal/"
            target="_blank"
          >
            Modal
          </Link>{' '}
          ,{' '}
          <Link
            href="https://www.newskit.co.uk/components/drawer/"
            target="_blank"
          >
            Drawer
          </Link>{' '}
          , or{' '}
          <Link
            href="https://www.newskit.co.uk/components/select/"
            target="_blank"
          >
            Select
          </Link>{' '}
          components will render inside that div element.
          <br />
          <br />
          You can nest multiple Layer organizers to create a new stacking
          context. Be aware that the Layer component will always render in the
          parent one.
          <br />
          <br />
          <InlineMessage
            icon={infoIcon}
            role="region"
            aria-label="layerOrganizerInfo"
            overrides={{
              marginBlockStart: 'space030',
            }}
          >
            If you use <InlineCode>NewsKitProvider</InlineCode> you do not need
            to add a <InlineCode>LayerOrganizer</InlineCode> since it is already
            part of the <InlineCode>NewsKitProvider</InlineCode>.
          </InlineMessage>
          <br />
          <br />
          <br />
          <br />
        </>
      }
      hideSeparator
    />
    <CommonSection
      title="Layer organizer interactive demo"
      id="interactive-demo-layer-organizer"
      introduction="This demo lets you preview the layer organizer component, its variations and configuration options."
    >
      <ComponentPageCell>
        <Block marginBlockEnd="space050">
          <Playground
            componentName="LayerOrganizer"
            // @ts-ignore
            component={LayerOrganizerPlayground}
            knobs={[
              {
                name: 'Render red layer',
                propName: 'red',
                value: false,
              },
              {
                name: 'Render green layer',
                propName: 'green',
                value: false,
              },
            ]}
          />
        </Block>
      </ComponentPageCell>
    </CommonSection>
    <CommonSection
      id="layer"
      toc="Layer"
      title="Layer"
      introduction={
        <>
          The layer component renders its children inside a host using{' '}
          <InlineCode>createPortal</InlineCode>. The host is the parent{' '}
          <InlineCode>LayerOrganizer</InlineCode>.
          <br />
          <br />
          With layers, there is no need for the{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
            target="_blank"
          >
            z-index CSS property
          </Link>{' '}
          as layers completely rely on the stacking order within a{' '}
          <InlineCode>LayerOrganizer</InlineCode>.
          <br />
          <br />
          <br />
          <br />
        </>
      }
      hideSeparator
    />
    <CommonSection
      title="Layer interactive demo"
      id="interactive-demo-layer"
      introduction="This demo lets you preview the layer component, its variations and configuration options."
    >
      <ComponentPageCell>
        <Block marginBlockEnd="space050">
          <Playground
            componentName="Layer"
            // @ts-ignore
            component={LayerPlayground}
            knobs={[
              {
                name: 'Render blue layer',
                propName: 'blue',
                value: false,
              },
              {
                name: 'Render orange layer',
                propName: 'orange',
                value: false,
              },
            ]}
          />
        </Block>
      </ComponentPageCell>
    </CommonSection>
    <UsageSection
      introduction={
        <>
          The following guidance describes how and when to use layers.
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            overrides={{
              marginBlockEnd: 'space080',
            }}
          >
            <>
              In general, try to avoid using <InlineCode>z-index</InlineCode> in
              your component-based application. If you need to have a{' '}
              <InlineCode>z-index</InlineCode> added to an element, make sure it
              is within an ordered stacking context.{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context"
                target="_blank"
              >
                Refer to MDN for more information on how to create a stacking
                context.
              </Link>{' '}
            </>
            <>
              In order to support applications that have stacking contexts with{' '}
              <InlineCode>z-index</InlineCode> set to a value other than auto,{' '}
              <InlineCode>LayerOrganizer</InlineCode> and{' '}
              <InlineCode>NewsKitProvider</InlineCode> accept a{' '}
              <InlineCode>z-index</InlineCode> number. When a{' '}
              <InlineCode>z-index</InlineCode> value is passed, it will set it
              as a <InlineCode>z-index</InlineCode> value for all the layers
              within its context.
            </>
            <>
              When using <InlineCode>LayerOrganizer</InlineCode> you do not need
              to set a default value. However, in some cases, you might have
              third-party libraries or components that use{' '}
              <InlineCode>z-index</InlineCode> where you may need to change the
              default <InlineCode>z-index</InlineCode> value equal to or greater
              than the highest <InlineCode>z-index</InlineCode> value of all
              top-level stacking contexts in your application (note this may be
              not the highest <InlineCode>z-index</InlineCode> value across your
              application).
            </>
          </UnorderedList>
          <InlineMessage icon={infoIcon} role="region" aria-label="usageInfo">
            z-indexes within separate stacking contexts are not compared, and
            children within a stacking context that goes last will overlay those
            with a higher <InlineCode>z-index</InlineCode>, but within a
            separate stacking context that goes earlier in the stacking order.
          </InlineMessage>
        </>
      }
    />
    <ComponentAPISection
      components={[
        {
          title: 'Layer organizer',
          summary:
            'The layer organizer has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content of the Layer organizer',
            },
            {
              name: 'zIndex',
              type: 'number',
              description: 'Allows the default z-index value to be changed',
            },
          ],
        },
        {
          title: 'Layer',
          summary:
            'The layer has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content of the Layer',
            },
            {
              name: 'appendToRef',
              type: 'React.RefObject<HTMLElement | null>',
              description: (
                <>
                  Allows <InlineCode>Layer</InlineCode> to be appended to other
                  DOM element instead of the default{' '}
                  <InlineCode>LayerOrganizer</InlineCode>
                </>
              ),
            },
            {
              name: 'className',
              type: 'string',
              description:
                'Allow users to add a custom classNames to the layer element',
            },
          ],
        },
      ]}
    />
    <RelatedComponentsSection related={['Modal', 'Drawer']} />
  </ComponentPageBasicTemplate>
);

export default LayerComponent;
