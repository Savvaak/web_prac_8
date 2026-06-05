import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import NavChain from "./NavChain";

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

interface data {
    img: string;
    title: string;
    description: string[];
}

interface contentProps {
    struct: data;
}

function Content({ struct }: contentProps) {

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <NavChain name={struct.title} />
            <Typography variant="h4" sx={{ textAlign: "center", color: "grey", marginTop: "10px" }}>{struct.title}</Typography>
            <img
                srcSet={struct.img}
                src={struct.img}
                alt={struct.title}
                loading="lazy"
                style={{ width: "450px", display: "block", margin: "20px auto" }} />
            <StyledBox>
                {struct.description.map((item, ind) => (
                    <StyledTypography key={ind} variant="body2" sx={{ width: { sm: "100%", lg: "100%" } }}>
                        {item}
                    </StyledTypography>
                ))}
            </StyledBox>
        </Container>
    );
}
export default Content;