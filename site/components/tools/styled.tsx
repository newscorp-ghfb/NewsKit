import {Button, styled} from 'newskit';

export const StyledSingleSVGDownloadButton = styled(Button)`
  margin-right: 20px;
`;

export const StyledSvgGroupContainer = styled.div`
  max-width: 80vw;
  svg {
    max-width: 80vw;
    max-height: 80vh;
  }
`;

export const StyledSvgPreviewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const StyledButtonsContainer = styled.div`
  position: fixed;
  top: 50px;
`;

export const StyledSingleSvgWrapper = styled.div`
  margin-bottom: 20px;
`;
