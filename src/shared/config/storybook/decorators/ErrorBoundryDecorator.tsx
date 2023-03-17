import { Story } from "@storybook/react";
import { ErrorBoundary } from "app/providers/ErrorBoundry";

export const ErrorBoundryDecorator = (story: () => Story) => (
    <ErrorBoundary>
        {story()}
    </ErrorBoundary>
);
