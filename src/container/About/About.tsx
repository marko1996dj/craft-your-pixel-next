import { Typography, Box, Stack } from '@mui/material';
import AboutUs from '@/data/illustrations/AboutUs';

/**
 * React component representing the About section of page.
 *
 * @returns {JSX.Element} The rendered About component.
 */
function About() {
    return (
        <Box padding="0px 80px 40px">
            <Typography textAlign="center" variant="h1" component="h2">
                Who We Are
            </Typography>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                mt={3}
            >
                <Stack width={{ xs: '100%', md: '50%' }}>
                    <Typography variant="body1" fontSize="1.3rem" width="100%">
                        Craft Your Pixel is a passionate team of web designers,
                        developers, marketing and finance experts committed to
                        crafting exceptional digital experiences. With 10 years
                        of expertise, we blend creativity and technology to
                        bring your vision to life.
                    </Typography>
                </Stack>
                <Stack width={{ xs: '100%', md: '40%' }}>
                    <AboutUs />
                </Stack>
            </Stack>
        </Box>
    );
}

export default About;
