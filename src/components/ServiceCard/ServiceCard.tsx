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
                width: { xs: 'calc(100% - 30px)', md: 'calc(33.33% - 30px)' },
                margin: '15px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
            }}
        >
            <CardMedia
                src={service.imageSrc}
                title={service.title}
                component="img"
                sx={{
                    padding: 1,
                    height: '250px',
                    objectFit: 'contain',
                }}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    component="h3"
                    fontSize="20px"
                    mb={1}
                >
                    {service.title}
                </Typography>
                <Typography variant="body1" component="p" fontSize="16px">
                    {service.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;
