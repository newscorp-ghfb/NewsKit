export const buildStyleTag = (body: string, existingStyles: string = '') =>
  body.split(/<style.*?>|\/style>/g).reduce(
    (acc, part, i, parts) => {
      if (part) {
        if (part[part.length - 1] === '<') {
          acc.style += part.slice(0, -1);
        } else {
          acc.body += part;
        }
      }
      if (i === parts.length - 1) {
        acc.style += '</style>';
      }
      return acc;
    },
    {body: '', style: `<style amp-custom>${existingStyles}`} as {
      body: string;
      style: string;
    },
  );
