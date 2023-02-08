import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/RouterProvider";
import { useTheme } from "./providers/ThemeProvider";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Change theme</button>

      <AppRouter />
    </div>
  );
};
