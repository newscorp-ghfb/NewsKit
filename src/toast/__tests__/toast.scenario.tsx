import React from 'react';
import {styled} from '../../utils';
import {toast, ToastProvider} from '..';

const ToastBase = styled.div`
  padding: 1em;
  border: 1px solid currentColor;
  max-width: 240px;
  background: #fff;
  box-sizing: border-box;
`;

const ToastSuccess = styled(ToastBase)`
  color: green;
`;
const ToastError = styled(ToastBase)`
  color: red;
`;

export default {
  title: 'toast',
  children: [
    {
      storyName: 'toast-api',
      storyFn: () => {
        const notifySuccess = () =>
          toast(
            <ToastSuccess data-testid="alert-success">
              Success message
            </ToastSuccess>,
          );
        const notifyError = () =>
          toast(({onClose}) => (
            <ToastError data-testid="alert-error">
              Error message{' '}
              <button
                type="button"
                data-testid="close"
                onClick={() => onClose()}
              >
                X
              </button>
            </ToastError>
          ));

        return (
          <React.Fragment>
            <button
              type="button"
              data-testid="action-success"
              onClick={notifySuccess}
            >
              Success
            </button>
            <button
              type="button"
              data-testid="action-error"
              onClick={notifyError}
            >
              Error with duration
            </button>

            <ToastProvider
              autoHideDuration={1000}
              verticalOffset="10px"
              horizontalOffset="10px"
              position="bottom-center"
            />
          </React.Fragment>
        );
      },
    },
  ],
};
