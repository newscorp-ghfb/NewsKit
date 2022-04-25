import React, {useEffect, useState} from 'react';
import {
  Block,
  ButtonSize,
  Divider,
  Flow,
  getSpacingCssFromTheme,
  H3,
  IconButton,
  IconOutlinedLaunch,
  Menu,
  MenuGroup,
  MenuItem,
  Stack,
  styled,
} from 'newskit';
import {IconExpandLess, IconExpandMore} from '../icons';
import {MenuCollapsible} from './styled';

const MobileNavigationDivider = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  ${getSpacingCssFromTheme('marginTop', 'space050')};
  ${getSpacingCssFromTheme('marginBottom', 'space050')};
`;

export const GitHubLaunch: React.FC<{href?: string}> = ({href}) =>
  href ? (
    <Stack flow={Flow.HorizontalCenter} stackDistribution="space-between">
      <H3 overrides={{typographyPreset: 'utilityLabel030'}}>Github</H3>
      <IconButton
        size={ButtonSize.Small}
        aria-label="github link"
        href={href}
        target="_blank"
        overrides={{
          stylePreset: 'iconButtonMinimalSecondary',
        }}
      >
        <IconOutlinedLaunch overrides={{size: 'iconSize020'}} />
      </IconButton>
    </Stack>
  ) : null;
type NavProps = {
  title: string;
  id: string;
  description?: string;
  page?: boolean;
};

type SubNavProps = {
  subNav?: NavProps[];
};

type SubNavItemProps = NavProps & SubNavProps;

export const MenuNavCollapsible = ({
  path,
  menu,
}: {
  path: string;
  menu: SubNavItemProps[];
}) => {
  const [openPanelIds, setOpenPanelIds] = useState<Array<number>>([]);
  useEffect(() => {
    const index = menu.findIndex(obj => path.includes(obj.id)) || 0;
    setOpenPanelIds([index]);
  }, []);
  const createMenuItem = (list: SubNavItemProps[]) => (
    <>
      {list &&
        list.map(({title, id, subNav, page}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                <MenuItem
                  id="hello"
                  href={id}
                  overrides={{
                    typographyPreset: 'utilityButton020',
                    spaceInset: 'space030',
                    stylePreset: 'sidebarNavItem',
                    minHeight: '40px',
                    // if i remove min-height then it is 48px
                    // added here as it adds height to unselected
                    // unselected and selected are now the same height
                  }}
                  selected={path.includes(id)}
                  size="small"
                  className={path.includes(id) ? 'selected' : undefined}
                >
                  {title}
                </MenuItem>
              </>
            ) : (
              <>
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: {
                        xs: 'utilityHeading010',
                        lg: 'utilityHeading030',
                      },
                      stylePreset: 'inkContrast',
                      spaceInset: 'space030',
                      spaceInline: 'space040',
                    },
                  }}
                >
                  {subNav && createMenuItem(subNav)}
                </MenuGroup>
              </>
            )}
          </React.Fragment>
        ))}
    </>
  );
  return (
    <Menu
      aria-label="menu"
      vertical
      size="small"
      align="start"
      overrides={{spaceInline: 'space000'}}
    >
      {menu.map(({title, subNav}, index) => (
        <MenuCollapsible
          className={openPanelIds.includes(index) ? 'expanded' : 'collapsed'}
          key={title}
        >
          <H3
            role="menuitem"
            aria-expanded={openPanelIds.includes(index) ? 'true' : 'false'}
            overrides={{typographyPreset: 'utilityHeading020'}}
            onClick={() =>
              openPanelIds.includes(index)
                ? setOpenPanelIds([])
                : setOpenPanelIds([index])
            }
          >
            <Stack
              flow={Flow.HorizontalCenter}
              stackDistribution="space-between"
            >
              <span aria-label={title}>{title}</span>

              {openPanelIds.includes(index) ? (
                <IconExpandLess aria-haspopup="true" aria-expanded="true" />
              ) : (
                <IconExpandMore aria-haspopup="false" aria-expanded="false" />
              )}
            </Stack>
          </H3>
          {subNav && createMenuItem(subNav)}
        </MenuCollapsible>
      ))}
      <Block spaceStack="space050" />

      <MobileNavigationDivider>
        <Divider />
      </MobileNavigationDivider>
    </Menu>
  );
};
