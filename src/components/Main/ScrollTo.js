import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTo({ positionToScrollTo }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.scrollBy(0, 200);
    console.log('in ScrollTo', typeof positionToScrollTo);
    console.log(positionToScrollTo);
  }, [pathname]);

  return null;
}
