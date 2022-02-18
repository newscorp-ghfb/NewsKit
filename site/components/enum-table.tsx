import React from 'react';
import {ScrollableTable} from './markdown-elements';

// Can't specify 'enum' as a type, so we have to just use any here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EnumTable: React.FC<{children: any}> = ({children}) => (
  <ScrollableTable>
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(children as Record<string, string>).map(
        ([key, value]) => (
          <tr key={`${key}-${value}`}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ),
      )}
    </tbody>
  </ScrollableTable>
);
