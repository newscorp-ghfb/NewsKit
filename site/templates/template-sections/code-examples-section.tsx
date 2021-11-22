import React from 'react';
import {Block, Image, ImageProps, TextBlock} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';
import {CodeFromFile} from '../../components/code';
import {ContentText} from '../../components/text-section';

export interface CodeExamplesProps {
  example: {
    title: string;
    description: string | JSX.Element;
    media?: ImageProps | JSX.Element | React.ComponentType;
    codeUrl?: string;
    sections?: {
      title: string;
      description: string | JSX.Element;
      media: ImageProps | JSX.Element | React.ComponentType;
      codeUrl: string;
    }[];
  }[];
}

export type CodeExamplesSectionProps = CodeExamplesProps & IntroductionText;

export const CodeExamplesSection: React.FC<CodeExamplesSectionProps> = ({
  introduction,
  example,
}) => (
  <CommonSection title="Examples" id="examples" introduction={introduction}>
    <ComponentPageCell>
      {example.map(({title, description, media, codeUrl, sections}) => (
        <>
          <TextBlock
            stylePreset="inkContrast"
            typographyPreset={{
              xs: 'editorialHeadline040',
              md: 'editorialHeadline050',
            }}
          >
            {title}
          </TextBlock>
          <Block spaceStack="space050" />
          <ContentText>{description}</ContentText>
          {media && (
            <Block stylePreset="imageRoundedMedium" spaceStack="space050">
              {renderIfReactComponent(media) || (
                <Image {...(media as ImageProps)} />
              )}
            </Block>
          )}
          {codeUrl && <CodeFromFile path={codeUrl} />}
          <Block spaceStack="space090" />
          {sections?.map(
            (
              {
                title: secTitle,
                description: secDescription,
                media: secMedia,
                codeUrl: secCodeUrl,
              },
              arr,
            ) => (
              <>
                <Block spaceStack="space050" />
                <ContentText title={secTitle}>{secDescription}</ContentText>
                <Block stylePreset="imageRoundedMedium" spaceStack="space050">
                  {renderIfReactComponent(secMedia) || (
                    <Image {...(secMedia as ImageProps)} />
                  )}
                </Block>
                <CodeFromFile path={secCodeUrl} />
                {sections && arr !== sections.length - 1 && (
                  <Block spaceStack="space090" />
                )}
              </>
            ),
          )}
        </>
      ))}
    </ComponentPageCell>
  </CommonSection>
);
