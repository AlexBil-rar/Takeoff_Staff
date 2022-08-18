import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {IUser} from '../types/GetUser'
import { delUsers, getUsers} from '../store/action/user.action';
import ModalPut from './ModalPut';

interface UserProps {
    user: IUser
}

const Users: React.FC<UserProps> = ({user}) => {
    const dispatch = useDispatch()

    const delclik = () => {
        dispatch(delUsers(user.id))
        dispatch(getUsers())
    }

    return (
        <>
           <Grid sx={boxSX}    container  spacing={4}>
                <Grid item md={1}>
                    {user.id}
                </Grid>
                <Grid container justifyContent="center" item  md={4}>
                    {user.email}
                </Grid>
                <Grid container justifyContent="center"  item md={4}>
                    {user.name}
                </Grid>
                <Grid  container justifyContent="center"item md={3}>
                    <Grid     container  spacing={2}>
                        <Grid    >
                            <Button onClick={() => delclik()} variant="outlined" color="error">
                            Удалить
                            </Button>
                        </Grid>
                        <Grid >
                            <ModalPut user={user}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>     
        </>
    );
};

const boxSX = {
    borderBottom: 1,
    borderColor: 'divider',
    marginTop: 0,
    "&:hover": {
        transform: "scale(1.01)",
    },
  };

export default Users;