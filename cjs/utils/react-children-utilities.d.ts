import React from 'react';
export type MapFunction = (child: React.ReactNode, index?: number, children?: readonly React.ReactNode[]) => React.ReactNode;
export declare const deepMap: (children: React.ReactNode, deepMapFn: MapFunction) => React.ReactNode[];
export declare const childIsString: (child: React.ReactNode) => boolean;
export declare const childrenIsString: (children: React.ReactNode) => boolean;
//# sourceMappingURL=react-children-utilities.d.ts.map