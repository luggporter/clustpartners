import { ThemeProvider, themes } from "@doar/shared/styled";
import { useAppDispatch, useAppSelector } from "../hooks";

import { GlobalStyle } from "@doar/shared/css";
import SettingsCard from "../../components/settings";
import { TTheme } from "@doar/shared/types";
import { toggleTheme } from "../slices/theme";

const Theme = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.theme);

    const themeHandler = (curTheme: TTheme) => {
        dispatch(toggleTheme({ theme: curTheme }));
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {/* <SettingsCard themeHandler={themeHandler} curTheme={theme} /> */}
            {children}
        </ThemeProvider>
    );
};

export default Theme;
