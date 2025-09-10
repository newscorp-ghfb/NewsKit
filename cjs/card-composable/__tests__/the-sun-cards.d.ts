import React from 'react';
export interface MediaContextActionProps {
    size?: 'small' | 'medium' | 'large';
    area?: string;
}
export declare const CardVerticalTheSun: React.FC<MediaContextActionProps>;
export declare const CardVerticalResponsive: () => React.JSX.Element;
export declare const CardHorizontalTheSun: React.FC<MediaContextActionProps>;
export declare const CardHorizontalResponsive: () => React.JSX.Element;
export declare const stylePresets: {
    linkTheSun: {
        hover: {
            textDecoration: string;
        };
        'focus-visible': {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: string;
            outlineOffset: string;
            safariOutlineStyle: string;
        };
    };
    cameraTag: {
        base: {
            borderStyle: string;
            color: string;
            iconColor: string;
        };
        'focus-visible': {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: string;
            outlineOffset: string;
            safariOutlineStyle: string;
        };
    };
    shareTag: {
        base: {
            borderStyle: string;
            color: string;
            iconColor: string;
        };
        'focus-visible': {
            outlineColor: string;
            outlineStyle: string;
            outlineWidth: string;
            outlineOffset: string;
            safariOutlineStyle: string;
        };
    };
    cardComposableVertical: {
        base: {
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
        };
    };
    cardComposableHorizontal: {
        base: {
            borderStyle: string;
            borderColor: string;
            borderWidth: string;
        };
    };
};
//# sourceMappingURL=the-sun-cards.d.ts.map