import LottiePlayer from "@/lib/LottiePlayer/LottiePlayer";
import { Typography, Box, Stack } from "@mui/material";
// import aboutUs from "@/data/illustrations/who-are-we.json";

/**
 * React component representing the ContactUs section of page.
 *
 * @returns {JSX.Element} The rendered ContactUs component.
 */
function ContactUs() {
  return (
    <Box padding={5}>
      <Typography textAlign="center" variant="h1" component="h2">
        Who We Are
      </Typography>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        mt={3}
      >
        <Stack width={{ xs: "100%", md: "40%" }}>
          <Typography variant="body1" fontSize="1.7rem">
            Craft Your Pixel is a passionate team of web designers and
            developers committed to crafting exceptional digital experiences.
            With 10 years of expertise, we blend creativity and technology to
            bring your vision to life.
          </Typography>
        </Stack>
        <Stack width={{ xs: "100%", md: "40%" }}>
          <LottiePlayer
            src={aboutUs}
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

export default ContactUs;
