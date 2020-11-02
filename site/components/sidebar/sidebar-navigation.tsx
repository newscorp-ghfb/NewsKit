import React, {useState} from 'react';
import {IconFilledArrowDropDown, IconFilledArrowDropUp} from 'newskit';
import {Link} from '../link';
import routes from '../../routes.json';
import {
  NavItemContainer,
  SubNavContainer,
  StyledNavItem,
  StyledContainer,
} from './styled';
import {Item} from './types';
import {handleEnterKeyPress} from '../../helpers/a11y';

const renderIcon = ({
  active,
  hasSubNav,
}: {
  active: Boolean;
  hasSubNav: Boolean;
}) => {
  if (!hasSubNav) {
    return null;
  }

  return active ? (
    <IconFilledArrowDropDown
      overrides={{size: 'iconSize020', stylePreset: 'arrowIcon'}}
    />
  ) : (
    <IconFilledArrowDropUp
      overrides={{size: 'iconSize020', stylePreset: 'arrowIcon'}}
    />
  );
};

const getToggledId = (path: string, id: string, level: number) => {
  let newId = id;

  if (path.includes(newId) && level === 0) {
    newId = '/';
  }

  if (path.includes(newId) && level === 1) {
    const position = newId.lastIndexOf('/');
    newId = newId.slice(0, position + 1);
  }

  return newId;
};

const NavItem: React.FC<{
  item: Item;
  path: string;
  level: number;
  setOpenId: (id: string) => void;
}> = ({path, level, item: {title, id, page, subNav}, setOpenId}) => {
  const hasActiveChild = path.includes(id);

  const rootActive = !path && id === '/index';

  const linkActive = path === id || rootActive;

  const linkActiveChild = hasActiveChild || rootActive;

  const handleSubNavOnEnter = () => setOpenId(getToggledId(path, id, level));

  const child = (
    <StyledNavItem
      data-testid={id}
      level={level}
      active={page ? linkActive : path === id}
      hasActiveChild={page ? linkActiveChild : hasActiveChild}
      onClick={() => setOpenId(getToggledId(path, id, level))}
      onKeyDown={handleEnterKeyPress(handleSubNavOnEnter)}
      tabIndex={page ? -1 : 0}
    >
      {title}
      {renderIcon({
        active: !page ? !hasActiveChild : !path.includes(id),
        hasSubNav: !!subNav,
      })}
    </StyledNavItem>
  );

  return page ? (
    <Link href={id} noUnderline>
      {child}
    </Link>
  ) : (
    child
  );
};

const renderNavItem = (
  path: string = '',
  item: Item,
  index: number,
  level: number,
  setOpenId: (id: string) => void,
) => (
  <NavItemContainer key={`${level}-${index}`}>
    <NavItem path={path} level={level} item={item} setOpenId={setOpenId} />
    {item.subNav && path.includes(item.id) && (
      <SubNavContainer role="list">
        {item.subNav.map((subitem, idx) =>
          renderNavItem(path, subitem, idx, level + 1, setOpenId),
        )}
      </SubNavContainer>
    )}
  </NavItemContainer>
);

export const SidebarNav: React.FC<{path: string}> = ({path}) => {
  const [openId, setOpenId] = useState<string>(path);

  return (
    <StyledContainer role="navigation" aria-label="Sidebar">
      <SubNavContainer role="list">
        {routes.map((item, index) =>
          renderNavItem(openId, item, index, 0, setOpenId),
        )}
      </SubNavContainer>
    </StyledContainer>
  );
};
