import React, {useEffect, useState} from 'react';
import {
  ButtonSize,
  Divider,
  Flow,
  getSpacingCssFromTheme,
  H3,
  IconButton,
  IconOutlinedLaunch,
  Label,
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
  }, [menu, path]);

  const createMenuItem = (list: SubNavItemProps[]) => (
    <>
      {list &&
        list.map(({title, id, subNav, page}) => (
          <React.Fragment key={id}>
            {page ? (
              <>
                <MenuItem
                  href={id}
                  overrides={{
                    minHeight: '40px',
                  }}
                  size="small"
                  className={path.includes(id) ? 'selected' : undefined}
                >
                  <Label
                    overrides={{
                      stylePreset: 'interactivePrimary030',
                      typographyPreset: 'utilityButton020',
                      spaceStack: 'space000',

                      marginInline: 'space045',
                    }}
                  >
                    {title}
                  </Label>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: 'utilityHeading010',
                      stylePreset: ' menuItemVertical',
                      spaceInline: 'space030',
                      // to make spaceinset work you need to check marginInline on the titles
                      spaceInset: 'space060',
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
          <Label
            // role="menuitem"
            aria-expanded={openPanelIds.includes(index) ? 'true' : 'false'}
            overrides={{
              // spaceInline: cardLabel,
              typographyPreset: 'utilityHeading020',
            }}
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
                <IconExpandLess
                  aria-haspopup="true"
                  aria-expanded="true"
                  overrides={{size: 'iconSize020', stylePreset: 'inkContrast'}}
                />
              ) : (
                <IconExpandMore
                  aria-haspopup="false"
                  aria-expanded="false"
                  overrides={{size: 'iconSize020', stylePreset: 'inkContrast'}}
                />
              )}
            </Stack>
          </Label>

          {subNav && createMenuItem(subNav)}
        </MenuCollapsible>
      ))}

      <MobileNavigationDivider>
        <Divider />
      </MobileNavigationDivider>
    </Menu>
  );
};
