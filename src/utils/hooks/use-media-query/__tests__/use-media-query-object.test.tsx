import React from 'react';
import '@testing-library/jest-dom';
import MatchMediaMock from 'jest-matchmedia-mock';
import {act, render} from '@testing-library/react';
import {renderWithTheme} from '../../../../test/test-utils';
import {
  useMediaQueryObject,
  MediaQueryProvider,
  useBreakpointKey,
} from '../index';
import {MQContext, withMediaQueryProvider} from '../context';
import {
  BreakpointKeys,
  newskitLightTheme,
  ThemeProvider,
} from '../../../../theme';
import {MQ} from '../../../style/types';

const MockMediaQueryProvider = ({
  mq = 'xs',
  children,
}: {
  mq?: BreakpointKeys;
  children: React.ReactElement;
}) => {
  const state = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    [mq]: true,
  };
  return <MQContext.Provider value={state}>{children}</MQContext.Provider>;
};

const TestComponent = ({size}: {size: MQ<string>}) => {
  const width = useMediaQueryObject(size);
  return <div style={{width}} data-testid="el" />;
};

const WithProvider = ({mq, size}: {mq?: BreakpointKeys; size: MQ<string>}) => (
  <MockMediaQueryProvider mq={mq}>
    <TestComponent size={size} />
  </MockMediaQueryProvider>
);
const TestComponentUseBreakpointKey = () => {
  const bpKey = useBreakpointKey() as BreakpointKeys;
  return <div data-testid="el">{bpKey}</div>;
};

const WithProviderUseBreakpointKey = ({mq}: {mq?: BreakpointKeys}) => (
  <MockMediaQueryProvider mq={mq}>
    <TestComponentUseBreakpointKey />
  </MockMediaQueryProvider>
);

describe('useMediaQueryObject', () => {
  it('non MQ value', () => {
    const size = '20px';
    const {getByTestId} = renderWithTheme(WithProvider, {size});
    expect(getByTestId('el')).toHaveStyle('width: 20px');
  });

  it('use object with single key value', () => {
    const size = {sm: '20px'};
    const {getByTestId} = renderWithTheme(WithProvider, {size});
    expect(getByTestId('el')).toHaveStyle('width: 20px');
  });

  it('use object with all mq keys', () => {
    const size = {
      xs: '10px',
      sm: '20px',
      md: '30px',
      lg: '40px',
      xl: '50px',
    };
    const {getByTestId} = renderWithTheme(WithProvider, {size, mq: 'sm'});
    expect(getByTestId('el')).toHaveStyle('width: 20px');
  });

  it('use object without all keys', () => {
    const size = {
      xs: '10px',
      sm: '20px',
      xl: '50px',
    };
    const {getByTestId} = renderWithTheme(WithProvider, {size, mq: 'md'});

    expect(getByTestId('el')).toHaveStyle('width: 20px');
  });

  it('use object without xs value', () => {
    const size = {
      sm: '20px',
      xl: '50px',
    };
    const {getByTestId} = renderWithTheme(WithProvider, {
      size,
      mq: 'xs',
    });
    expect(getByTestId('el')).toHaveStyle('width: 20px');
  });

  it('change media query size', () => {
    const size = {
      sm: '20px',
      xl: '50px',
    };
    const {rerender, getByTestId} = renderWithTheme(WithProvider, {
      size,
      mq: 'xs',
    });
    expect(getByTestId('el')).toHaveStyle('width: 20px');

    // change media query
    rerender(<WithProvider size={size} mq="xl" />);

    expect(getByTestId('el')).toHaveStyle('width: 50px');
  });
});

describe('useBreakpointKey', () => {
  it('get correct MQ key', () => {
    const {rerender, getByText} = renderWithTheme(
      WithProviderUseBreakpointKey,
      {
        mq: 'lg',
      },
    );
    expect(getByText('lg')).toBeDefined();

    // change media query
    rerender(<WithProviderUseBreakpointKey mq="xl" />);
    expect(getByText('xl')).toBeDefined();
  });
});

const getMediaQuery = (bp: BreakpointKeys): string => {
  const mqs = {
    xs: 'screen and (max-width: 479px)',
    sm: 'screen and (min-width: 480px) and (max-width: 767px)',
    md: 'screen and (min-width: 768px) and (max-width: 1023px)',
    lg: 'screen and (min-width: 1024px) and (max-width: 1439px)',
    xl: 'screen and (min-width: 1440px)',
  };
  return mqs[bp];
};
describe('MediaQueryProvider', () => {
  let matchMedia: MatchMediaMock;

  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  const Component = ({children}: {children: React.ReactElement}) => (
    <MediaQueryProvider>{children}</MediaQueryProvider>
  );

  it('renders children correctly', () => {
    const {getByText} = renderWithTheme(Component, {
      children: <div>test</div>,
    });
    const child = getByText('test');
    expect(child).toBeDefined();
  });

  it('State is updated when media query changes', () => {
    const {getByText} = renderWithTheme(Component, {
      children: <TestComponentUseBreakpointKey />,
    });

    const child = getByText('xs');
    expect(child).toBeDefined();

    act(() => {
      // change media query
      matchMedia.useMediaQuery(getMediaQuery('sm'));
    });

    const child1 = getByText('sm');
    expect(child1).toBeDefined();
  });

  it('adds provider to component via withMediaQueryProvider', () => {
    const ComponentWithProvider = withMediaQueryProvider(
      TestComponentUseBreakpointKey,
    );

    // we use render here because we don't want to use the default MediaQueryProvider
    // that comes with NewsKitProvider which a is part of renderWithTheme
    const {getByText} = render(<ComponentWithProvider />, {
      wrapper: ({children}) => (
        <ThemeProvider theme={newskitLightTheme}>{children}</ThemeProvider>
      ),
    });

    const child = getByText('sm');
    expect(child).toBeDefined();
  });
});
