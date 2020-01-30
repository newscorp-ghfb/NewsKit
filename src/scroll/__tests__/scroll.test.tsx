import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Scroll, ScrollFlow} from '../scroll';

const Content = () => (
  <p style={{width: '400px'}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsa,
    molestiae officia ipsum facere blanditiis iste obcaecati esse, quidem
    placeat tenetur dicta distinctio inventore quasi sit sint explicabo quia
    maiores. Doloremque sit doloribus incidunt aperiam recusandae magnam nostrum
    labore eveniet, perferendis a, quibusdam, quos earum! Numquam quaerat
    recusandae commodi laudantium modi inventore voluptates officiis nesciunt
    eius, quis velit voluptatum, quos natus, adipisci nisi! Laborum eos incidunt
    maiores eaque obcaecati, itaque perferendis! Consectetur magnam pariatur
    amet, enim recusandae at laborum? Corrupti libero non, in eligendi ipsum
    odio fugiat excepturi, architecto nam pariatur reiciendis adipisci
    laudantium maiores. Earum quis magnam consequatur maxime veniam itaque quae
    eveniet quasi harum neque, expedita totam tempore aspernatur nostrum maiores
    repudiandae suscipit velit quaerat illo! Temporibus pariatur, enim mollitia
    animi odio tempore illum asperiores est soluta. Itaque obcaecati eum
    molestias expedita neque. Atque eum sint esse optio in dolore cum officia
    iusto inventore ullam nobis culpa ipsum nostrum aspernatur perferendis
    recusandae, maiores consectetur mollitia provident! Placeat voluptatem a
    natus quod sequi asperiores nam! Cupiditate illo voluptatum cumque
    laudantium quo assumenda ut repudiandae perferendis. Molestias, beatae sunt
    deleniti quasi nobis, provident sequi iste quod corporis incidunt repellat
    architecto ab voluptates saepe dolor velit, perspiciatis adipisci veritatis
    debitis laboriosam?
  </p>
);

describe('Scroll', () => {
  test(`renders scroll when no properties are set`, () => {
    const fragment = renderToFragmentWithTheme(Scroll, {
      children: <Content />,
    });

    expect(fragment).toMatchSnapshot();
  });

  Object.values(ScrollFlow).forEach(scrollFlowKey => {
    test(`renders where the scroll flow is ${scrollFlowKey}`, () => {
      const fragment = renderToFragmentWithTheme(Scroll, {
        flow: scrollFlowKey,
        children: <Content />,
      });

      expect(fragment).toMatchSnapshot();
    });
  });
});
