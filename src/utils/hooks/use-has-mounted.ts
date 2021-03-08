import {useState, useEffect} from 'react';

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
    }
  }, [hasMounted]);

  return hasMounted;
};
