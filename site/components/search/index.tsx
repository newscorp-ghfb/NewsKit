import React from 'react';
import {DocSearchModal, useDocSearchKeyboardEvents} from '@docsearch/react';
import {Global, Layer, TextBlock, Visible, IconButton, Button} from 'newskit*';
import {IconOutlinedSearch} from '../icons';
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
      <Visible xs sm md lg>
        <IconButton
          aria-label="Search icon"
          overrides={{stylePreset: 'iconButtonMinimalSecondary'}}
          size="small"
          ref={searchButtonRef}
          onClick={onOpen}
        >
          <IconOutlinedSearch />
        </IconButton>
      </Visible>
      <Visible xl>
        <Button
          ref={searchButtonRef}
          onClick={onOpen}
          overrides={{
            stylePreset: 'searchButton',
            typographyPreset: 'utilityButton020',
          }}
        >
          <IconOutlinedSearch />
          <TextBlock
            paddingBlock="space010"
            paddingInline="space020"
            marginInlineEnd="space080"
          >
            Search
          </TextBlock>
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
          />
        </Layer>
      )}
      <Global
        styles={theme => ({
          html: {
            ':root': {
              '--docsearch-primary-color': theme.colors.inkBrand010,
              '--docsearch-text-color': theme.colors.inkSubtle,
              '--docsearch-muted-color': theme.colors.inkSubtle,
              '--docsearch-searchbox-shadow': 0,
              '--docsearch-hit-shadow': 0,
              '--docsearch-footer-shadow': 0,
              '--docsearch-spacing': theme.sizing.space030,
              // '--docsearch-hit-active-color': theme.colors.white,
              '--docsearch-logo-color': theme.colors.inkBrand010,
              '--docsearch-searchbox-focus-background': 'unset',
              '--docsearch-footer-background': 'unset',
              '--docsearch-modal-background': theme.colors.white,
            },
          },
          // body: {
          //   '.DocSearch-Container': {
          //     transition: `opacity ${FADE_DURATION}ms`,
          //     opacity: 0,
          //     zIndex: theme.zIndex.tooltip + 100,
          //     backgroundColor:
          //       theme.palette.mode === 'dark'
          //         ? alpha(theme.palette.grey[900], 0.7)
          //         : alpha(theme.palette.grey[600], 0.2),
          //     backdropFilter: 'blur(4px)',
          //   },
          //   '& .DocSearch-StartScreen': {
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
          //   '& .DocSearch-SearchBar': {
          //     borderBottom: '1px solid',
          //     borderColor:
          //       theme.palette.mode === 'dark'
          //         ? theme.palette.primaryDark[700]
          //         : theme.palette.grey[200],
          //     padding: theme.spacing(1),
          //   },
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
          //   '& .DocSearch-Hit-content-wrapper': {
          //     paddingLeft: theme.spacing(2),
          //   },
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
          //   '& .DocSearch-Hit-action, & .DocSearch-Hits mark': {
          //     color: `${
          //       theme.palette.mode === 'dark'
          //         ? theme.palette.primary[400]
          //         : theme.palette.primary[500]
          //     }`,
          //   },
          //   '& .DocSearch-Footer': {
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
        })}
      />
    </>
  );
};
