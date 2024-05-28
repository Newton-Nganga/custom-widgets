
import { useState } from 'react';

export default function useClassToggle  (initialValue) {
  const [classState, setClassState] = useState(initialValue);

  const toggleClass = () => {
    setClassState(!classState);
  };

  return { classState, toggleClass };
}

