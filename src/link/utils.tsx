export const isLinkExternal = (href: string) => {
  if (typeof window !== 'undefined') {
    const hostLocation = window.location.host;

    return !(
      href.includes(hostLocation) ||
      href[0] === '/' ||
      href[0] === '#' ||
      href.startsWith('mailto') ||
      href.startsWith('tel')
    );
  }
  return false;
};
