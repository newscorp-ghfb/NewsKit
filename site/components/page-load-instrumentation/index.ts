import {EventTrigger, useInstrumentation} from 'newskit';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

type RouteEventHandler = (url: string) => void;

export const PageLoadInstrumentation = () => {
  const {events} = useRouter();
  const {fireEvent} = useInstrumentation();

  useEffect(() => {
    const handleRouteChange: RouteEventHandler = url => {
      fireEvent({
        originator: 'page-load',
        trigger: EventTrigger.Load,
        context: {
          url,
        },
      });
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events, fireEvent]);

  return null;
};
