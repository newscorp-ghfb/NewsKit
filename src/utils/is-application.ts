export const isApplication = (): boolean =>
  //@ts-ignore
  process.browser ||
  process.env.SITE === 'true' ||
  process.env.STORYBOOK === 'true';
