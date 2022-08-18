import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {logout} from "../store/reducers/UserReducers";
import {useDispatch} from "react-redux";
import Container from '@mui/material/Container';

const Header = () => {
    const dispatch = useDispatch()

    return (
        <>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography
                    component="h2"
                    variant="h5"
                    color="#4682B4"
                    align="left"
                    noWrap
                    sx={{ flex: 1 }}
                    >
                        Takeoff Staff
                    </Typography>
                    <IconButton>
                    </IconButton>
                        <Button 
                            variant="outlined" 
                            onClick={() => dispatch(logout()) }
                        >
                            LOG OUT 
                        </Button>
                </Toolbar>
            </Container>
        </Toolbar>
        </>
    );
};

export default Header;