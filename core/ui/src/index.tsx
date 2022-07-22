import { createRoot } from "react-dom/client";
import React, { FC } from "react";

// https://dev.to/alekseiberezkin/setting-up-react-typescript-app-without-create-react-app-oph

const App: FC = () => {
  return <h1>Aplicação Core React do Pin</h1>;
};

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);
