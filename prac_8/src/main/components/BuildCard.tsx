import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  margin: '5px'
}));

interface ComponentProps {
  building: {
    img: string,
    title: string,
    description: string[],
  };
  index: number;
}

function BuildCard({ building, index }: ComponentProps) {
  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: index === 2 || index === 3 || index === 6 || index === 7 ? 'row' : 'column' },
      height: '100%'
    }}>
      <CardMedia
        component="img"
        alt={building.title}
        image={building.img}
        sx={{ 
          order: {md:index === 4 || index === 5 || index === 2 || index === 3 ? 1:3, xs:3}, 
          width: {md:index === 2 || index === 3 || index === 6 || index === 7 ? '33%' : '100%', xs:"100%"},
          alignSelf: 'center'
        }}
      />
      <Box sx={{ 
        order: 1, 
        width: {md:index === 2 || index === 3 || index === 6 || index === 7 ? '30%' : 'auto', xs:"100%" },
        alignSelf:'center'
      }}>
        <CardContent>
          <StyledTypography gutterBottom variant="h6" >
            {building.title}
          </StyledTypography>
        </CardContent>
      </Box>
      <Box sx={{ 
        order: {md:index === 2 || index === 3 ? 3 : 2, xs: 2} , 
        width: {md:index === 2 || index === 3 || index === 6 || index === 7 ? '42%' : 'auto', xs:"100%"},
        alignSelf:'center'
        
      }}>
        {building.description.map((item, ind) => (
          <StyledTypography key={ind} variant="body2">    
            {item}
          </StyledTypography>
        ))}
        <CardActions sx={{justifyContent: index === 4 || index === 5 ? 'start' : 'end'}} >
          <Button>Подробнее</Button>
        </CardActions>
      </Box>
    </Card>
  )
}

export default BuildCard;