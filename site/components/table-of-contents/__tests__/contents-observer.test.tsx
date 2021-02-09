import React from 'react';
import { renderToFragmentWithTheme } from 'newskit/test/test-utils';
import {contentsObserver} from '../contents-observer'
import {TableOfContents} from '../table-of-contents'

describe('contentObserver', () => {
  
  describe('handleScroll', () => {
    it('should return ', () => {
      document.body.innerHTML = `
      <input id="mockInput" />
      <button id="mockButton">Button</button>
      `;
      const expectedElements = "[object HTMLInputElement]"
      const result = getElements(['mockInput'])[0]
      expect(result.toString()).toEqual(expectedElements)
    })
  })
})
