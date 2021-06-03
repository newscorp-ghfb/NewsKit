import {useState, useEffect} from 'react';
import {getSSRId} from '..';

export const useReactKeys = (keysCount: number) => {
  const [keysArray, setKeysArray] = useState<string[]>([]);
  useEffect(() => {
    const tempArray = [];
    for (let keyIdx = 0; keyIdx < keysCount; keyIdx += 1) {
      tempArray.push(getSSRId());
    }
    setKeysArray(tempArray);
  }, [keysCount]);
  return keysArray;
};
