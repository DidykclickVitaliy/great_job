import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routeConfig } from "../config/routeConfig";

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};
