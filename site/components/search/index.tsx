import React from 'react';
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react';
import {Global, Layer, Visible, IconButton, Button} from 'newskit';
import {IconFilledSearch} from '../icons';
import {Mono} from '../flags';

import '@docsearch/css';

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
      <Visible xs sm md>
        <IconButton
          aria-label="Search"
          overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
        >
          <IconFilledSearch />
        </IconButton>
      </Visible>
      <Visible lg xl>
        <Button
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
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
      {isOpen && (
        <Layer>
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
          />
        </Layer>
      )}
      <Global
        styles={theme => ({
          html: {
            ':root': {
              '--docsearch-primary-color': theme.colors.inkBrand010,
              '--docsearch-text-color': theme.colors.inkContrast,
              '--docsearch-muted-color': theme.colors.inkSubtle,
              '--docsearch-searchbox-shadow': 0,
              '--docsearch-hit-shadow': 0,
              '--docsearch-footer-shadow': 0,
              '--docsearch-logo-color': theme.colors.inkNonEssential,
              '--docsearch-searchbox-focus-background':
                theme.colors.transparent,
              '--docsearch-footer-background': 'unset',
              '--docsearch-modal-background': theme.colors.interfaceBackground,
              '--docsearch-hit-color': theme.colors.inkContrast,
              '--docsearch-hit-active-color': theme.colors.inkContrast,
              '--docsearch-hit-background': theme.colors.interface010,
              '--docsearch-highlight-color': theme.colors.inkBrand010,
              '--docsearch-spacing': '20px',
              '--docsearch-container-background':
                theme.overlays.overlayTintBase040,
              '--docsearch-modal-width': '720px',
              '--docsearch-modal-height': '650px',
              '--docsearch-modal-shadow': theme.shadows.shadow060,
              '--docsearch-searchbox-height': '70px',
              '--docsearch-hit-height': '70px',
              '--docsearch-key-gradient': 'unset',
              '--docsearch-key-shadow': 'unset',
              '--docsearch-footer-height': '55px',
            },
          },
          body: {
            '.DocSearch-SearchBar': {
              padding: '15px 25px 15px 15px',
              borderBottom: '1px solid',
              borderColor: theme.colors.interface030,
            },
            '.DocSearch-Form': {
              '& .DocSearch-Input': {
                paddingLeft: '20px',
              },
              '& .DocSearch-Search-Icon': {
                width: '20px',
                height: '20px',
              },
            },
            '#docsearch-label': {
              color: theme.colors.inkBrand010,
            },
            '.DocSearch-Hit-source': {
              color: theme.colors.inkContrast,
              margin: '20px -8px',
              padding: '15px 8px 0',
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight020,
              fontWeight: theme.fonts.fontWeight040,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-Hit, #docsearch-input, .DocSearch-Cancel': {
              fontFamily: theme.fonts.fontFamily010.fontFamily,
              fontSize: theme.fonts.fontSize030,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing030,
              lineHeight: theme.fonts.fontLineHeight040,
            },
            '.DocSearch-Hit a': {
              backgroundColor: theme.colors.transparent,
              padding: '2.5px 0px 2.5px 30px',
              border: '1px solid transparent',
              borderBottomColor: theme.colors.interface020,
            },
            '.DocSearch-Hit-content-wrapper': {
              paddingLeft: '20px',
            },
            '.DocSearch-Hit[aria-selected="true"] a': {
              borderColor: theme.colors.inkBrand010,
              borderRadius: theme.borders.borderRadiusDefault,
              backgroundColor: theme.colors.interactivePrimary010,
            },
            '.DocSearch-Footer': {
              color: theme.colors.inkSubtle,
              borderTop: '1px solid',
              borderColor: theme.colors.interface030,
              '&.DocSearch-Label': {
                fontFamily: theme.fonts.fontFamily010.fontFamily,
                fontSize: theme.fonts.fontSize010,
                lineHeight: theme.fonts.fontLineHeight040,
                fontWeight: theme.fonts.fontWeight010,
                letterSpacing: theme.fonts.fontLetterSpacing050,
              },
              '&.DocSearch-Commands': {
                display: 'none',
              },
            },
            '.DocSearch-Help': {
              color: theme.colors.inkContrast,
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight020,
              fontWeight: theme.fonts.fontWeight020,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-Help a': {
              color: theme.colors.inkBrand010,
              '&:visited': {
                color: theme.colors.interactiveVisited010,
              },
            },
            '.DocSearch-NoResults': {
              color: theme.colors.inkContrast,
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight020,
              fontWeight: theme.fonts.fontWeight020,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-NoResults-Prefill-List > ul > li': {
              listStyle: 'none',
            },
            '.DocSearch-Reset': {
              color: theme.colors.inkContrast,
              '&:hover': {
                color: theme.colors.inkBrand010,
              },
              '&:active': {
                color: theme.colors.inkBrand010,
              },
            },
          },
        })}
      />
    </>
  );
};
