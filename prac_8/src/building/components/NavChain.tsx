import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

interface props {
    name: string;
}

function NavChain({name}: props) {
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: "bold" }}>Топ автомобилей 21 века</Typography>
            </Link>
            <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body1" sx={{ color: "black" }}>{name}</Typography>
            </Link>
        </Breadcrumbs>
    );
}

export default NavChain;