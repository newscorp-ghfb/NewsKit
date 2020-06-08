export const get = (obj: unknown, path: string) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path.split('.').reduce((acc: any, key) => acc && acc[key], obj);
