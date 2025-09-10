"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fonts = void 0;
exports.fonts = {
    fontSize010: '12px',
    fontSize020: '14px',
    fontSize030: '16px',
    fontSize040: '18px',
    fontSize050: '20px',
    fontSize060: '22px',
    fontSize070: '24px',
    fontSize080: '28px',
    fontSize090: '32px',
    fontSize100: '36px',
    fontSize110: '40px',
    fontSize120: '44px',
    fontSize130: '48px',
    fontSize140: '56px',
    fontSize150: '64px',
    fontSize160: '80px',
    fontLineHeight010: 1,
    fontLineHeight020: 1.125,
    fontLineHeight030: 1.25,
    fontLineHeight040: 1.5,
    fontLineHeight050: 1.75,
    fontLineHeight060: 2,
    fontWeight010: 400,
    fontWeight020: 500,
    fontWeight030: 600,
    fontWeight040: 700,
    fontLetterSpacing010: '-0.5px',
    fontLetterSpacing020: '-0.25px',
    fontLetterSpacing030: '0',
    fontLetterSpacing040: '0.25px',
    fontLetterSpacing050: '0.5px',
    // ** fontMetrics **
    // The fontWeight010(regular 400) metrics are generally enough for a good cropping
    // and should always be declared.
    // But If you need you can specify metrics for the other font weights.
    // 400 Will always be the fall back.
    fontFamily010: {
        fontFamily: '"DM Sans", sans-serif',
        fontMetrics: {
            fontWeight010: {
                capHeight: 700,
                ascent: 992,
                descent: -310,
                lineGap: 0,
                unitsPerEm: 1000,
            },
        },
    },
    fontFamily020: {
        fontFamily: '"Bitter", serif',
        fontMetrics: {
            fontWeight010: {
                capHeight: 692,
                ascent: 935,
                descent: -265,
                lineGap: 0,
                unitsPerEm: 1000,
            },
        },
    },
    fontFamily030: {
        fontFamily: '"Poppins", sans-serif',
        fontMetrics: {
            fontWeight010: {
                capHeight: 697,
                ascent: 1050,
                descent: -350,
                lineGap: 100,
                unitsPerEm: 1000,
            },
        },
    },
};
//# sourceMappingURL=fonts.js.map