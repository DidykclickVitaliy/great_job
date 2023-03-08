import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../Button/Button";

export const ErrorButton: FC = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={() => setError(true)}
        >
            {t("Throw error")}
        </Button>
    );
};
