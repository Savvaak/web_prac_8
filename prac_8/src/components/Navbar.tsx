import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

interface props {
    active: string;
}

function Navbar({ active }: props) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button variant={active === "1" ? 'contained' : 'text'} color="info" size="medium">
                            <Link to="/" style={{textDecoration:'none', color:"inherit"}}>
                            Топ автомобилей 21 века
                            </Link>
                        </Button>
                        <Button variant={active === "2" ? 'contained' : 'text'} color="info" size="medium">
                            <Link to="/list" style={{textDecoration:'none', color:"inherit"}}>
                            Список самых лучших автомобилей
                            </Link>
                        </Button>
                        <Button variant={active === "3" ? 'contained' : 'text'} color="info" size="medium">
                            <Link to="/chart" style={{textDecoration:'none', color:"inherit"}}>
                            Диаграммы
                            </Link>
                        </Button>
                        <Button variant={active === "4" ? 'contained' : 'text'} color="info" size="medium">
                            <Link to="/testing" style={{textDecoration:'none', color:"inherit"}}>
                                Проверь себя
                            </Link>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                        >
                            <MenuList>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem sx={{backgroundColor : active === "1" ? "primary.main" : "", '&:hover': { backgroundColor : active === "1" ? "primary.main" : "#5d8aa8" } }}> <Link to="/" style={{textDecoration:'none'}}>Топ автомобилей 21 века</Link> </MenuItem>
                                <MenuItem sx={{ backgroundColor : active === "2" ? "primary.main" : "", '&:hover': { backgroundColor : active === "2" ? "primary.main" : "#5d8aa8"  }}}> <Link to="/list" style={{textDecoration:'none'}}>Список самых лучших автомобилей</Link> </MenuItem>
                                <MenuItem sx={{ backgroundColor : active === "3" ? "primary.main" : "", '&:hover': { backgroundColor : active === "3" ? "primary.main" : "#5d8aa8"  }}}> <Link to="/chart" style={{textDecoration:'none'}}>Диаграмма</Link> </MenuItem>
                                <MenuItem sx={{ backgroundColor: active === "4" ? "primary.main" : "", '&:hover': { backgroundColor: active === "4" ? "primary.main" : "#5d8aa8" } }}> <Link to="/testing" style={{textDecoration:'none'}}>Проверь себя</Link> </MenuItem>
                            </MenuList>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;