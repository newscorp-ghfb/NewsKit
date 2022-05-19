import React, {useEffect, useState} from 'react';
import {
  Divider,
  GridLayout,
  GridLayoutItem,
  IconOutlinedLaunch,
  Menu,
  MenuGroup,
  MenuItem,
  P,
  TextBlock,
} from 'newskit';
import {IconExpandLess, IconExpandMore} from '../icons';
import {MenuCollapsible, MobileNavigationDivider} from './styled';

export const GitHubLaunch: React.FC = () => (
  <GridLayout
    columns="1fr 24px"
    onClick={() => {
      window.open('https://github.com/newscorp-ghfb/newskit', '', '');
    }}
  >
    <GridLayoutItem>
      <P overrides={{typographyPreset: 'utilityLabel030'}}>Github</P>
    </GridLayoutItem>
    <GridLayoutItem>
      <IconOutlinedLaunch overrides={{size: 'iconSize020'}} />
    </GridLayoutItem>
  </GridLayout>
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
                {title.includes('Getting started') ||
                title.includes('Overview') ? (
                  <MenuItem
                    href={id}
                    selected={path.includes(id)}
                    overrides={{
                      minHeight: '40px',
                      stylePreset: 'sideBarNavigation',
                      typographyPreset: 'utilityButton020',
                      paddingInline: 'space060',
                      marginBlockEnd: 'space030',
                    }}
                    size="small"
                  >
                    {title}
                  </MenuItem>
                ) : (
                  <MenuItem
                    href={id}
                    selected={path.includes(id)}
                    overrides={{
                      minHeight: '40px',
                      stylePreset: 'sideBarNavigation',
                      typographyPreset: 'utilityButton020',
                      paddingInline: 'space060',
                    }}
                    size="small"
                  >
                    {title}
                  </MenuItem>
                )}
              </>
            ) : (
              <>
                <MenuGroup
                  title={title}
                  overrides={{
                    title: {
                      typographyPreset: 'utilityHeading010',
                      stylePreset: 'sidebarHeader',
                      spaceInline: 'space030',
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
            as="h5"
            aria-expanded={openPanelIds.includes(index) ? 'true' : 'false'}
            marginInline="space060"
            marginBlock="space040"
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
                <IconExpandLess
                  aria-haspopup="true"
                  aria-expanded="true"
                  overrides={{
                    size: 'iconSize020',
                    stylePreset: 'inkContrast',
                  }}
                />
              ) : (
                <IconExpandMore
                  aria-haspopup="false"
                  aria-expanded="false"
                  overrides={{
                    size: 'iconSize020',
                    stylePreset: 'inkContrast',
                  }}
                />
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
