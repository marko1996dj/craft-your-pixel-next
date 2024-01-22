import LottiePlayer from "@/lib/LottiePlayer/LottiePlayer";
import { Typography, Box, Stack } from "@mui/material";
import services from "../../../public/data/illustrations/services.json";
import Lottie from "react-lottie-player";

/**
 * React component representing the Services section of page.
 *
 * @returns {JSX.Element} The rendered Services component.
 */
function Services() {
  return (
    <Box padding={5} sx={{ backgroundColor: "#cccccc" }}>
      <Typography textAlign="center" variant="h1" component="h2">
        Our Expertise
      </Typography>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        mt={3}
      >
        <Stack width={{ xs: "100%", md: "40%" }}>
          <Lottie
            loop
            play
            animationData={services}
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
        <Stack width={{ xs: "100%", md: "40%" }}>
          <Typography variant="body1" fontSize="1.7rem">
            Explore our comprehensive range of services: Custom Website Design,
            Responsive Web Development, Mobile App Development (iOS & Android),
            E-commerce Solutions, UI/UX Design, Website Maintenance.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Services;
