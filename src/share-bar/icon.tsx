import React from 'react';
import {styled} from '../utils/style';
import {Theme} from '../themes';
import {Link} from '../link';
import {
  Comment,
  Email,
  Facebook,
  SaveActive,
  Twitter,
  WhatsApp,
  Bookmark,
  CopyLink,
} from '../icons';

export const shareBarIcons = {
  comment: Comment,
  email: Email,
  facebook: Facebook,
  save: SaveActive,
  twitter: Twitter,
  whatsApp: WhatsApp,
  bookmark: Bookmark,
  copy: CopyLink,
};

type ShareBarKeys = keyof typeof shareBarIcons;

export interface IconProps {
  type: ShareBarKeys;
  $borderEnabled?: boolean;
  label?: string;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

interface WrapperProps {
  $borderEnabled?: boolean;
}

const Wrapper = styled.div<WrapperProps & {theme?: Theme}>`
  height: ${({theme}) => theme.sizing.sizing070};
  width: ${({theme}) => theme.sizing.sizing070};

  ${({$borderEnabled, theme}) =>
    $borderEnabled &&
    `
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: ${`1px solid ${theme.colors.shareIconBorder}`};
  `}

  svg {
    margin: auto;
  }

  :hover {
    ${({$borderEnabled, theme}) =>
      $borderEnabled &&
      `
      border: ${`1px solid ${theme.colors.shareIconHoverBorder}`};
      background-color: ${theme.colors.shareIconHoverBackground};
    `}

    svg {
      fill: ${({theme}) => theme.colors.shareIconHoverFill};
      color: ${({theme}) => theme.colors.shareIconHoverFill};
    }
  }
`;

export const Icon: React.FC<IconProps> = ({
  type,
  $borderEnabled = false,
  href,
  onClick,
}) => {
  const SelectedIcon = shareBarIcons[type];

  if (!SelectedIcon) {
    return null;
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13 && onClick) {
      onClick();
    }
  };

  const icon = (
    <Wrapper $borderEnabled={$borderEnabled}>
      <SelectedIcon $color="shareIconFill" $size="iconSize020" />
    </Wrapper>
  );

  const sharedProps = {'data-testid': 'share-bar-icon', onClick, onKeyDown};

  return href ? (
    <Link href={href} {...sharedProps}>
      {icon}
    </Link>
  ) : (
    <div role="button" {...sharedProps}>
      {icon}
    </div>
  );
};

Icon.displayName = 'Icon';
