import * as React from 'react';
import {
  ColorKeys,
  withTheme,
  Theme,
  SizingKeys,
  styled,
  getSizingFromTheme,
  getColorFromTheme,
} from 'newskit';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${getSizingFromTheme('sizing070')};
  height: ${getSizingFromTheme('sizing070')};
  overflow: hidden;
`;

interface StyledNewsKitMobileLogo {
  viewBox?: string;
  $color: ColorKeys;
  size: SizingKeys;
}

type NewsKitMobileLogoPorps = Omit<StyledNewsKitMobileLogo, '$color'> & {
  color: ColorKeys;
};

const LogoSvg = styled.svg<StyledNewsKitMobileLogo>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, 'size')};
  height: ${getSizingFromTheme(undefined, 'size')};
`;

type LogoWithTheme = NewsKitMobileLogoPorps & {theme: Theme};

const NewsKitMobileLogo = React.forwardRef<HTMLDivElement, LogoWithTheme>(
  ({color, ...props}, ref) => (
    <LogoWrapper ref={ref}>
      <LogoSvg viewBox="0 0 40 40" $color={color} {...props}>
        <title>NewsKit Mobile Logo</title>
        <path d="M40 0v40H0V0h40zm-9.9823608 8H24L12 19.999V8H8v24h4v-6.004L16.001 22l10.0031809 10H32L19.002 19.002 30.0176392 8z" />
      </LogoSvg>
    </LogoWrapper>
  ),
);

export default withTheme(NewsKitMobileLogo);
