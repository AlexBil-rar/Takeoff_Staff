import  React from 'react';
import {useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action/user.action';

const theme = createTheme();

const Login = () => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const error = useTypedSelector(state => state.user.error)

    const dispatch = useDispatch()

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await dispatch(fetchUsers(email, password))
      }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Typography color="red">
                {error}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={ handleClick }
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
};

export default Login;