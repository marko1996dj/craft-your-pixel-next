'use client';
import HeaderItem from '@/components/HeaderItem/HeaderItem';
import { AppBar, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

/**
 * Renders Header
 *
 * @returns {JSX.Element[]} a Header
 */
const Header = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    /**
     * Event listener for scroll
     */
    useEffect(() => {
        window.addEventListener('scroll', (e: Event) => handleScroll(e));
    }, []);

    /**
     * Handle scroll sets isScrolled attribute to true / false depending
     * on scrollY value. If scroll value is greater than 0 then
     * isScrolled is set to true.
     *
     * @param e - Event target from event listener
     *
     * @return {void}
     */
    const handleScroll = (e: Event) => {
        const currentTarget = e.currentTarget as Window;
        setIsScrolled(currentTarget.scrollY > 0);
    };

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
     * Renders header items based on the provided array of header items.
     *
     * @returns {JSX.Element[]} An array of JSX elements representing the rendered header items.
     */
    const renderHeaderItems = () =>
        headerItems.map((headerItem: HeaderItems) => {
            return (
                <HeaderItem
                    href={headerItem.href}
                    title={headerItem.title}
                    key={`header-item-${headerItem.title}`}
                />
            );
        });

    return (
        <AppBar
            position="fixed"
            sx={{
                top: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                maxWidth: '60%',
                background: 'white',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,255,255,.5)',
                backdropFilter: 'saturate(180%) blur(20px)',
            }}
        >
            <Toolbar>
                <Typography variant="h4" style={{ flexGrow: 1 }}>
                    Logo
                </Typography>
                <Stack display="flex" flexDirection="row">
                    {renderHeaderItems()}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
