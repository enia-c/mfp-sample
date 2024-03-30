import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  history.listen(onNavigate);
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, {
      onNavigate: () => {},
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
