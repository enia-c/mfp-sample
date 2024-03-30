import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("AuthAPp.js", history.location.pathname);
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (nextPathname !== pathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        onSignIn();
      },
    });
    console.log(onParentNavigate);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
