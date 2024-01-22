import { Typography, Card, CardContent, CardMedia } from '@mui/material';

function ServiceCard({
    service,
}: {
    service: {
        imageSrc: string;
        title: string;
        description: string;
    };
}) {
    return (
        <Card
            sx={{
                background: 'white',
                width: { xs: '100%', md: 'calc(33.33% - 30px)' },
                margin: '15px', // Adjust the margin between cards
                height: '100%', // Set the height to 100%
                display: 'flex',
                flexDirection: 'column',
                minHeight: '130px',
                boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
            }}
        >
            <CardMedia
                src={service.imageSrc}
                title={service.title}
                component="img"
                sx={{
                    padding: 1,
                    height: '140px',
                    objectFit: 'contain',
                    width: 'auto',
                }}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;
