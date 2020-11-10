import React from 'react';
import {Link} from '../link';
import routes from '../../routes.json';
import {
  NavItemContainer,
  SubNavContainer,
  StyledDefaultNavItem,
  StyledContainer,
  StyledFirstLevelHeader,
  StyledSecondLevelHeader,
} from './styled';
import {Item} from './types';

const checkNavItemLevel = (
  itemLevel: number,
  isPage: boolean,
  itemIndex: number,
) => itemLevel === itemIndex && isPage;

const NavItem: React.FC<{
  item: Item;
  path: string;
  level: number;
}> = ({path, level, item: {title, id, page}}) => {
  const isFirstLevelHeader = checkNavItemLevel(level, !page, 0);
  const isSecondLevelHeader = checkNavItemLevel(level, !page, 1);

  const firstNavItem = title === 'About';

  const rootActive = !path && id === '/index';

  const linkActive = path === id || rootActive;

  const child = (
    <div>
      {isFirstLevelHeader && (
        <StyledFirstLevelHeader firstNavItem={!!firstNavItem} data-testid={id}>
          {title}
        </StyledFirstLevelHeader>
      )}
      {isSecondLevelHeader && (
        <StyledSecondLevelHeader data-testid={id}>
          {title}
        </StyledSecondLevelHeader>
      )}
      {!isFirstLevelHeader && !isSecondLevelHeader && (
        <StyledDefaultNavItem data-testid={id} active={linkActive}>
          {title}
        </StyledDefaultNavItem>
      )}
    </div>
  );

  return page ? (
    <Link href={id} overrides={{stylePreset: 'linkNoUnderline'}}>
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
) => (
  <NavItemContainer key={`${level}-${index}`}>
    <NavItem path={path} level={level} item={item} />
    {item.subNav && (
      <SubNavContainer role="list">
        {item.subNav.map((subitem, idx) =>
          renderNavItem(path, subitem, idx, level + 1),
        )}
      </SubNavContainer>
    )}
  </NavItemContainer>
);

export const SidebarNav: React.FC<{path: string}> = ({path}) => (
  <StyledContainer role="navigation" aria-label="Sidebar">
    <SubNavContainer role="list">
      {routes.map((item, index) => renderNavItem(path, item, index, 0))}
    </SubNavContainer>
  </StyledContainer>
);
