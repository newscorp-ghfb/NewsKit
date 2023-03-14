import React, {useRef, useState} from 'react';
import {Story as StoryType} from '@storybook/react';
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
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {Select, SelectOption, SelectOptionProps} from '../../select';
import {
  PaginationItemProps,
  PaginationItemsProps,
  PaginationLayoutItem,
} from '../types';
import {getItemsLayout} from '../utils';
import {usePaginationContext} from '../context';
import {Form, FormInput} from '../../form';
import {IconButton} from '../../icon-button';
import {TextField} from '../../text-field';
import {Stack} from '../../stack';
import {PaginationListItem} from '../components/list-item';
import {PaginationButton} from '../components/button';
import {ButtonOrButtonLinkProps} from '../../button';

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
    },
  },
};

// eslint-disable-next-line
const onPageChange = (page: number) => console.log(`Page changed to ${page}`);

const defaultProps = {
  totalItems: 80,
  pageSize: 10,
  defaultPage: 4,
  onPageChange,
};
// defaults to truncation: true, siblings: 3, boundaries: 1
const defaultItemsProps = {truncation: false, siblings: 0, boundaries: 0};

export const StoryDefault = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="HREF-based">
      <Pagination
        {...defaultProps}
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
      <Pagination {...defaultProps} aria-label="on-click">
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
      <Pagination {...defaultProps} size="small" aria-label="small">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Medium">
      <Pagination {...defaultProps} aria-label="medium">
        <PaginationFirstItem />
        <PaginationPrevItem />
        <PaginationItems {...defaultItemsProps} />
        <PaginationNextItem />
        <PaginationLastItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Large">
      <Pagination {...defaultProps} size="large" aria-label="large">
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
      <Pagination {...defaultProps} aria-label="numbers only">
        <PaginationItems {...defaultItemsProps} />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Next and previous only">
      <Pagination {...defaultProps} aria-label="next and previous only">
        <PaginationPrevItem />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Next and previous labels">
      <Pagination {...defaultProps} aria-label="next and previous labels">
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
      <Pagination {...defaultProps} aria-label="first and last labels">
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
        aria-label="base"
      >
        <PaginationItems />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Siblings 3, boundaries 0 (just using First and Last buttons instead of boundary butttons)">
      <Pagination
        totalItems={232}
        pageSize={10}
        defaultPage={9}
        aria-label="base"
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
        aria-label="base"
      >
        <PaginationItems siblings={2} boundaries={2} />
      </Pagination>
    </StorybookCase>
  </StorybookPage>
);
StoryVariationsInTruncation.storyName = 'Variations in truncation';

export const StoryVariationsInInput = () => {
  const CustomInputPaginationItemButton = ({
    pageNumber,
    lastPage = 1,
    changePage = () => {},
  }: ButtonOrButtonLinkProps & PaginationItemProps) => {
    const [valid, setValid] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const validateAndChangePage = (newPage: number) => {
      if (newPage >= 1 && newPage <= lastPage) {
        setValid(true);
        changePage(newPage);
      } else {
        setValid(false);
      }
      inputRef.current?.blur();
    };

    return (
      <Form
        onSubmit={values => validateAndChangePage(parseInt(values.newPage, 10))}
      >
        <FormInput name="newPage">
          <TextField
            ref={inputRef}
            size="small"
            defaultValue={pageNumber}
            state={valid ? 'valid' : 'invalid'}
            onBlur={props =>
              validateAndChangePage(parseInt(props.target?.value, 10))
            }
            endEnhancer={
              <IconButton
                type="submit"
                title="Change Page"
                overrides={{
                  stylePreset: 'paginationItemInteractive',
                }}
              >
                <IconOutlinedSearch />
              </IconButton>
            }
            overrides={{
              marginInline: 'space010',
              marginBlockEnd: 'space000',
              width: '84px',
              endEnhancer: {
                spaceInline: 'space000',
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
    const paginationContext = usePaginationContext();
    const {size, page, lastPage, ...rest} = paginationContext;
    const {itemDescription: ItemDescription} = overrides;

    return (
      <PaginationListItem key="pages" size={size}>
        <Stack
          flow="horizontal-center"
          spaceInline="space010"
          paddingInlineStart="space050"
        >
          <CustomInputPaginationItemButton
            ref={ref}
            pageNumber={page}
            selected
            {...rest}
          />
          {ItemDescription && (
            // @ts-ignore
            <ItemDescription
              selected={pageNumber === page}
              pageNumber={page}
              lastPage={lastPage}
            />
          )}
        </Stack>
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
                itemDescription: ({pageNumber, lastPage}) => (
                  <TextBlock
                    paddingInline="space020"
                    typographyPreset="utilityButton020"
                    stylePreset="paginationItemNonInteractive"
                  >
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
                itemDescription: props => (
                  <TextBlock
                    paddingInline="space020"
                    typographyPreset="utilityButton020"
                    stylePreset="paginationItemNonInteractive"
                  >
                    of {props.lastPage} pages
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
            <CustomInputPaginationItem />
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
    const {
      size,
      buildHref,
      /* istanbul ignore next */
      changePage = () => {},
      page,
      lastPage,
    } = usePaginationContext();

    const {itemDescription: ItemDescription, ...logicalOverrides} = overrides;

    const paginationElements = [] as React.ReactElement<SelectOptionProps>[];
    if (page && lastPage) {
      const layout: [PaginationLayoutItem?] = getItemsLayout({
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
        <Stack
          flow="horizontal-center"
          spaceInline="space010"
          marginInline="space010"
          marginBlockEnd="space000"
        >
          <Select
            size="small"
            eventContext={eventContext}
            eventOriginator={eventOriginator}
            overrides={{
              button: {
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
          {ItemDescription && (
            // @ts-ignore
            <ItemDescription selected pageNumber={page} lastPage={lastPage} />
          )}
        </Stack>
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
              itemDescription: ({lastPage}) => (
                <TextBlock
                  paddingInline="space020"
                  typographyPreset="utilityButton020"
                  stylePreset="paginationItemNonInteractive"
                >
                  of {lastPage}
                </TextBlock>
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
              itemDescription: ({lastPage}) => (
                <TextBlock
                  paddingInline="space020"
                  typographyPreset="utilityButton020"
                  stylePreset="paginationItemNonInteractive"
                >
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
  );
};

StoryVariationsInSelection.storyName = 'Variations in selection';
export const StoryLogicalProps = () => (
  <StorybookPage columns={{md: 'auto'}}>
    <StorybookCase title="Custom button size">
      <Pagination {...defaultProps} aria-label="custom button size">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{minWidth: '27px', minHeight: '27px'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - items padding">
      <Pagination {...defaultProps} aria-label="items padding overrides">
        <PaginationPrevItem />
        <PaginationItems
          {...defaultItemsProps}
          overrides={{paddingInline: 'space040'}}
        />
        <PaginationNextItem />
      </Pagination>
    </StorybookCase>
    <StorybookCase title="Logical props - items margin">
      <Pagination {...defaultProps} aria-label="items margin overrides">
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
        {...defaultProps}
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
      <Pagination {...defaultProps} aria-label="custom colour">
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
      <Pagination {...defaultProps} aria-label="custom style">
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
      <Pagination {...defaultProps} aria-label="custom previous and next icons">
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
        {...defaultProps}
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
        {...defaultProps}
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
        {...defaultProps}
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
