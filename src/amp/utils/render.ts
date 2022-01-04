import React from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server';
import {buildStyleTag} from './style-tag';

export const renderToStaticMarkup = (
  bodyContent: React.ReactElement,
  headContent: React.ReactElement,
  existingStyles?: string,
) => {
  const {body: bodyHtml, style} = buildStyleTag(
    render(bodyContent),
    existingStyles,
  );
  const headHtml = render(headContent);

  return `<!doctype html><html amp><head>${headHtml}${style}</head><body>${bodyHtml}</body></html>`;
};
