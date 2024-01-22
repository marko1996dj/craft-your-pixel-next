import LottiePlayer from "@/lib/LottiePlayer/LottiePlayer";
import { Box, Stack, Typography } from "@mui/material";
import homepage from "../../../public/data/illustrations/homepage.json";

/**
 * React component representing the Home section of page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  return (
    <Box padding={5} sx={{ backgroundColor: "#cccccc" }}>
      <Stack flexDirection="column" alignItems="center" mt={5}>
        <Typography variant="h1">Craft Your Pixel</Typography>
        <Typography variant="h2">Your Vision, our Precision</Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="center" mt={5}>
        <LottiePlayer src={homepage} style={{ width: "60%", height: "auto" }} />
      </Stack>
    </Box>
  );
}

export default Home;
