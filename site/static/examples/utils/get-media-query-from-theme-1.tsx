import {getMediaQueryFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;

  /* @media screen and (min-width: 480px) */
  ${getMediaQueryFromTheme('sm')} {
    text-align: left;
  }
`;
