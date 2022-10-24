import {routes} from '../routes';

export interface RouteObject {
  title: string;
  id: string;
  page?: boolean;
  subNav?: RouteObject[];
  media?: string;
  description?: string;
  illustration?: string;
}

const findRoute = (
  matcher: (obj: RouteObject) => boolean,
  arr: RouteObject[],
): RouteObject | undefined => {
  for (let i = 0; i < arr.length; i += 1) {
    const route = arr[i];
    if (matcher(route)) {
      return route;
    }
    if (route.subNav) {
      const r = findRoute(matcher, route.subNav);
      if (r) {
        return r;
      }
    }
  }
  return undefined;
};

export const getByTitle = (title: string) =>
  findRoute(o => o.title === title, routes);
