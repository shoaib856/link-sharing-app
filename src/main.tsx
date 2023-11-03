import ReactDOM from "react-dom/client";
import Routes from "./Routes.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Routes />
  </Provider>
);
