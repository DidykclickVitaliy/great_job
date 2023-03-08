import { useTranslation } from "react-i18next";
import { ErrorButton } from "shared/ui/ErrorButton/ErrorButton";

const MainPage = () => {
    const { t } = useTranslation("main");

    return (
        <>
            <ErrorButton />
            <div>
                {t("Main page")}
            </div>
        </>
    );
};

export default MainPage;
