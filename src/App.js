import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.module.scss";
import { Container } from "react-bootstrap";
import clsx from "clsx";

import GlobalStyle from "@/GlobalStyle/GlobalStyle";
import Routers from "@/Routers";
import styles from "@/App.module.scss";

function App() {
  return (
    <GlobalStyle>
      <div className={clsx(styles.App)}>
        <Router>
          <Routes>
            {Routers.map((RouteItem, index) => (
              <Route
                key={index}
                path={RouteItem.path}
                element={<RouteItem.Element />}
              />
            ))}
          </Routes>
        </Router>
      </div>
    </GlobalStyle>
  );
}

export default App;
