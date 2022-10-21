import {getByTitle} from '../get-route-object';

let mockGroup1: any;
let mockGroup2Page1A: any;

jest.mock('../../routes', () => {
  mockGroup1 = {
    title: 'Group1',
    id: '/group1',
    subNav: [
      {
        title: 'Group1Page1',
        page: true,
        id: '/group1/page1',
      },
    ],
  };
  mockGroup2Page1A = {
    title: 'Group2Page1A',
    page: true,
    id: '/group2/page1/a',
  };

  return {
    routes: [
      mockGroup1,
      {
        title: 'Group2',
        id: '/group2',
        subNav: [
          {
            title: 'Group2Page1',
            id: '/group2/page1',
            subNav: [mockGroup2Page1A],
          },
        ],
      },
    ],
  };
});

describe('get-route-object', () => {
  describe('getByTitle', () => {
    it('should retreive a root level object', () => {
      expect(getByTitle('Group1')).toEqual(mockGroup1);
    });

    it('should retreive a nested object', () => {
      expect(getByTitle('Group2Page1A')).toEqual(mockGroup2Page1A);
    });

    it('should return undefined if object not found', () => {
      expect(getByTitle('NonExistentTitle')).toBeUndefined();
    });
  });
});
