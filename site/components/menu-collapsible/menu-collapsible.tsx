import React, {useEffect, useState} from 'react';
import {
  Divider,
  GridLayout,
  IconButton,
  Menu,
  MenuGroup,
  MenuItem,
  P,
  TextBlock,
  toNewsKitIcon,
} from 'newskit';
import LinkNext from 'next/link';
import {Launch as OutlinedLaunch} from '@emotion-icons/material-outlined/Launch';
import {IconExpandLess, IconExpandMore} from '../icons';
import {MenuCollapsible, MobileNavigationDivider, StyledAnchor} from './styled';

const IconOutlinedLaunch = toNewsKitIcon(OutlinedLaunch);

export const GitHubLaunch: React.FC = () => (
  <StyledAnchor href="https://github.com/newscorp-ghfb/newskit">
    <GridLayout columns="1fr 24px">
      <P overrides={{typographyPreset: 'utilityLabel030'}}>Github</P>
      <IconOutlinedLaunch overrides={{size: 'iconSize020'}} />
    </GridLayout>
  </StyledAnchor>
);

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

export const MenuMobileCollapsible = ({
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
              <LinkNext href={id}>
                <MenuItem
                  href={id}
                  selected={path.includes(id)}
                  overrides={{
                    minHeight: '40px',
                    stylePreset: 'sideBarNavigation',
                    typographyPreset: 'utilityButton020',
                    paddingInline: 'space090',
                    marginBlockEnd:
                      id.includes('theme/overview') ||
                      id.includes('/components/overview') ||
                      id.includes('/getting-started/overview') ||
                      id.includes('/patterns/overview')
                        ? 'space030'
                        : undefined,
                  }}
                  size="small"
                >
                  {title}
                </MenuItem>
              </LinkNext>
            ) : (
              <>
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: 'utilityHeading010',
                      stylePreset: 'sidebarHeader',
                      spaceInline: 'space030',
                      spaceInset: 'space080',
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
      aria-label="sidebar-secondary-navigation"
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
          <TextBlock
            as="h3"
            marginInline="space060"
            marginBlock="space010"
            typographyPreset="utilityHeading020"
            onClick={() =>
              openPanelIds.includes(index)
                ? setOpenPanelIds([])
                : setOpenPanelIds([index])
            }
          >
            <GridLayout columns="1fr auto" columnGap="20px">
              {title}
              {openPanelIds.includes(index) ? (
                <IconButton
                  aria-label={`Show sub-menu for ${title}`}
                  aria-expanded={
                    openPanelIds.includes(index) ? 'true' : 'false'
                  }
                  overrides={{
                    stylePreset: 'iconButtonMinimalPrimary',
                  }}
                >
                  <IconExpandLess
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'inkContrast',
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton
                  aria-label={`Hide sub-menu for ${title}`}
                  aria-expanded={
                    openPanelIds.includes(index) ? 'true' : 'false'
                  }
                  overrides={{
                    stylePreset: 'iconButtonMinimalPrimary',
                  }}
                >
                  <IconExpandMore
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'inkContrast',
                    }}
                  />
                </IconButton>
              )}
            </GridLayout>
          </TextBlock>

          {subNav && createMenuItem(subNav)}
        </MenuCollapsible>
      ))}

      <MobileNavigationDivider>
        <Divider />
      </MobileNavigationDivider>
    </Menu>
  );
};
