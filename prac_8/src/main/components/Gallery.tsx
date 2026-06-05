import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cars from "../../data";
import {Link} from 'react-router-dom';

const imgData = [cars[8], cars[9], cars[10], cars[11]];

function Gallery() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={0} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Link to={'/building/8'} >
                        <Box
                            component="img"
                            src={imgData[0].img}
                            sx={{
                                width: '100%',
                                display: 'block',
                                marginTop:'10px'
                            }}
                        />
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to={'/building/9'} >
                            <Box
                                component="img"
                                src={imgData[1].img}
                                sx={{
                                    width: '100%',
                                    height: 228,
                                    marginTop:'10px'
                                }}
                            />
                            </Link>
                            <Link to={'/building/10'} >
                            <Box
                                component="img"
                                src={imgData[2].img}
                                sx={{
                                    width: '100%',
                                    height: 225,
                                   
                                }}
                            />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                    <Link to={'/building/11'} >
                    <Box
                        component="img"
                        src={imgData[3].img}
                        sx={{
                            width: '99.999%',
                            height: 300,
                            display: 'block',
                            marginBottom:'10px'
                        }}
                    />
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Gallery;