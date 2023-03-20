import React, {useRef} from 'react';
import {Story as StoryType} from '@storybook/react';
import {useTheme, CreateThemeArgs, ThemeProvider} from '../../theme';
import {Pagination} from '../pagination';
import {PaginationFirstItem} from '../components/first-item/first-item';
import {PaginationPrevItem} from '../components/prev-item/prev-item';
import {PaginationItems} from '../components/items/pagination-items';
import {PaginationNextItem} from '../components/next-item/next-item';
import {PaginationLastItem} from '../components/last-item/last-item';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {
  IconFilledCircle,
  IconOutlinedArrowBack,
  IconOutlinedArrowForward,
  IconOutlinedSearch,
  IconOutlinedTrendingFlat,
} from '../../icons';
import {TextBlock} from '../../text-block';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {Select, SelectOption, SelectOptionProps} from '../../select';
import {
  PaginationItemProps,
  PaginationItemsProps,
  PaginationLayoutItem,
} from '../types';
import {getPaginationItemsLayout} from '../utils';
import {usePaginationContext} from '../context';
import {Form, FormInput} from '../../form';
import {IconButton} from '../../icon-button';
import {TextField} from '../../text-field';
import {GridLayout} from '../../grid-layout';
import {PaginationListItem} from '../components/list-item';
import {PaginationButton} from '../components/button';
import {ButtonOrButtonLinkProps} from '../../button';
import {useReactKeys} from '../../utils/hooks';
import {filterOutFalsyProperties} from '../../utils/filter-object';
import {ScreenReaderOnly} from '../../screen-reader-only/screen-reader-only';

const paginationItemCustomThemeObject: CreateThemeArgs = {
  name: 'pagination-static-theme',
  overrides: {
    stylePresets: {
      paginationInformative: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.interfaceInformative010}}',
        },
      },
      paginationItemInput: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          color: '{{colors.interactiveLink010}}',
          iconColor: '{{colors.interactiveLink010}}',
          cursor: 'default',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
        'focus-visible': {
          outlineColor: '{{outlines.outlineColorDefault}}',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
        },
      },
    },
  },
};

const customDefaults = {
  paginationItemInput: {
    small: {
      typographyPreset: 'utilityButton010',
      stylePreset: 'paginationItemInput',
      iconSize: 'iconSize010',
      paddingInline: 'space020',
      marginInline: 'space010',
      marginBlockEnd: 'space000',
    },
    medium: {
      typographyPreset: 'utilityButton020',
      stylePreset: 'paginationItemInput',
      iconSize: 'iconSize020',
      paddingInline: 'space020',
      marginInline: 'space010',
      marginBlockEnd: 'space000',
    },
    large: {
      typographyPreset: 'utilityButton030',
      stylePreset: 'paginationItemInput',
      iconSize: 'iconSize020',
      paddingInline: 'space020',
      marginInline: 'space010',
      marginBlockEnd: 'space000',
    },
  },
};

// eslint-disable-next-line
const onPageChange = (page: number) => console.log(`Page changed to ${page}`);

const uncontrolledProps = {
  totalItems: 80,
  pageSize: 10,
  defaultPage: 4,
  onPageChange,
};
const controlledProps = {
  totalItems: 232,
  pageSize: 10,
  page: 4,
};
// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = {truncation: false, siblings: 0, boundaries: 0};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="HREF-based">
      <Pagination
        {...controlledProps}
        buildHref={(page: number) => `page/${page}`}
        aria-label="href"
      >
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="onclick-based">
      <Pagination {...uncontrolledProps} aria-label="on-click">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryDefault.storyName = 'Default';

export const StorySize = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Small">
      <Pagination {...uncontrolledProps} size="small" aria-label="small">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Pagination {...uncontrolledProps} aria-label="medium">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Large">
      <Pagination {...uncontrolledProps} size="large" aria-label="large">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StorySize.storyName = 'Size';

export const StoryVariationsInNavigation = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Numbers only">
      <Pagination {...uncontrolledProps} aria-label="numbers only">
        <PaginationItems {...defaultItemsProps} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Next and previous only">
      <Pagination {...uncontrolledProps} aria-label="next and previous only">
        <PaginationPrevItem />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Next and previous labels">
      <Pagination {...uncontrolledProps} aria-label="next and previous labels">
        <PaginationPrevItem overrides={{width: 'auto'}}>
          Previous
        </PaginationPrevItem>
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem overrides={{width: 'auto'}}>
          Next
        </PaginationNextItem>
      </Pagination>
    </StorybookCase>
    <StorybookCase title="First and last labels">
      <Pagination {...uncontrolledProps} aria-label="first and last labels">
        <PaginationFirstItem overrides={{width: 'auto'}}>
          First
        </PaginationFirstItem>
        <PaginationItems {...defaultItemsProps} />
        <PaginationLastItem overrides={{width: 'auto'}}>
          Last
        </PaginationLastItem>
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInNavigation.storyName = 'Variations in navigation';

export const StoryVariationsInTruncation = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="No truncation of a long list">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        onPageChange={onPageChange}
        aria-label="no truncation of a long list"
      >
        <PaginationItems truncation={false} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 1 (default)">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        onPageChange={onPageChange}
        aria-label="siblings 3, boundaries 1"
      >
        <PaginationItems />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 0 (just using First and Last buttons instead of boundary butttons)">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        onPageChange={onPageChange}
        aria-label="siblings 3, boundaries 0"
      >
        <PaginationFirstItem />
        <PaginationItems siblings={3} boundaries={0} />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 2, boundaries 2">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        onPageChange={onPageChange}
        aria-label="siblings 3, boundaries 2"
      >
        <PaginationItems siblings={2} boundaries={2} />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInTruncation.storyName = 'Variations in truncation';

export const StoryVariationsInInput = () => {
  const CustomInputPaginationItemButton = ({
    size = 'medium',
    pageNumber,
    lastPage = 1,
    changePage = () => {},
  }: ButtonOrButtonLinkProps & PaginationItemProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const validateAndChangePage = (newPage: number) => {
      if (newPage >= 1 && newPage <= lastPage) {
        changePage(newPage);
      }
      inputRef.current?.blur();
    };

    const ariaId = useReactKeys(1)[0];
    const inputLabelId = `page-input-label${ariaId}`;
    const inputId = `page-input${ariaId}`;

    // Cannot use a stylePreset (such as paginationItemInput) on the TextField or it will lose the default border
    const {
      paddingInline,
      marginInline,
      marginBlockEnd,
    } = customDefaults.paginationItemInput[size];

    return (
      <Form
        onSubmit={values => validateAndChangePage(parseInt(values.newPage, 10))}
      >
        <FormInput name="newPage">
          <ScreenReaderOnly
            as="label"
            id={inputLabelId}
            htmlFor={inputId}
            aria-hidden="true"
          >
            Enter page between 1 and {lastPage}
          </ScreenReaderOnly>
          <TextField
            id={inputId}
            aria-labelledby={inputLabelId}
            ref={inputRef}
            size="small"
            defaultValue={pageNumber}
            onBlur={props =>
              validateAndChangePage(parseInt(props.target?.value, 10))
            }
            endEnhancer={
              <IconButton
                type="submit"
                title="Change Page"
                overrides={{
                  stylePreset: 'paginationItemInput',
                }}
              >
                <IconOutlinedSearch />
              </IconButton>
            }
            overrides={{
              paddingInline,
              marginInline,
              marginBlockEnd,
              width: '84px',
              endEnhancer: {
                spaceInline: 'space010',
              },
            }}
          />
        </FormInput>
      </Form>
    );
  };

  const CustomInputPaginationItem = React.forwardRef<
    HTMLElement,
    PaginationItemProps
  >(({pageNumber, overrides = {}}, ref) => {
    const {size = 'medium', page, lastPage, ...rest} = usePaginationContext();
    const {itemDescription} = overrides;
    let ItemDescription = null;
    let textblockSettings: typeof overrides = {};
    const theme = useTheme();

    if (itemDescription) {
      ItemDescription = itemDescription;
      textblockSettings = {
        ...theme.componentDefaults.paginationItemNonInteractive[size],
        ...filterOutFalsyProperties(itemDescription),
      };
    }

    return (
      <PaginationListItem key="pages" size={size}>
        <GridLayout
          columns="auto auto"
          rows="1fr"
          autoFlow="row"
          alignItems="center"
          columnGap="space010"
        >
          <CustomInputPaginationItemButton
            ref={ref}
            pageNumber={page}
            selected
            {...rest}
          />
          {itemDescription && (
            // @ts-ignore
            <ItemDescription
              {...textblockSettings}
              selected={pageNumber === page}
              pageNumber={page}
              lastPage={lastPage}
            />
          )}
        </GridLayout>
      </PaginationListItem>
    );
  });

  return (
    <>
      <StorybookPage>
        <StorybookCase title="Description only">
          <Pagination
            totalItems={232}
            pageSize={10}
            defaultPage={9}
            onPageChange={onPageChange}
            aria-label="description only"
          >
            <PaginationFirstItem />
            <PaginationPrevItem />
            <PaginationItems
              truncation
              siblings={0}
              boundaries={0}
              overrides={{
                itemButton: () => null,
                itemDescription: ({
                  pageNumber,
                  lastPage,
                  ...textBlockStyles
                }) => (
                  <TextBlock {...textBlockStyles}>
                    Page {pageNumber} of {lastPage}
                  </TextBlock>
                ),
              }}
            />
            <PaginationNextItem />
            <PaginationLastItem />
          </Pagination>
        </StorybookCase>
        <StorybookCase title="Input only">
          <Pagination
            totalItems={232}
            pageSize={10}
            defaultPage={9}
            onPageChange={onPageChange}
            aria-label="input only"
          >
            <PaginationFirstItem />
            <PaginationPrevItem />
            <PaginationItems
              truncation
              siblings={0}
              boundaries={0}
              overrides={{
                itemButton: props => (
                  <CustomInputPaginationItemButton {...props} />
                ),
              }}
            />
            <PaginationNextItem />
            <PaginationLastItem />
          </Pagination>
        </StorybookCase>
        <StorybookCase title="Input and description">
          <Pagination
            totalItems={232}
            pageSize={10}
            defaultPage={9}
            onPageChange={onPageChange}
            aria-label="input and description"
          >
            <PaginationFirstItem />
            <PaginationPrevItem />
            <PaginationItems
              truncation
              siblings={0}
              boundaries={0}
              overrides={{
                itemButton: props => (
                  <CustomInputPaginationItemButton {...props} />
                ),
                itemDescription: ({lastPage, ...textBlockStyles}) => (
                  <TextBlock {...textBlockStyles}>
                    of {lastPage} pages
                  </TextBlock>
                ),
              }}
            />
            <PaginationNextItem />
            <PaginationLastItem />
          </Pagination>
        </StorybookCase>
      </StorybookPage>
      <StorybookPage columns="1fr">
        <StorybookCase title="Buttons with Input at end">
          <Pagination
            totalItems={232}
            pageSize={10}
            defaultPage={9}
            onPageChange={onPageChange}
            aria-label="input at end"
          >
            <PaginationFirstItem />
            <PaginationPrevItem />
            <PaginationItems truncation siblings={3} boundaries={1} />
            <PaginationNextItem />
            <PaginationLastItem />
            <CustomInputPaginationItem overrides={{}} />
          </Pagination>
        </StorybookCase>
        <StorybookCase title="Buttons with Input for selected item">
          <Pagination
            totalItems={232}
            pageSize={10}
            defaultPage={9}
            onPageChange={onPageChange}
            aria-label="input for selected item"
          >
            <PaginationFirstItem />
            <PaginationPrevItem />
            <PaginationItems
              truncation
              siblings={3}
              boundaries={1}
              overrides={{
                itemButton: ({selected, ...rest}) => {
                  if (selected) {
                    return (
                      <CustomInputPaginationItemButton
                        selected={selected}
                        {...rest}
                      />
                    );
                  }

                  return (
                    <PaginationButton {...rest}>
                      {rest.pageNumber}
                    </PaginationButton>
                  );
                },
              }}
            />
            <PaginationNextItem />
            <PaginationLastItem />
          </Pagination>
        </StorybookCase>
      </StorybookPage>
    </>
  );
};
StoryVariationsInInput.storyName = 'Variations in input';

export const StoryVariationsInSelection = () => {
  const CustomDropdownPaginationItems = ({
    children,
    overrides = {},
    truncation = true,
    siblings = 3,
    boundaries = 1,
    eventContext = {},
    eventOriginator = 'pagination-dropdown',
  }: PaginationItemsProps) => {
    const theme = useTheme();
    const {
      size = 'medium',
      buildHref,
      /* istanbul ignore next */
      changePage = () => {},
      page,
      lastPage,
    } = usePaginationContext();

    const {itemDescription, ...logicalOverrides} = overrides;
    let ItemDescription = null;
    let textblockSettings: typeof overrides = {};

    if (itemDescription) {
      ItemDescription = itemDescription;
      textblockSettings = {
        ...theme.componentDefaults.paginationItemNonInteractive[size],
        ...filterOutFalsyProperties(itemDescription),
      };
    }

    const paginationElements = [] as React.ReactElement<SelectOptionProps>[];
    if (page && lastPage) {
      const layout: [PaginationLayoutItem?] = getPaginationItemsLayout({
        page,
        lastPage,
        truncation,
        siblings,
        boundaries,
      });

      let truncationCount = 0;
      /* istanbul ignore next */
      layout.forEach((element: PaginationLayoutItem = 1) => {
        switch (element) {
          case '-':
            truncationCount += 1;
            paginationElements.push(
              <SelectOption
                key={`trunc${truncationCount}`}
                value=""
                overrides={logicalOverrides}
              >
                ...
              </SelectOption>,
            );
            break;
          default:
            {
              const pageNumber: number = element;
              paginationElements.push(
                <SelectOption
                  key={`page${pageNumber}`}
                  value={pageNumber.toString()}
                  selected={pageNumber === page}
                  overrides={logicalOverrides}
                >
                  {children}
                  {pageNumber}
                </SelectOption>,
              );
            }
            break;
        }
      });
    }

    return (
      <PaginationListItem key="pages" size={size}>
        <GridLayout
          columns="auto auto"
          rows="1fr"
          autoFlow="row"
          alignItems="center"
          columnGap="space030"
        >
          <Select
            size="small"
            eventContext={eventContext}
            eventOriginator={eventOriginator}
            overrides={{
              button: {
                marginInline: 'space010',
                marginBlockEnd: 'space000',
              },
            }}
            onChange={event => {
              if (event.target.value) {
                const pageNumber = Number(event.target.value);
                changePage(pageNumber);
                const href = buildHref! && buildHref(pageNumber);
                if (href) {
                  window.location.href = href;
                }
              }
            }}
          >
            {paginationElements as []}
          </Select>
          {itemDescription && (
            // @ts-ignore
            <ItemDescription
              {...textblockSettings}
              selected
              pageNumber={page}
              lastPage={lastPage}
            />
          )}
        </GridLayout>
      </PaginationListItem>
    );
  };

  return (
    <StorybookPage>
      <StorybookCase title="Dropdown (HREF-based)">
        <Pagination
          totalItems={232}
          pageSize={10}
          defaultPage={9}
          buildHref={(page: number) => `page/${page}`}
          aria-label="dropdown href based"
        >
          <PaginationFirstItem />
          <PaginationPrevItem />
          <CustomDropdownPaginationItems truncation siblings={3} boundaries={1}>
            Page{' '}
          </CustomDropdownPaginationItems>
          <PaginationNextItem />
          <PaginationLastItem />
        </Pagination>
      </StorybookCase>
      <StorybookCase title="Dropdown (onclick-based)">
        <Pagination
          totalItems={232}
          pageSize={10}
          defaultPage={9}
          onPageChange={onPageChange}
          aria-label="dropdown onclick based"
        >
          <PaginationFirstItem />
          <PaginationPrevItem />
          <CustomDropdownPaginationItems truncation siblings={3} boundaries={1}>
            Page{' '}
          </CustomDropdownPaginationItems>
          <PaginationNextItem />
          <PaginationLastItem />
        </Pagination>
      </StorybookCase>
      <StorybookCase title="Dropdown and short description">
        <Pagination
          totalItems={232}
          pageSize={10}
          defaultPage={9}
          onPageChange={onPageChange}
          aria-label="dropdown and short description"
        >
          <PaginationFirstItem />
          <PaginationPrevItem />
          <CustomDropdownPaginationItems
            truncation
            siblings={3}
            boundaries={1}
            overrides={{
              itemDescription: ({lastPage, ...textBlockStyles}) => (
                <TextBlock {...textBlockStyles}>of {lastPage}</TextBlock>
              ),
            }}
          >
            Page{' '}
          </CustomDropdownPaginationItems>
          <PaginationNextItem />
          <PaginationLastItem />
        </Pagination>
      </StorybookCase>
      <StorybookCase title="Dropdown and long description">
        <Pagination
          totalItems={232}
          pageSize={10}
          defaultPage={9}
          onPageChange={onPageChange}
          aria-label="dropdown and long description"
        >
          <PaginationFirstItem />
          <PaginationPrevItem />
          <CustomDropdownPaginationItems
            truncation
            siblings={3}
            boundaries={1}
            overrides={{
              itemDescription: ({lastPage, ...textBlockStyles}) => (
                <TextBlock {...textBlockStyles}>of {lastPage} pages</TextBlock>
              ),
            }}
          />
          <PaginationNextItem />
          <PaginationLastItem />
        </Pagination>
      </StorybookCase>
    </StorybookPage>
  );
};

StoryVariationsInSelection.storyName = 'Variations in selection';
export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom button size">
      <Pagination {...uncontrolledProps} aria-label="custom button size">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{minWidth: '27px', minHeight: '27px'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - items padding">
      <Pagination {...uncontrolledProps} aria-label="items padding overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{paddingInline: 'space040'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - items margin">
      <Pagination {...uncontrolledProps} aria-label="items margin overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{marginInline: 'space020'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - component margin">
      <Pagination
        {...uncontrolledProps}
        aria-label="component margin overrides"
        overrides={{marginInline: 'space060'}}
      >
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryStyleOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom colour">
      <Pagination {...uncontrolledProps} aria-label="custom colour">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            stylePreset: 'paginationInformative',
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom style">
      <Pagination {...uncontrolledProps} aria-label="custom style">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{
            icon: {
              stylePreset: 'paginationInformative',
            },
            typographyPreset: 'editorialParagraph020',
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom previous and next icons">
      <Pagination
        {...uncontrolledProps}
        aria-label="custom previous and next icons"
      >
        <PaginationPrevItem
          overrides={{
            icon: () => (
              <IconOutlinedArrowBack
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem
          overrides={{
            icon: () => (
              <IconOutlinedArrowForward
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Custom truncation icon">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        onPageChange={onPageChange}
        aria-label="truncation with icon"
      >
        <PaginationPrevItem />
        <PaginationItems
          overrides={{
            icon: () => (
              <IconOutlinedTrendingFlat
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItemTruncation',
                }}
              />
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryStyleOverrides.storyName = 'Style overrides';

export const StoryNumberOverrides = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Items as clickable icon buttons (using children)">
      <Pagination
        {...uncontrolledProps}
        aria-label="items as clickable icon buttons (using children)"
      >
        <PaginationPrevItem />
        <PaginationItems truncation={false}>
          <IconFilledCircle />
        </PaginationItems>
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Items as clickable icon buttons (using overrides.itemButton)">
      <Pagination
        {...uncontrolledProps}
        aria-label="items as clickable icons (using overrides.itemButton)"
      >
        <PaginationPrevItem />
        <PaginationItems
          truncation={false}
          overrides={{
            itemButton: props => (
              <PaginationButton {...props}>
                <IconFilledCircle />
              </PaginationButton>
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Items as unclickable icons (using overrides.itemButton)">
      <Pagination
        {...uncontrolledProps}
        aria-label="items as unclickable icons (using overrides.itemButton)"
      >
        <PaginationPrevItem />
        <PaginationItems
          truncation={false}
          overrides={{
            itemButton: () => (
              <IconFilledCircle
                overrides={{
                  size: 'iconSize020',
                  paddingInline: 'space020',
                  stylePreset: 'paginationItem',
                }}
              />
            ),
          }}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryNumberOverrides.storyName = 'Number overrides';

export default {
  title: 'Components/pagination',
  component: Pagination,
  parameters: {
    nkDocs: {
      title: 'Pagination',
      description: 'Pagination lets users navigate through multiple pages.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          paginationItemCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
