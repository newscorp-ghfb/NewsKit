import {handleEnterKeyPress} from '../a11y';

describe('Site helper handleEnterKeyPress', () => {
  test('triggers passed function when pressing Enter key', () => {
    const onClickHandler = jest.fn();
    handleEnterKeyPress(onClickHandler)({key: 'Enter'});
    expect(onClickHandler).toHaveBeenCalled();
  });

  test('does not trigger passed function when pressing other than Enter key', () => {
    const onClickHandler = jest.fn();
    handleEnterKeyPress(onClickHandler)({key: 'Space'});
    expect(onClickHandler).not.toHaveBeenCalled();
  });
});
