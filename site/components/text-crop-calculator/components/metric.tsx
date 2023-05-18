import {getColorCssFromTheme, styled} from 'newskit*';
import React from 'react';
import {ArrowContainer, Label, MetricContainer} from './styled';
import {labelWidth, arrowSize} from './config';

export const Metric = ({
  voffset = 0,
  hoffset = 0,
  position,
  label,
  guides = 'top',
  align = 'left',
}: {
  position: number | string;
  label: string;
  voffset?: number;
  hoffset?: number;
  guides?: 'top' | 'all' | 'none';
  align?: 'left' | 'right';
}) => {
  const Guide = styled.div<{
    location: 'top' | 'bottom';
  }>`
    position: absolute;
    opacity: 0.6;
    height: 1px;
    ${getColorCssFromTheme('background', 'interfaceNegative010')};
    ${({location}) => ({
      left: `${align === 'left' ? 0 : labelWidth - hoffset}px`,
      right: `${align === 'right' ? 0 : labelWidth - hoffset}px`,
      bottom: location === 'top' ? position : 0,
    })}
  `;

  const ArrowHead = styled.div<{direction: 'up' | 'down'}>`
    width: 0;
    height: 0;
    ${({direction}) => ({
      borderBottom:
        direction === 'up'
          ? `${arrowSize * 2}px solid currentColor`
          : undefined,
      borderTop:
        direction === 'down'
          ? `${arrowSize * 2}px solid currentColor`
          : undefined,
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
    })}
  `;

  const ArrowShaft = styled.div`
    height: 100%;
    ${() => ({
      borderLeft: `${arrowSize / 2}px solid currentColor`,
    })}
  `;

  return (
    <MetricContainer
      left={`${align === 'left' ? 0 : -labelWidth}px`}
      right={`${align === 'right' ? 0 : -labelWidth}px`}
      h={`${position}px`}
      bottom={`${voffset}px`}
    >
      {guides !== 'none' && <Guide location="top" />}

      <MetricContainer
        top={0}
        left={`${align === 'right' ? -hoffset : undefined}px`}
        right={`${align === 'left' ? -hoffset : undefined}px`}
        h="100%"
        flexDir={align === 'right' ? 'row-reverse' : undefined}
      >
        <ArrowContainer>
          <ArrowHead direction="up" />
          <ArrowShaft />
          <ArrowHead direction="down" />
        </ArrowContainer>
        <Label align={align} typographyPreset="utilityBody010">
          {label}
        </Label>
      </MetricContainer>

      {guides === 'all' && <Guide location="bottom" />}
    </MetricContainer>
  );
};
