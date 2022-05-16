import React, {useEffect, useState} from 'react';
import {
  Divider,
  getSpacingCssFromTheme,
  GridLayout,
  GridLayoutItem,
  H3,
  IconOutlinedLaunch,
  Menu,
  MenuGroup,
  MenuItem,
  styled,
  TextBlock,
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

const StyledAnchor = styled.a`
  text-decoration: none;
`;

const MenuItemStyled = styled(MenuItem)`
  ${({selected}) =>
    selected ? getSpacingCssFromTheme('paddingInline', '28px') : undefined}
  width: 100vw;
`;
export const GitHubLaunch: React.FC<{href?: string}> = () => (
  <StyledAnchor href="https://github.com/newscorp-ghfb/newskit">
    <GridLayout columns="1fr 24px">
      <GridLayoutItem>
        <H3 overrides={{typographyPreset: 'utilityLabel030'}}>Github</H3>
      </GridLayoutItem>
      <GridLayoutItem>
        <IconOutlinedLaunch overrides={{size: 'iconSize020'}} />
      </GridLayoutItem>
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
                  <MenuItemStyled
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
                  </MenuItemStyled>
                ) : (
                  <MenuItemStyled
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
                  </MenuItemStyled>
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
            aria-expanded={openPanelIds.includes(index) ? 'true' : 'false'}
            marginInline="space060"
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
