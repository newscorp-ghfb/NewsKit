import React from 'react';
import {Table} from './markdown-elements';

// Can't specify 'enum' as a type, so we have to just use any here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EnumTable: React.FC<{children: any}> = ({children}) => (
  <Table>
    <thead>
      <th>Key</th>
      <th>Value</th>
    </thead>
    <tbody>
      {Object.entries(children as Record<string, string>).map(
        ([key, value]) => (
          <tr>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ),
      )}
    </tbody>
  </Table>
);
