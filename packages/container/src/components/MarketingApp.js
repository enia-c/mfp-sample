import { mount } from "marketing/MarketingApp";

import React, { useEffect, useLayoutEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
