type UseIntersectionObserverInit = {
    rootMargin?: string;
};
export type UseIntersection = {
    disabled?: boolean;
} & UseIntersectionObserverInit;
export declare function useIntersection<T extends Element>({ disabled, ...options }: UseIntersection): [(element: T | null) => void, boolean];
export {};
//# sourceMappingURL=use-intersection.d.ts.map