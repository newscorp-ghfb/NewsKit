import React, {useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react';

import {
  Global,
  Visible,
  IconButton,
  Button,
  styled,
  getSpacingCssFromTheme,
  ThemeProvider,
  useTheme,
} from 'newskit';
import {createPortal} from 'react-dom';
import {DocSearchHit} from '@docsearch/react/dist/esm/types';
import {IconFilledSearch} from '../icons';
import {Mono} from '../flags';
import {SearchProps} from './types';
import {addPathname, ignoreFilter} from './utils';
import {DocSearchHit as DocSearchHitComponent} from './doc-search-hit';

import '@docsearch/css/dist/style.css';
import {NewStartScreen} from './new-start-screen';

const SearchIconContainer = styled(Visible)`
  ${getSpacingCssFromTheme('marginBottom', 'space010')};
`;

// small fix for not being able to locate stylesheet for next screen at run time.
const HiddenDiv = styled.div`
  display: none;
`;

export const Search: React.FC<SearchProps> = ({sidebarOpen}) => {
  const searchButtonRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialQuery, setInitialQuery] = React.useState<string | undefined>(
    undefined,
  );

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback<(event: KeyboardEvent) => void>(
    event => {
      setIsOpen(true);
      setInitialQuery(event.key);
    },
    [setIsOpen, setInitialQuery],
  );

  const themeForStartScreen = useTheme();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const addStartScreen = () => {
      const dropDown = document.querySelector('.DocSearch-Dropdown');
      const isExisting = document.querySelector(
        '.DocSearch-Modal .DocSearch-NewStartScreen',
      );
      if (dropDown && !isExisting) {
        dropDown.insertAdjacentHTML(
          'beforeend',
          ReactDOMServer.renderToStaticMarkup(
            <ThemeProvider theme={themeForStartScreen}>
              <NewStartScreen />
            </ThemeProvider>,
          ),
        );
      }
    };
    if (isOpen) {
      const modal = document.querySelector('.DocSearch-Container');
      const searchInput = document.querySelector('.DocSearch-Input');
      if (modal) {
        addStartScreen();
      }
      if (searchInput) {
        const handleInput: EventListener = event => {
          const newStartScreen = document.querySelector<HTMLDivElement>(
            '.DocSearch-Modal .DocSearch-NewStartScreen',
          );
          if (newStartScreen) {
            const {value} = event.target as HTMLInputElement;
            newStartScreen.style.display = value !== '' ? 'none' : 'flex';
          }
        };
        searchInput.addEventListener('input', handleInput);
        return () => {
          searchInput.removeEventListener('input', handleInput);
        };
      }
    }
  }, [isOpen, themeForStartScreen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <HiddenDiv>
        <NewStartScreen />
      </HiddenDiv>
      <SearchIconContainer xs sm md>
        {sidebarOpen ? undefined : (
          <IconButton
            aria-label="Search"
            data-testid="search-icon-button"
            overrides={{
              stylePreset: 'iconButtonMinimalPrimary',
            }}
            ref={searchButtonRef}
            onClick={onOpen}
          >
            <IconFilledSearch
              overrides={{size: 'iconSize020', stylePreset: 'inkContrast'}}
            />
          </IconButton>
        )}
      </SearchIconContainer>
      <Visible lg xl>
        <Button
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
          data-testid="search-button"
          overrides={{
            typographyPreset: 'utilityButton010',
            stylePreset: 'buttonOutlinedSecondary',
            minWidth: '130px',
            height: '40px',
          }}
        >
          <IconFilledSearch />
          Search
          <Mono overrides={{stylePreset: 'flagSolidPrimary'}}>⌘K</Mono>
        </Button>
      </Visible>

      {isOpen &&
        createPortal(
          <DocSearchModal
            appId="COXG0SA519"
            apiKey="61ea0de79ad0ae0839c9ad502c248267"
            indexName="newskit"
            onClose={onClose}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            placeholder="Search..."
            searchParameters={{
              hitsPerPage: 40,
            }}
            getMissingResultsUrl={({query}) =>
              `https://github.com/newscorp-ghfb/newskit/issues/new?title=${query}`
            }
            hitComponent={DocSearchHitComponent}
            transformItems={(items: DocSearchHit[]) =>
              items.filter(ignoreFilter).map(addPathname) as DocSearchHit[]
            }
          />,
          document.body,
        )}
      <Global
        styles={theme => ({
          html: {
            ':root': {
              '--docsearch-primary-color': theme.colors.inkBrand010,
              '--docsearch-text-color': theme.colors.inkContrast,
              '--docsearch-muted-color': theme.colors.inkSubtle,
              '--docsearch-spacing': '20px',
              '--docsearch-highlight-color': theme.colors.inkBrand010,
              '--docsearch-container-background':
                theme.overlays.overlayTintBase040,
              '--docsearch-logo-color': theme.colors.inkNonEssential,

              // modal
              '--docsearch-modal-background': theme.colors.interfaceBackground,
              '--docsearch-modal-width': '720px',
              '--docsearch-modal-height': '850px',
              '--docsearch-modal-shadow': theme.shadows.shadow060,

              // searchbox
              '--docsearch-searchbox-focus-background':
                theme.colors.transparent,
              '--docsearch-searchbox-height': '70px',
              '--docsearch-searchbox-shadow': 0,

              // hit
              '--docsearch-hit-shadow': 0,
              '--docsearch-hit-color': theme.colors.inkContrast,
              '--docsearch-hit-active-color': theme.colors.inkContrast,
              '--docsearch-hit-background': theme.colors.interface020,
              '--docsearch-hit-height': '70px',

              // key
              '--docsearch-key-gradient': 'unset',
              '--docsearch-key-shadow': 'unset',

              // footer
              '--docsearch-footer-shadow': 0,
              '--docsearch-footer-background': 'unset',
              '--docsearch-footer-height': '55px',
            },
          },
          body: {
            // Modal Searchbox
            '.DocSearch-SearchBar': {
              padding: '15px 25px 15px 15px',
              borderBottom: '1px solid',
              borderColor: theme.colors.interface030,
            },
            '.DocSearch-Input': {
              paddingLeft: '20px',
              fontFamily: theme.fonts.fontFamily010.fontFamily,
              fontSize: theme.fonts.fontSize030,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing030,
              lineHeight: theme.fonts.fontLineHeight040,
            },
            '.DocSearch-Search-Icon': {
              width: '20px',
              height: '20px',
            },
            '.DocSearch-Reset': {
              color: 'var(--docsearch-text-color)',
              '&:hover': {
                color: 'var(--docsearch-primary-color)',
              },
              '&:active': {
                color: 'var(--docsearch-muted-color)',
              },
            },
            '.DocSearch-Cancel': {
              fontFamily: theme.fonts.fontFamily010.fontFamily,
              fontSize: theme.fonts.fontSize030,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing030,
              lineHeight: theme.fonts.fontLineHeight040,
            },
            // Modal Dropdown
            '.DocSearch-Label': {
              color: 'var(--docsearch-logo-color)',
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize010,
              lineHeight: theme.fonts.fontLineHeight040,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing040,
            },
            // Hit
            '.DocSearch-Hit-source': {
              color: 'var(--docsearch-text-color)',
              margin: '20px -8px',
              padding: '15px 8px 0',
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight020,
              fontWeight: theme.fonts.fontWeight040,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-Hit': {
              fontFamily: theme.fonts.fontFamily010.fontFamily,
              fontSize: theme.fonts.fontSize030,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing030,
              lineHeight: theme.fonts.fontLineHeight040,
              '& a': {
                backgroundColor: theme.colors.transparent,
                padding: '2.5px 0px 2.5px 30px',
                border: '1px solid transparent',
                borderBottomColor: theme.colors.interface020,
              },
            },
            '.DocSearch-Hit-Container': {
              flex: '1',
              minWidth: '0',
            },
            '.DocSearch-Hit-content-wrapper': {
              paddingLeft: '20px',
            },
            '.DocSearch-Hit[aria-selected="true"] a': {
              borderColor: 'var(--docsearch-primary-color)',
              borderRadius: theme.borders.borderRadiusDefault,
              backgroundColor: theme.colors.interactivePrimary010,
            },
            // Footer
            '.DocSearch-Footer': {
              color: 'var(--docsearch-muted-color)',
              borderTop: '1px solid',
              borderColor: theme.colors.interface030,
            },
            '.DocSearch-Commands': {
              display: 'none',
            },
            // No Results
            '.DocSearch-NoResults': {
              color: 'var(--docsearch-text-color)',
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight040,
              fontWeight: theme.fonts.fontWeight020,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-Help': {
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize020,
              lineHeight: theme.fonts.fontLineHeight060,
              fontWeight: theme.fonts.fontWeight020,
              letterSpacing: theme.fonts.fontLetterSpacing040,
              '& a': {
                color: 'var(--docsearch-primary-color)',
                '&:visited': {
                  color: theme.colors.interactiveVisited010,
                },
              },
            },
            '.DocSearch-NoResults-Prefill-List > ul > li': {
              listStyle: 'none',
            },
            // Make sure the NewStartScreen is always underneath the recent
            // searches container (without this the order flips as elements are
            // removed and re-added to the DOM by DocSearch).
            '.DocSearch-Dropdown': {
              display: 'flex',
              flexDirection: 'column',
            },
            '.DocSearch-Dropdown-Container': {
              order: 1,
            },
            '.DocSearch-Modal .DocSearch-NewStartScreen': {
              order: 2,
            },
          },
        })}
      />
    </>
  );
};
