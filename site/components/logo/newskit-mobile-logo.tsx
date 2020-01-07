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
  width: ${getSizingFromTheme('spacingSize070')};
  height: ${getSizingFromTheme('spacingSize070')};
  overflow: hidden;
`;

interface NewsKitMobileLogo {
  viewBox?: string;
  $color: ColorKeys;
  $size: SizingKeys;
}

const LogoSvg = styled.svg<NewsKitMobileLogo>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
`;

type LogoWrapperRef = HTMLDivElement;
type LogoWithTheme = NewsKitMobileLogo & {theme: Theme};

const NewsKitMobileLogo = React.forwardRef<LogoWrapperRef, LogoWithTheme>(
  (props, ref) => (
    <LogoWrapper ref={ref}>
      <LogoSvg viewBox="0 0 40 40" {...props}>
        <title>NewsKit Mobile Logo</title>
        <path
          fill="#000"
          fillOpacity=".87"
          fillRule="evenodd"
          d="M40 0v40H0V0h40zm-9.9823608 8H24L12 19.999V8H8v24h4v-6.004L16.001 22l10.0031809 10H32L19.002 19.002 30.0176392 8z"
        />
      </LogoSvg>
    </LogoWrapper>
  ),
);

export default withTheme(NewsKitMobileLogo);
