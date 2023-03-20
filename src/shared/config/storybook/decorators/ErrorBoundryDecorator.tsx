import { PartialStoryFn } from "@storybook/addons";
import { ErrorBoundary } from "app/providers/ErrorBoundry";

export const ErrorBoundryDecorator = () => (story: PartialStoryFn) => (
    <ErrorBoundary>
        {story()}
    </ErrorBoundary>
);
