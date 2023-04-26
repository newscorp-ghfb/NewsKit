import {styled, TextBlock} from 'newskit*';
import {FlexDirectionProperty} from 'csstype';
import {labelWidth} from './config';

export const ArrowContainer = styled.div`
  color: blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled(TextBlock)<{align?: 'left' | 'right'}>`
  ${({align}) => ({
    textAlign: align,
    width: labelWidth,
  })}
`;

export const MetricContainer = styled.div<{
  left: number | string;
  right: number | string;
  top?: number | string;
  bottom?: number | string;
  h?: string;
  flexDir?: FlexDirectionProperty;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  ${({left, right, top, bottom, h: height, flexDir: flexDirection}) => ({
    left,
    right,
    top,
    bottom,
    height,
    flexDirection,
  })}
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FontContainer = styled.div<{fontFamily: string}>`
  line-height: normal;
  position: relative;
  overflow: auto;
  padding-left: 130px; // cater for arrow offsets
  padding-right: 150px; // cater for arrow offsets
  padding-top: 40px; // cater for ascender overflow
  margin-top: -40px; // cater for ascender overflow
  padding-bottom: 60px; // cater for descender overflow
  margin-bottom: -60px; // cater for descender overflow
  ${({fontFamily}) => ({fontFamily})}
`;

export const RelativeContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: red;
  opacity: 0.3;
`;

export const ExampleText = styled.div<{fontSize: number}>`
  z-index: 1;
  color: green;
  ${({fontSize}) => ({fontSize: `${fontSize}px`})}
`;

export const HiddenInput = styled.input`
  display: none;
`;
