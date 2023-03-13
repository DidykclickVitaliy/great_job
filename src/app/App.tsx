import { Suspense } from "react";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "shared/lib/theme/useTheme";
import { Navbar } from "widgets/Navbar";
import { LeftSidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <LeftSidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
