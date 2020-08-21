export const isLinkExternal = (href: string) => {
  const hostName = href.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);

  if (hostName && typeof window !== 'undefined') {
    const hostLocation = window.location.host;
    if (hostName[1] !== hostLocation.replace('www.', '')) {
      return true;
    }
  }
  return false;
};
