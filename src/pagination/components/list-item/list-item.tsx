import React, {HTMLAttributes} from 'react';

// This component can be exported but styled components cannot. Exporting it as some users
// may need it when creating a custom composable component to use with Pagination.
// The only expected props are attributes, such as 'key' and 'data-testid'
export const PaginationListItem = (props: HTMLAttributes<HTMLLIElement>) => (
  <li {...props} />
);
