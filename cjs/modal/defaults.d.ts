declare const _default: {
    modal: {
        overlay: {
            zIndex: number;
            transitionPreset: {
                extend: string;
                enterActive: {
                    transitionDuration: string;
                    transitionTimingFunction: string;
                };
                exitActive: {
                    transitionDuration: string;
                    transitionDelay: string;
                    transitionTimingFunction: string;
                };
            };
        };
        panel: {
            zIndex: number;
            stylePreset: string;
            transitionPreset: {
                extend: string;
                enterActive: {
                    transitionDuration: string;
                    transitionTimingFunction: string;
                    transitionDelay: string;
                };
                exitActive: {
                    transitionDuration: string;
                    transitionTimingFunction: string;
                };
            }[];
            topOffset: string;
            width: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            minHeight: string;
            maxHeight: {
                xs: string;
                md: string;
            };
        };
        header: {
            paddingInline: string;
            paddingBlock: string;
            stylePreset: string;
            typographyPreset: string;
        };
        content: {
            paddingInline: string;
            paddingBlock: string;
        };
        closeButton: {
            stylePreset: string;
            paddingInline: string;
            paddingBlock: string;
        };
    };
};
export default _default;
//# sourceMappingURL=defaults.d.ts.map