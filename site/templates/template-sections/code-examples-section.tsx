import React from 'react';
import {Block, Image, ImageProps, TextBlock} from 'newskit';
import {renderIfReactComponent} from 'newskit/utils/component';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';
import {ComponentPageCell} from '../../components/layout-cells';
import {CodeFromFile, Code} from '../../components/code';
import {ContentText} from '../../components/text-section';

export interface CodeExamplesProps {
  children?: React.ReactNode;
  example: {
    title?: string;
    description?: string | JSX.Element;
    media?: ImageProps | JSX.Element | React.ComponentType;
    code?: string;
    codeUrl?: string;
    sections?: {
      title: string;
      description: string | JSX.Element;
      media?: ImageProps | JSX.Element | React.ComponentType;
      code?: string;
      codeUrl?: string;
    }[];
  }[];
}

export type CodeExamplesSectionProps = CodeExamplesProps &
  IntroductionText & {title?: string; toc?: string; hideSeparator?: boolean};

export const CodeExamplesSection: React.FC<CodeExamplesSectionProps> = ({
  children,
  introduction,
  example,
  ...codeExamples
}) => (
  <CommonSection
    title={codeExamples.title || 'Example'}
    id={codeExamples.title?.replace(/\s/g, '') || 'example'}
    toc={codeExamples.toc || codeExamples.title || 'Example'}
    introduction={introduction}
    hideSeparator={codeExamples.hideSeparator}
  >
    <ComponentPageCell>
      {example.map(({title, description, media, code, codeUrl, sections}) => (
        <React.Fragment key={`${title}-${codeUrl}`}>
          {title && (
            <Block spaceStack="space050">
              <TextBlock
                stylePreset="inkContrast"
                typographyPreset={{
                  xs: 'editorialHeadline040',
                  md: 'editorialHeadline050',
                }}
              >
                {title}
              </TextBlock>
            </Block>
          )}
          {description && <ContentText>{description}</ContentText>}
          {media && (
            <Block stylePreset="blockRoundedMedium" spaceStack="space050">
              {renderIfReactComponent(media) || (
                <Image {...(media as ImageProps)} />
              )}
            </Block>
          )}
          {codeUrl && (
            <Block spaceStack="space090">
              <CodeFromFile path={codeUrl} />
            </Block>
          )}
          {code && (
            <Block spaceStack="space090">
              <Code>{code}</Code>
            </Block>
          )}

          {sections?.map(
            (
              {
                title: secTitle,
                description: secDescription,
                media: secMedia,
                codeUrl: secCodeUrl,
                code: secCode,
              },
              arr,
            ) => (
              <React.Fragment key={secTitle}>
                <ContentText title={secTitle}>{secDescription}</ContentText>
                {secMedia && (
                  <Block stylePreset="imageRoundedMedium" spaceStack="space050">
                    {renderIfReactComponent(secMedia) || (
                      <Image {...(secMedia as ImageProps)} />
                    )}
                  </Block>
                )}
                {secCodeUrl && <CodeFromFile path={secCodeUrl} />}
                {secCode && (
                  <Block spaceStack="space090">
                    <Code>{secCode}</Code>
                  </Block>
                )}
                {sections && arr !== sections.length - 1 && (
                  <Block spaceStack="space090" />
                )}
              </React.Fragment>
            ),
          )}
          {children}
        </React.Fragment>
      ))}
    </ComponentPageCell>
  </CommonSection>
);
