import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PageLoader } from "features/ui/PageLoader";
import { routeConfig } from "../config/routeConfig";

export const AppRouter: FC = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>

);
