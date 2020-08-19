import {Devices} from '../../theme';
import {getDeviceQueryFromTheme} from '../device-helpers';
import {css} from '../style';

describe('getDeviceQueryFromTheme', () => {
  describe('to be called with a CSSObject as the styles param (second) with the value of', () => {
    test('display: block and to target iPadPro', () => {
      expect(getDeviceQueryFromTheme([Devices.iPadPro], {display: 'block'})())
        .toMatchInlineSnapshot(`
                                            "
                                                      @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                                                        display:block;
                                                      }
                                                    "
                                  `);
    });

    test('display: inline-block and to target iPadPro', () => {
      expect(
        getDeviceQueryFromTheme([Devices.iPadPro], {display: 'inline-block'})(),
      ).toMatchInlineSnapshot(`
                                            "
                                                      @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                                                        display:inline-block;
                                                      }
                                                    "
                                  `);
    });

    test('display: none and to target iPadPro', () => {
      expect(getDeviceQueryFromTheme([Devices.iPadPro], {display: 'none'})())
        .toMatchInlineSnapshot(`
                                            "
                                                      @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                                                        display:none;
                                                      }
                                                    "
                                  `);
    });

    test('display: block and to target multiple devices', () => {
      expect(
        getDeviceQueryFromTheme([Devices.iPadPro, Devices.iPad], {
          display: 'none',
        })(),
      ).toMatchInlineSnapshot(`
        "
                  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                    display:none;
                  }
                
                  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
                    display:none;
                  }
                "
      `);
    });

    test('to return empty string if the target device is not supported', () => {
      expect(
        getDeviceQueryFromTheme(['test' as Devices], {display: 'block'})(),
      ).toMatchInlineSnapshot(`""`);
    });
  });

  describe('to be called with a SerializedStyles as the styles param (second) with the value of', () => {
    test('display: block and to target iPadPro', () => {
      expect(
        getDeviceQueryFromTheme(
          [Devices.iPadPro],
          css`
            display: block;
          `,
        )(),
      ).toMatchInlineSnapshot(`
        "
                  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                    
                    display: block;
                  ;
                  }
                "
      `);
    });

    test('display: inline-block and to target iPadPro', () => {
      expect(
        getDeviceQueryFromTheme(
          [Devices.iPadPro],
          css`
            display: inline-block;
          `,
        )(),
      ).toMatchInlineSnapshot(`
        "
                  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                    
                    display: inline-block;
                  ;
                  }
                "
      `);
    });

    test('display: none and to target iPadPro', () => {
      expect(
        getDeviceQueryFromTheme(
          [Devices.iPadPro],
          css`
            display: none;
          `,
        )(),
      ).toMatchInlineSnapshot(`
        "
                  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                    
                    display: none;
                  ;
                  }
                "
      `);
    });

    test('display: block and to target multiple devices', () => {
      expect(
        getDeviceQueryFromTheme(
          [Devices.iPadPro, Devices.iPad],
          css`
            display: none;
          `,
        )(),
      ).toMatchInlineSnapshot(`
        "
                  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                    
                    display: none;
                  ;
                  }
                
                  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
                    
                    display: none;
                  ;
                  }
                "
      `);
    });

    test('to return empty string if the target device is not supported', () => {
      expect(
        getDeviceQueryFromTheme(
          ['test' as Devices],
          css`
            display: block;
          `,
        )(),
      ).toMatchInlineSnapshot(`""`);
    });
  });
});
