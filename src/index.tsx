import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ErrorBoundary } from "app/providers/ErrorBoundry";
import { StoreProvider } from "app/providers/StoreProvider";

import "shared/config/i18n";
import "app/styles/index.scss";

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root"),
);
