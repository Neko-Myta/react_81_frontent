import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/Globalstyle";
//import Layout from "./components/Layuot/Layout";

import { routesEmployeeData } from "./routesEmployee/data";
import type { RouteObj } from "./routes/type";
import { v4 } from "uuid";
import LayoutEmployee from "./components/LayoutEmployee/LayoutEmployee";

// Импорты лекций
function App() {
  const routes = routesEmployeeData.map((route: RouteObj) => {
    return <Route key={v4()} path={route.path} element={route.element} />;
  });
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        {/*<Layout>
          <Routes>{routes}</Routes>
        </Layout>*/}

        <LayoutEmployee>
          <Routes>{routes}</Routes>
        </LayoutEmployee>
      </BrowserRouter>
    </>
  );
}
export default App;
