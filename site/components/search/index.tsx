import React from 'react';
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react';
import {Global, Layer, TextBlock, Visible, IconButton, Button} from 'newskit';
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
      <Visible xs sm>
        <IconButton
          aria-label="Search icon small"
          overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
        >
          <IconFilledSearch />
        </IconButton>
      </Visible>
      <Visible md>
        <IconButton
          aria-label="Search icon medium"
          overrides={{
            stylePreset: 'iconButtonMinimalSecondary',
            paddingBlock: 'space020',
          }}
          size="medium"
          ref={searchButtonRef}
          onClick={onOpen}
        >
          <IconFilledSearch />
        </IconButton>
      </Visible>
      <Visible lg xl>
        <Button
          ref={searchButtonRef}
          onClick={onOpen}
          overrides={{
            stylePreset: 'searchButton',
            typographyPreset: 'utilityButton030',
            iconSize: 'iconSize020',
          }}
        >
          <IconFilledSearch />
          <TextBlock marginInlineEnd="space050">Search</TextBlock>
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
            placeholder="Search"
            searchParameters={{
              hitsPerPage: 40,
            }}
            getMissingResultsUrl={({query}) =>
              `https://github.com/newscorp-ghfb/newskit/issues/new?title=${query}`
            }
            resultsFooterComponent={({state}) => (
              <TextBlock>{state.context.nbHits} hits found</TextBlock>
            )}
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
                theme.colors.inkBrand010,
              '--docsearch-footer-background': 'unset',
              '--docsearch-modal-background': theme.colors.interfaceBackground,
              '--docsearch-hit-color': theme.colors.inkContrast,
              '--docsearch-hit-active-color': theme.colors.inkBrand010,
              '--docsearch-hit-background': theme.colors.interface010,
              '--docsearch-highlight-color':
                theme.colors.interactiveSecondary010,
              '--docsearch-spacing': '20px',
              '--docsearch-container-background':
                theme.overlays.overlayTintBase040,
              '--docsearch-modal-width': '700px',
              '--docsearch-modal-height': '650px',
              '--docsearch-modal-shadow': theme.shadows.shadow60,
              '--docsearch-searchbox-height': '75px',
              '--docsearch-hit-height': '80px',
              '--docsearch-key-gradient': 'unset',
              '--docsearch-key-shadow': 'unset',
              '--docsearch-footer-height': '55px',
            },
          },
          body: {
            //   '.DocSearch-StartScreen': {
            //     display: 'none',
            //   },
            //   '& .DocSearch-NewStartScreen': {
            //     display: 'grid',
            //     gridTemplateColumns: 'repeat(2, 1fr)',
            //     gap: theme.spacing(2),
            //     padding: theme.spacing(2, 1),
            //   },
            //   '& .DocSearch-NewStartScreenCategory': {
            //     display: 'flex',
            //     flexDirection: 'column',
            //   },
            //   '& .DocSearch-NewStartScreenTitle': {
            //     display: 'flex',
            //     alignItems: 'center',
            //     padding: theme.spacing(1, 1),
            //     fontSize: theme.typography.pxToRem(14),
            //     color: theme.palette.text.secondary,
            //   },
            //   '& .DocSearch-NewStartScreenTitleIcon': {
            //     color:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[300]
            //         : theme.palette.primary[500],
            //     marginRight: theme.spacing(1.5),
            //     fontSize: theme.typography.pxToRem(16),
            //   },
            //   '& .DocSearch-NewStartScreenItem': {
            //     display: 'flex',
            //     alignItems: 'center',
            //     cursor: 'pointer',
            //     width: '100%',
            //     padding: theme.spacing(0.5, 4.6),
            //     color:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[300]
            //         : theme.palette.primary[500],
            //     fontWeight: 500,
            //     fontSize: theme.typography.pxToRem(14),
            //     '&:hover, &:focus': {
            //       '.DocSearch-NewStartScreenItemIcon': {
            //         marginLeft: theme.spacing(1),
            //       },
            //     },
            //   },
            //   '& .DocSearch-NewStartScreenItemIcon': {
            //     marginLeft: theme.spacing(0.5),
            //     transition: 'margin 0.2s',
            //     fontSize: theme.typography.pxToRem(16),
            //   },
            //   '& .DocSearch-Modal': {
            //     maxWidth: '700px',
            //     boxShadow: `0px 4px 20px ${
            //       theme.palette.mode === 'dark'
            //         ? alpha(theme.palette.background.paper, 0.7)
            //         : alpha(theme.palette.grey[700], 0.2)
            //     }`,
            //     ...(theme.palette.mode === 'dark' && {
            //       border: '1px solid',
            //       borderColor: theme.palette.primaryDark[700],
            //     }),
            //     // docsearch.css: <= 750px will be full screen modal
            //     borderRadius: `clamp(0px, (100vw - 750px) * 9999, ${theme.shape.borderRadius}px)`,
            //   },
            '.DocSearch-SearchBar': {
              padding: '20px 14px',
            },
            '#docsearch-label > svg': {
              width: theme.sizing.sizing060,
              height: theme.sizing.sizing060,
            },
            '.DocSearch-Hits .DocSearch-Hit-source': {
              color: theme.colors.inkContrast,
              margin: '15px -4px',
              padding: '8px 8px 0',
              fontFamily: theme.fonts.fontFamily030.fontFamily,
              fontSize: theme.fonts.fontSize030,
              lineHeight: theme.fonts.fontLineHeight020,
              fontWeight: theme.fonts.fontWeight040,
              letterSpacing: theme.fonts.fontLetterSpacing030,
            },
            '.DocSearch-Hit, #docsearch-input': {
              fontFamily: theme.fonts.fontFamily010.fontFamily,
              fontSize: theme.fonts.fontSize030,
              fontWeight: theme.fonts.fontWeight010,
              letterSpacing: theme.fonts.fontLetterSpacing030,
              lineHeight: theme.fonts.fontLineHeight040,
            },
            '.DocSearch-Hit': {
              color: theme.colors.inkContrast,
            },
            '#docsearch-input': {
              color: theme.colors.inkSubtle,
            },
            // '.DocSearch-MagnifierLabel, .DocSearch-Reset': {
            //   color: theme.colors.inkBrand010,
            // },
            //   '& .DocSearch-Form': {
            //     '& .DocSearch-Reset': {
            //       display: 'none',
            //     },
            //     '& .DocSearch-Input': {
            //       paddingLeft: theme.spacing(2.5),
            //     },
            //     '& .DocSearch-Search-Icon': {
            //       width: '20px',
            //       height: '20px',
            //     },
            //   },
            //   '& .DocSearch-Cancel': {
            //     display: 'block',
            //     alignSelf: 'center',
            //     height: '1.5rem',
            //     marginRight: theme.spacing(1),
            //     padding: theme.spacing(0.3, 0.8, 0.6, 0.8),
            //     fontSize: 0,
            //     borderRadius: 5,
            //     backgroundColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[800]
            //         : theme.palette.grey[50],
            //     border: '1px solid',
            //     borderColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[600]
            //         : theme.palette.grey[300],
            //     '&::before': {
            //       content: '"esc"',
            //       fontSize: theme.typography.pxToRem(12),
            //       letterSpacing: '.08rem',
            //       fontWeight: 700,
            //       color: theme.palette.text.secondary,
            //     },
            //   },
            //   '& .DocSearch-Dropdown': {
            //     minHeight: 384, // = StartScreen height, to prevent layout shift when first char
            //     '&::-webkit-scrollbar-thumb': {
            //       borderColor:
            //         theme.palette.mode === 'dark'
            //           ? theme.palette.primaryDark[900]
            //           : theme.palette.background.paper,
            //       backgroundColor:
            //         theme.palette.mode === 'dark'
            //           ? theme.palette.primaryDark[700]
            //           : theme.palette.grey[500],
            //     },
            //     '&::-webkit-scrollbar-track': {
            //       backgroundColor: theme.palette.background.paper,
            //     },
            //   },
            //   '& .DocSearch-Dropdown-Container': {
            //     '& .DocSearch-Hits:first-of-type': {
            //       '& .DocSearch-Hit-source': {
            //         paddingTop: theme.spacing(1),
            //       },
            //     },
            //   },
            //   '& .DocSearch-Hit-source': {
            //     top: 'initial',
            //     paddingTop: theme.spacing(2),
            //     background: theme.palette.background.paper,
            //     fontSize: theme.typography.pxToRem(13),
            //     fontWeight: 500,
            //     color: theme.palette.text.secondary,
            //   },
            //   '& .DocSearch-Hit': {
            //     paddingBottom: 0,
            //     '&:not(:first-of-type)': {
            //       marginTop: -1,
            //     },
            //   },
            //   '& .DocSearch-Hit a': {
            //     backgroundColor: 'transparent',
            //     padding: theme.spacing(0.25, 0),
            //     paddingLeft: theme.spacing(2),
            //     border: '1px solid transparent',
            //     borderBottomColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[700]
            //         : theme.palette.grey[100],
            //   },
            '.DocSearch-Hit-content-wrapper': {
              margin: '0 16px',
            },
            //   '& .DocSearch-Hit-title': {
            //     fontSize: theme.typography.pxToRem(14),
            //     color: `${theme.palette.text.primary}`,
            //   },
            //   '& .DocSearch-Hit-path': {
            //     fontSize: theme.typography.pxToRem(12),
            //     color: `${theme.palette.text.secondary}`,
            //   },
            //   '& .DocSearch-Hit-Select-Icon': {
            //     height: '15px',
            //     width: '15px',
            //   },
            //   '& .DocSearch-Hit[aria-selected="true"] a': {
            //     backgroundColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[800]
            //         : theme.palette.primary[50],
            //     borderColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[400]
            //         : theme.palette.primary[500],
            //     borderRadius: theme.shape.borderRadius,
            //   },
            '.DocSearch-Hits mark': {
              color: theme.colors.inkBrand020,
            },
            '.DocSearch-Commands': {
              display: 'none',
            },
            //   '.DocSearch-Footer': {
            //     borderTop: '1px solid',
            //     borderColor:
            //       theme.palette.mode === 'dark'
            //         ? theme.palette.primaryDark[700]
            //         : theme.palette.grey[200],
            //     '& .DocSearch-Commands': {
            //       display: 'none',
            //     },
            //   },
            // },
          },
        })}
      />
    </>
  );
};
