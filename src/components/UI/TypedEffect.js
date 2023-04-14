'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedEffect = ({ text }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return <span ref={el}></span>;
};
export default TypedEffect;
