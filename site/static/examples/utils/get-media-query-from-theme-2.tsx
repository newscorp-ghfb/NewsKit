import {getMediaQueryFromTheme, styled} from 'newskit';

const Paragraph = styled.p`
  text-align: center;

  /* @media screen and (min-width: 480px) and (max-width: 960px) */
  ${getMediaQueryFromTheme('sm', 'md')} {
    text-align: left;
  }
`;
