import {RouteObject} from './get-route-object';
import routes from '../routes';

let initialRoute: RouteObject | undefined;
let subNavRoute: RouteObject | undefined;
let subNavIndex: number | undefined;
const findIndex = (
  currentPath: string,
  currentRoute: string[],
  routesData: RouteObject[] | undefined,
  elementIndex: number,
): {
  currentIndex: number | undefined;
  matchedRoute: RouteObject | undefined;
} => {
  const matchedRoute =
    currentRoute &&
    routesData &&
    routesData.find(e => e.id.includes(currentRoute[elementIndex]));
  const currentSubNav = matchedRoute && matchedRoute.subNav;
  if (!initialRoute) {
    initialRoute = currentSubNav && currentSubNav[0];
  }
  const currentIndex =
    currentSubNav &&
    currentSubNav.findIndex((e: RouteObject) => e.id === currentPath);
  if (currentIndex === -1) {
    subNavRoute = matchedRoute;
    return findIndex(
      currentPath,
      currentRoute,
      currentSubNav,
      elementIndex + 1,
    );
  }
  subNavIndex =
    matchedRoute &&
    routesData.findIndex((e: RouteObject) => e.id === matchedRoute.id);
  return {currentIndex, matchedRoute};
};

export const getFeatureCard = (path: string) => {
  const currentPath = path.slice(0, -1);
  const currentRoute: string[] = currentPath.match(/\/[A-z\d-]*/g) || [];
  const {currentIndex, matchedRoute} = findIndex(
    currentPath,
    currentRoute,
    routes,
    0,
  );
  let feature =
    currentIndex !== -1 &&
    matchedRoute &&
    matchedRoute.subNav &&
    matchedRoute.subNav[currentIndex ? currentIndex + 1 : 1];
  if (!feature) {
    feature =
      subNavRoute &&
      subNavRoute.subNav &&
      subNavRoute.subNav[subNavIndex ? subNavIndex + 1 : 1];
  }
  if (feature && feature.subNav) {
    feature = feature && feature.subNav[0];
  }
  const featureCard = {
    ...(feature || initialRoute),
    href: (feature && feature.id) || initialRoute?.id,
  };
  return featureCard;
};
