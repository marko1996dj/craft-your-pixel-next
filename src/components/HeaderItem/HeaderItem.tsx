import { Typography, useTheme } from "@mui/material";

/**
 * Renders a header item
 *
 * @param {object} props - The properties of the HeaderItem component.
 * @param {string} props.href - The URL the header item links to.
 * @param {string} props.title - The title or text content of the header item.
 *
 * @returns {JSX.Element} The rendered HeaderItem component.
 */
function HeaderItem({ href, title }: { href: string; title: string }) {
  const theme = useTheme();

  return (
    <Typography
      component={"a"}
      href={href}
      fontSize="1rem"
      fontWeight={500}
      textTransform="uppercase"
      mr={4}
      sx={{
        textDecoration: "none",
        position: "relative",
        "&:before": {
          width: "0",
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          backgroundColor: theme.palette.text.secondary,
          transition: "width 0.3s ease-in-out",
        },
        "&:hover": {
          "&::before": {
            width: "100%",
          },
        },
      }}
    >
      {title}
    </Typography>
  );
}

export default HeaderItem;
