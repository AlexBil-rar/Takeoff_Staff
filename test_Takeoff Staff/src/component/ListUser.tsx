import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTypedSelector } from '../hooks/useTypedSelector';
import TextField from '@mui/material/TextField';
import Users from './Users';
import ModalCreate from './ModalCreate';

const ListUser = () => {
    const users = useTypedSelector(state => state.users.users)
    const [search, setSearch] = React.useState<string>('')

    return (
        <>
            <Container maxWidth="lg">
            <Container maxWidth="md">
                <Grid  container spacing={2}>
                    <Grid item  md={9} >
                        <TextField 
                            id="standard-basic" 
                            fullWidth 
                            label="Найти пользователя по Email" 
                            variant="standard" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                        />
                    </Grid>  
                    <Grid item  md={2} >
                        <ModalCreate/>
                    </Grid>  
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs="auto" md={1}>
                        <h3>id</h3>
                    </Grid>
                    <Grid container justifyContent="center" item xs="auto"  md={4}>
                        <h3>Email</h3>
                    </Grid>
                    <Grid container justifyContent="center" item xs="auto" md={4}>
                        <h3>Имя</h3>
                    </Grid>
                    <Grid item xs="auto" md={1}>
                        <h3>Редактировать </h3>
                    </Grid>
                </Grid>
                {users.filter((s) => s.email?.toLowerCase().includes(search))
                .map((user) => (
                    <Users user={user} key={user.id} />
                ))}
            </Container>
            </Container>
        </>
    );
};

export default ListUser;