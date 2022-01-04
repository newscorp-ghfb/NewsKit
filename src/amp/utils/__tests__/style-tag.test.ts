import {readFileSync} from 'fs';
import {buildStyleTag} from '../style-tag';

describe('style-tag', () => {
  describe('buildStyleTag', () => {
    describe('returns expected amp style and clean html body', () => {
      test('with a simple style tag', () => {
        const style = '.some-class { color: red; }';
        expect(
          buildStyleTag(
            `<body><style>${style}</style><h1 class="some-class">heading</h1></body>`,
          ),
        ).toMatchSnapshot();
      });

      test('with multiple style tags', () => {
        expect(
          buildStyleTag(`<body>
  <style>.class1 {color: red;}</style>
  <h1 class="class1">heading 1</h1>
  <style>.class2 {background: blue;margin: 10px;}</style>
  <h2 class="class1 class2">heading 2</h2>
</body>`),
        ).toMatchSnapshot();
      });

      test('with nested style tags', () => {
        const actual = buildStyleTag(`<body>
        <div>
          <style>.class1 {color: red;}</style>
          <h1 class="class1">heading 1</h1>
          <style>.class2 {background: blue;margin: 10px;}</style>
          <div class="class2">
            <div>
              <ul>
                <style>li.listitem {background: green;} li.listitem::before {content:'-> ';}</style>
                <li class="listitem">alpha</li>
                <li class="listitem">bravo</li>
              </ul>
            </div>
            <h2 class="class1 class2">heading 2</h2>
          </div>
        </div>
      </body>`);
        expect(actual).toMatchSnapshot();
      });

      test('with existing styles', () => {
        expect(
          buildStyleTag(
            `<body>
  <style>.class1 {color: red;}</style>
  <h1 class="class1">heading 1</h1>
  <style>.class2 {background: blue;margin: 10px;}</style>
  <h2 class="class1 class2">heading 2</h2>
</body>`,
            '.css-class{ border: solid 1px blue; } h1,h2 { font-weight: 600; }',
          ),
        ).toMatchSnapshot();
      });

      test('fixture test', () => {
        const actual = buildStyleTag(
          readFileSync(`${__dirname}/style-tag-fixture.html`, {
            encoding: 'utf8',
          }),
        );
        expect(actual).toMatchSnapshot();
      });
    });
  });
});
