import { Suspense } from "react";

import { Navbar } from "widgets/Navbar";
import { LeftSidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

function App() {
    return (
        <div className="app">
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
