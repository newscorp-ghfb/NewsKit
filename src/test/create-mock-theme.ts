/**
 * Given a real theme, creates a mock theme object where the values are
 * just strings representing the theme value. These mock objects are
 * intended to be used in unit tests so that changes to the theme values
 * do not break unit tests.
 *
 * Example input:
 * {
 *   borders: {
 *     useRoundedCorners: true,
 *     radius100: '2px',
 *     radius200: '4px',
 *     radius300: '8px',
 *   },
 *   animation: {
 *     animationDuration020: '0.25s',
 *     animationDuration040: '0.4s',
 *   }
 * }
 *
 * Example output:
 * {
 *   borders: {
 *     useRoundedCorners: 'theme.borders.useRoundedCorners',
 *     radius100: 'theme.borders.radius100',
 *     radius200: 'theme.borders.radius200',
 *     radius300: 'theme.borders.radius300',
 *   },
 *   animation: {
 *     animationDuration020: 'theme.animation.animationDuration020',
 *     animationDuration040: 'theme.animation.animationDuration040',
 *   }
 * }
 */
export default function createMockTheme(
  base: Record<string, unknown>,
  prefix: string = 'theme',
) {
  const mock: Record<string, unknown> = {};

  Object.keys(base).forEach(key => {
    const path = `${prefix}.${key}`;
    if (typeof base[key] === 'object') {
      mock[key] = createMockTheme(base[key] as Record<string, unknown>, path);
    } else {
      mock[key] = path;
    }
  });

  return mock;
}
