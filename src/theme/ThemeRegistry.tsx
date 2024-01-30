'use client';

import {
    createTheme,
    ThemeOptions,
    ThemeProvider,
    responsiveFontSizes,
} from '@mui/material';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/system';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 12,
        h1: {
            fontWeight: 500,
            color: '#5a395b',
            fontSize: '4rem',
        },
        h2: {
            fontWeight: 500,
            color: '#5a395b',
        },
        h3: {
            fontWeight: 400,
            color: '#5a395b',
        },
        h4: {
            fontWeight: 500,
            color: '#5a395b',
        },
        h5: {
            fontWeight: 500,
            color: '#5a395b',
        },
        h6: {
            fontWeight: 500,
            color: '#5a395b',
        },
        body1: {
            color: '#333333',
        },
        body2: {
            fontWeight: 500,
            color: '#333333',
        },
    },
    palette: {
        background: {
            default: '#fff',
            paper: '#ffddd1',
        },
        text: {
            primary: '#5a395b',
            secondary: '#846a8a',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#5a395b',
                    fontSize: '1rem',
                    color: 'white',
                    width: 'fit-content',
                    padding: '10px 20px',
                    '&:hover': {
                        backgroundColor: '#846a8a',
                    },
                },
            },
        },
    },
};

const theme = responsiveFontSizes(createTheme(themeOptions));

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <GlobalStyles
                    styles={{
                        '::selection': {
                            backgroundColor: '#e1c1e1',
                            // color: '#fff',
                        },
                    }}
                ></GlobalStyles>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
