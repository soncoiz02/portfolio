import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material"
import breakpoint from "./breakpoint"
import { DARK_PALETTE, LIGHT_PALETTE } from "./palette"
import typography from "./typography"

import React, { createContext, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const MuiThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: mode === 'dark' ? { ...DARK_PALETTE, mode } : { ...LIGHT_PALETTE, mode },
                typography: typography,
                breakpoints: breakpoint
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
        </ColorModeContext.Provider>
    )
}

export default MuiThemeProvider