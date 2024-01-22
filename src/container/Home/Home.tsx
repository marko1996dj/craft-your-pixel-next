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
    <Box padding={5} mt={10} flexDirection={"row"}>
      <Stack mt={5} width="45%">
        <Typography variant="h1">Craft Your Pixel</Typography>
        <Typography variant="h2">Your Vision, our Precision</Typography>
      </Stack>
      <Stack width="40%" mt={5}>
        <LottiePlayer src={homepage} style={{ width: "60%", height: "auto" }} />
      </Stack>
    </Box>
  );
}

export default Home;
