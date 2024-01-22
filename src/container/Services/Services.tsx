import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { Typography, Box, Stack } from '@mui/material';
import designSvg from '@/data/illustrations/Services/design.svg';
import development from '@/data/illustrations/Services/development.svg';
import mobile from '@/data/illustrations/Services/mobile.svg';
import ecommerce from '@/data/illustrations/Services/ecommerce.svg';
import uiux from '@/data/illustrations/Services/uiux.svg';
import maintenance from '@/data/illustrations/Services/maintenance.svg';
import { useEffect } from 'react';

/**
 * React component representing the Services section of page.
 *
 * @returns {JSX.Element} The rendered Services component.
 */
function Services() {
    const servicesData = [
        {
            title: 'Custom Website Design',
            description:
                'We create unique and visually appealing websites tailored to your business needs.',
            imageSrc: designSvg.src,
        },
        {
            title: 'Responsive Web Development',
            description:
                'Build responsive and user-friendly web applications that work seamlessly on all devices.',
            imageSrc: development.src,
        },
        {
            title: 'iOS & Android Development',
            description:
                'Craft cutting-edge mobile apps for both iOS and Android platforms to reach a wider audience.',
            imageSrc: mobile.src,
        },
        {
            title: 'E-commerce Solutions',
            description:
                'Create robust e-commerce platforms that enhance your online business and customer experience.',
            imageSrc: ecommerce.src,
        },
        {
            title: 'UI/UX Design',
            description:
                'Design intuitive and engaging user interfaces to provide the best user experience.',
            imageSrc: uiux.src,
        },
        {
            title: 'Website Maintenance',
            description:
                'Ensure your website stays up-to-date and secure with our reliable maintenance services.',
            imageSrc: maintenance.src,
        },
    ];

    /**
     * Function that loops through servicesData and renders
     * Services Card for each item
     *
     * @returns {JSX.Element} The rendered Services Card component.
     */
    const renderServices = () => {
        return servicesData.map((service, index) => (
            <ServiceCard service={service} key={`service-${index}`} />
        ));
    };

    return (
        <Box padding="0 80px 40px">
            <Typography textAlign="center" variant="h1" component="h2" mb={5}>
                Our Expertise
            </Typography>
            <Stack
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent="center"
                alignItems="center"
                margin="30px auto 0"
                sx={{ display: 'flex', flexWrap: 'wrap' }}
                maxWidth={1091}
            >
                {renderServices()}
            </Stack>
        </Box>
    );
}

export default Services;
