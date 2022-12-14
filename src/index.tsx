import ReactDOM from "react-dom/client";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import { GlobalStyles } from "./ui/GlobalStyles";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import "./firebase";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
);
