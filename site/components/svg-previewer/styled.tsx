import {Button, styled, GridLayout, getColorCssFromTheme} from 'newskit';

export const StyledSingleSVGDownloadButton = styled(Button)`
  margin-right: 20px;
`;

export const StyledSvgGroupContainer = styled(GridLayout)``;

export const StyledSvgPreviewerContainer = styled(GridLayout)`
  /*
  display: flex;
  flex-direction: column;
  align-items: center;
  */
`;

export const StyledButtonsContainer = styled(GridLayout)`
  position: fixed;
  top: var(--headerSize);
  margin-top: -12px;
  ${getColorCssFromTheme('background', 'interface020')}
  ${getColorCssFromTheme('borderBottomColor', 'interface040')}
  border-bottom-width: 1px;
  border-bottom-style: solid;
  z-index: 1000;
`;

export const StyledSingleSvgWrapper = styled.div`
  padding: 0 10vw;
  svg {
    max-width: 80vw;
    max-height: 80vh;
  }
`;
