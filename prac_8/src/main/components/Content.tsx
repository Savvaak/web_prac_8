import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cars from "../../data";
import BuildCard from './BuildCard';
import Footer from '../../components/Footer';

const cardData = [cars[0], cars[1], cars[2], cars[3], cars[4], cars[5], cars[6], cars[7]];

function Content() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 6 }}>
        {cardData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }} >
           <BuildCard building={item} index={ index }/>
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </Container>
  );
}

export default Content;