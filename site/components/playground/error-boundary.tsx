import React from 'react';
import {styled} from 'newskit';

export const ErrorMessageContainer = styled.div`
  font-family: monospace;
  font-weight: 600;
  font-size: 16px;
  color: #ff0000;
  border: solid 3px #ff0000;
  padding: 12px;
`;

export class ErrorBoundary extends React.Component<
  {children: React.ReactNode},
  {error: Error | false}
> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = {error: false};
  }

  static getDerivedStateFromError(error: Error) {
    return {error};
  }

  render() {
    const {error} = this.state;

    if (error) {
      return (
        <ErrorMessageContainer>
          <p>Rendering failed!</p>
          <p>Error: {error.message}</p>
        </ErrorMessageContainer>
      );
    }

    const {children} = this.props;
    return children;
  }
}
