import {handleResponsiveProp} from '../style/getters';
import {createTheme} from '../../theme';

describe('handleResponsiveProp', () => {
  type DisplayObj = {display: string | undefined};

  const theme: any = createTheme({});
  const handler = ({display}: DisplayObj) => ({display});

  it('using non MQ value', () => {
    const props = {
      display: 'block',
      theme,
    };

    const result = handleResponsiveProp({display: 'inline'}, handler)(props);
    expect(result).toEqual({display: 'block'});
  });

  it('using MQ value', () => {
    const props = {
      display: {xs: 'block', sm: 'inline'},
      theme,
    };
    const result = handleResponsiveProp({display: 'inline'}, handler)(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'block',
      },
      '@media screen and (min-width: 480px)': {
        display: 'inline',
      },
    });
  });

  it('using single MQ value', () => {
    const props = {
      display: {sm: 'block'},
      theme,
    };
    const result = handleResponsiveProp({display: 'inline'}, handler)(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'inline',
      },
      '@media screen and (min-width: 480px)': {
        display: 'block',
      },
    });
  });

  it('using CQ rules value', () => {
    const props = {
      display: {
        rules: [
          {rule: '@container (width < 200px)', value: 'inline'},
          {rule: '@container (width >= 200px)', value: 'block'},
        ],
      },
      theme,
    };
    const result = handleResponsiveProp({display: undefined}, handler)(props);
    expect(result).toEqual({
      '@container (width < 200px)': {
        display: 'inline',
      },
      '@container (width >= 200px)': {
        display: 'block',
      },
    });
  });

  it('does not have XS value', () => {
    const props = {
      display: {sm: 'inline', md: 'block'},
      theme,
    };
    const result = handleResponsiveProp(
      {display: 'inline-block'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'inline-block',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        display: 'inline',
      },
      '@media screen and (min-width: 768px)': {display: 'block'},
    });
  });
});

// TODO: combine in single describe block
describe('handleMultipleResponsiveProp', () => {
  const theme: any = createTheme({});
  const handler = ({display, width}: {display: string; width: string}) => ({
    display,
    width,
  });

  it('using non MQ value', () => {
    const props = {
      display: 'block',
      width: '100px',
      theme,
    };

    const result = handleResponsiveProp(
      {display: 'inline', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({display: 'block', width: '100px'});
  });

  it('using MQ value with same MQ key', () => {
    const props = {
      display: {xs: 'block', sm: 'inline'},
      width: {xs: '100px', sm: '200px'},
      theme,
    };
    const result = handleResponsiveProp(
      {display: 'inline', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'block',
        width: '100px',
      },
      '@media screen and (min-width: 480px)': {
        display: 'inline',
        width: '200px',
      },
    });
  });

  it('using single MQ value', () => {
    const props = {
      display: {sm: 'block'},
      width: {sm: '100px'},
      theme,
    };

    const result = handleResponsiveProp(
      {display: 'inline', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'inline',
        width: '10px',
      },
      '@media screen and (min-width: 480px)': {
        display: 'block',
        width: '100px',
      },
    });
  });

  it('does not have XS value', () => {
    const props = {
      display: {sm: 'inline', md: 'block'},
      width: {sm: '100px', md: '200px'},
      theme,
    };

    const result = handleResponsiveProp(
      {display: 'inline-block', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'inline-block',
        width: '10px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        display: 'inline',
        width: '100px',
      },
      '@media screen and (min-width: 768px)': {
        display: 'block',
        width: '200px',
      },
    });
  });

  it('does not have same MQ keys', () => {
    const props = {
      display: {xs: 'inline', md: 'block'},
      width: {sm: '100px', md: '200px'},
      theme,
    };

    const result = handleResponsiveProp(
      {display: 'inline-block', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'inline',
        width: '10px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        display: 'inline',
        width: '100px',
      },
      '@media screen and (min-width: 768px)': {
        display: 'block',
        width: '200px',
      },
    });
  });

  it('combine MQ and non-MQ values', () => {
    const props = {
      display: 'block',
      width: {sm: '100px', md: '200px'},
      theme,
    };

    const result = handleResponsiveProp(
      {display: 'inline-block', width: '10px'},
      handler,
    )(props);
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        display: 'block',
        width: '10px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        display: 'block',
        width: '100px',
      },
      '@media screen and (min-width: 768px)': {
        display: 'block',
        width: '200px',
      },
    });
  });
});
