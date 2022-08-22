import React from 'react';
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react';
import {
  Global,
  Visible,
  IconButton,
  Button,
  styled,
  getSpacingCssFromTheme,
} from 'newskit';
import {createPortal} from 'react-dom';
import {IconFilledSearch} from '../icons';
import {Mono} from '../flags';

import '@docsearch/css/dist/style.css';

const SearchIconContainer = styled(Visible)`
  ${getSpacingCssFromTheme('marginBottom', 'space010')};
`;

export const Search: React.FC = () => {
  const searchButtonRef = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [initialQuery, setInitialQuery] = React.useState(undefined);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = React.useCallback(
    event => {
      setIsOpen(true);
      setInitialQuery(event.key);
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  return (
    <>
      <SearchIconContainer xs sm md>
        <IconButton
          aria-label="Search"
          data-testid="search-icon-button"
          overrides={{
            stylePreset: 'iconButtonMinimalSecondary',
          }}
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
        >
          <IconFilledSearch />
        </IconButton>
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
              '--docsearch-modal-height': '650px',
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
              '--docsearch-hit-background': theme.colors.interface010,
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
          },
        })}
      />
    </>
  );
};
