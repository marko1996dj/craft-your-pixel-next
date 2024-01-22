import { motion } from 'framer-motion';
import { Box, Button, Stack, Typography } from '@mui/material';
import Homepage from '@/data/illustrations/Homepage';

/**
 * React component representing the Home section of the page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
    const textVariants = {
        hidden: {
            opacity: 0,
            x: '-100%',
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.3 },
        },
    };

    return (
        <Box
            mt={5}
            flexDirection={{ xs: 'column', md: 'row' }}
            display="flex"
            justifyContent="space-between"
            sx={{ padding: '0 80px 40px ' }}
            height="100vh"
        >
            <Stack justifyContent="center" width={{ sx: '45%', md: '100%' }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    whileHover="visible"
                    variants={textVariants}
                    transition={{ ease: 'ease' }}
                >
                    <Typography variant="h1">Craft Your Pixel</Typography>
                    <Typography variant="h3">
                        Your Vision, our Precision
                    </Typography>
                    <Button sx={{ mt: 3 }}>Start your project</Button>
                </motion.div>
            </Stack>
            <Stack width={{ sx: '55%', md: '100%' }} justifyContent="center">
                <Homepage />
            </Stack>
        </Box>
    );
}

export default Home;
