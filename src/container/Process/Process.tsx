import { Typography, Box, Stack } from '@mui/material';

/**
 * React component representing the About section of page.
 *
 * @returns {JSX.Element} The rendered About component.
 */
function Process() {
    return (
        <Box padding={5}>
            <Typography textAlign="center" variant="h1" component="h2">
                How We Work
            </Typography>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                mt={3}
            >
                <Stack width={{ xs: '100%', md: '40%' }}>
                    <Typography variant="body1" fontSize="1.7rem">
                        Discover our streamlined development process. From
                        concept to delivery, we ensure transparent communication
                        and collaboration, keeping you informed at every stage.
                    </Typography>
                </Stack>
                <Stack width={{ xs: '100%', md: '40%' }}></Stack>
            </Stack>
        </Box>
    );
}

export default Process;
