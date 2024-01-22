"use client";
import HeaderItem from "@/components/HeaderItem/HeaderItem";
import { AppBar, Stack, Toolbar, Typography, useTheme } from "@mui/material";

/**
 * Renders Header
 *
 * @returns {JSX.Element[]} a Header
 */
const Header = () => {
  const theme = useTheme();

  const headerItems: HeaderItems[] = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About Us",
      href: "#about-us",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "Process",
      href: "#process",
    },
    {
      title: "Contact Us",
      href: "#contact-us",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "FAQs",
      href: "/FAQs",
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
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
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
