import { classNames } from "shared/lib/classNames";
import { useTheme } from "shared/lib/theme/useTheme";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
