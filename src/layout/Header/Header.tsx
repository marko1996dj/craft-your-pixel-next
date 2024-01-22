'use client';
import { useState } from 'react';
import HeaderItem from '@/components/HeaderItem/HeaderItem';
import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Renders Header
 *
 * @returns {JSX.Element[]} a Header
 */
const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const headerItems: HeaderItems[] = [
        {
            title: 'Home',
            href: '#home',
        },
        {
            title: 'About Us',
            href: '#about-us',
        },
        {
            title: 'Services',
            href: '#services',
        },
        {
            title: 'Process',
            href: '#process',
        },
        {
            title: 'Contact Us',
            href: '#contact-us',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'FAQs',
            href: '/FAQs',
        },
    ];

    /**
     * Toggle menu click
     *
     * @returns {void}
     */
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    /**
     * Renders header items based on the provided array of header items.
     *
     * @returns {JSX.Element[]} An array of JSX elements representing the rendered header items.
     */
    const renderHeaderItems = () =>
        headerItems.map((headerItem: HeaderItems) => {
            return (
                <Stack
                    display="block"
                    sx={{ mb: 1, width: 'auto' }}
                    key={`header-item-${headerItem.title}`}
                >
                    <HeaderItem
                        href={headerItem.href}
                        title={headerItem.title}
                    />
                </Stack>
            );
        });

    return (
        <AppBar
            position="fixed"
            sx={{
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                maxWidth: '600px',
                background: 'white',
                borderRadius: '37px',
                backgroundColor: 'rgba(255,255,255,.5)',
                backdropFilter: 'saturate(180%) blur(20px)',
                height: menuOpen ? '310px' : '64px',
                transition: 'all 0.3s ease',
            }}
        >
            <Toolbar
                sx={{
                    flexDirection: 'column',
                    padding: '8px 30px',
                    overflow: 'hidden',
                }}
            >
                <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    height="100%"
                >
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        Logo
                    </Typography>

                    <Stack display="flex" flexDirection="row">
                        <IconButton
                            aria-label="menu"
                            onClick={handleMenuToggle}
                        >
                            <MenuIcon
                                sx={{ color: '#5a395b', fontSize: '2rem' }}
                            />
                        </IconButton>
                    </Stack>
                </Stack>
                <Stack alignItems="flex-start" width="100%" mt={2}>
                    <Stack borderRight="2px solid #5a395b">
                        {menuOpen ? renderHeaderItems() : null}
                    </Stack>
                    <Stack></Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
