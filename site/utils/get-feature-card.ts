import {useRouter} from 'next/router';
import {RouteObject} from './get-route-object';
import {routes} from '../routes';

let initialRoute: RouteObject | undefined;
let subNavRoute: RouteObject | undefined;
let subNavIndex: number | undefined;
const findIndex = (
  path: string,
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
    initialRoute =
      currentSubNav && currentSubNav[1].subNav && currentSubNav[1].subNav[0];
  }
  const currentIndex =
    currentSubNav && currentSubNav.findIndex((e: RouteObject) => e.id === path);
  if (currentIndex === -1) {
    subNavRoute = matchedRoute;
    return findIndex(path, currentRoute, currentSubNav, elementIndex + 1);
  }
  subNavIndex =
    matchedRoute &&
    routesData.findIndex((e: RouteObject) => e.id === matchedRoute.id);
  return {currentIndex, matchedRoute};
};

export const useGetFeatureCard = () => {
  const path = useRouter()?.pathname || '';
  const currentRoute: string[] = path.match(/\/[A-z\d-]*/g) || [];
  const {currentIndex, matchedRoute} = findIndex(path, currentRoute, routes, 0);
  const currentFeature: undefined | RouteObject = (currentIndex &&
    currentIndex !== -1 &&
    matchedRoute &&
    matchedRoute.subNav &&
    matchedRoute.subNav[currentIndex]) as undefined | RouteObject;

  let feature;
  if (currentIndex !== -1 && matchedRoute && matchedRoute.subNav) {
    if (currentFeature?.nextId) {
      feature = matchedRoute.subNav.find(
        subNav => subNav.id === currentFeature?.nextId,
      );
    } else {
      feature = matchedRoute.subNav[currentIndex ? currentIndex + 1 : 1];
    }
  }
  if (!feature) {
    if (subNavRoute && subNavRoute.subNav) {
      if (currentFeature?.nextId) {
        feature = subNavRoute.subNav.find(
          subNav =>
            subNav.id === currentFeature?.nextId ||
            (subNav.subNav &&
              subNav.subNav.find(
                subSubNav => subSubNav.id === currentFeature?.nextId,
              )),
        );
      } else {
        feature = subNavRoute.subNav[subNavIndex ? subNavIndex + 1 : 1];
      }
    }
  }
  if (feature && feature.subNav) {
    let index = 0;
    if (currentFeature?.nextId) {
      index = feature.subNav.findIndex(
        subSubNav => subSubNav.id === currentFeature?.nextId,
      );
    }
    feature = feature && feature.subNav[Math.max(index, 0)];
  }
  const featureCard = {
    ...(feature || initialRoute),
    href: (feature && feature.id) || initialRoute?.id,
  };
  return featureCard;
};
