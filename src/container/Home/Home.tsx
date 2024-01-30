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
            flexDirection={{ xs: 'column', md: 'row' }}
            display="flex"
            justifyContent="space-between"
            padding={{ xs: '15px', md: '50px 80px 40px' }}
            height="100vh"
        >
            <Stack
                justifyContent="center"
                alignItems={{ xs: 'center' }}
                width={{ xs: '100%', md: '100%' }}
                height={{ xs: '50%', md: '100%' }}
                sx={{
                    xs: {
                        paddingTop: '60px',
                    },
                }}
            >
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
            <Stack
                width={{ xs: '100%', md: '100%' }}
                height={{ xs: '50%', md: '100%' }}
                justifyContent="center"
            >
                <Homepage />
            </Stack>
        </Box>
    );
}

export default Home;
