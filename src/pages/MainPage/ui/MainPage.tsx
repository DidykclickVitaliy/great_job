import { useTranslation } from "react-i18next";
import { ErrorButton } from "shared/ui/ErrorButton/ErrorButton";

import { Counter } from "entities/Counter";

const MainPage = () => {
    const { t } = useTranslation("main");

    return (
        <>
            <ErrorButton />
            {/* <Counter /> */}
            <div>
                {t("Main page")}
            </div>
        </>
    );
};

export default MainPage;
