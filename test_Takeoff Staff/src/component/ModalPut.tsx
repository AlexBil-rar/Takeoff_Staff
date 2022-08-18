import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IUser} from '../types/GetUser'
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { delUsers, getUsers, PutUser } from '../store/action/user.action';


interface UserProps {
    user: IUser
}

const ModalPut: React.FC<UserProps> = ({user}) => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmai] = React.useState<string>(user.email)
    const [name, setName] = React.useState<string>(user.name)
    const [password, setPassword] = React.useState<string>('')
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)

    const dispatch = useDispatch()


    const putclik = () => {
        dispatch(PutUser(user.id ,email, name, password))
        dispatch(getUsers())
    }

    return (
        <>
            <Button onClick={handleOpen} variant="outlined" >
                Ред.
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Редактировать пользователя
                </Typography>
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    label="Email" 
                    variant="outlined" 
                    value={email}
                    onChange={(e) => setEmai(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    label="Имя" 
                    variant="outlined" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    fullWidth 
                    label="Имя" 
                    variant="outlined" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => putclik()}  variant="outlined" >
                    Редактировать
                </Button>
            </Box>
            </Modal> 
        </>
    );
};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default ModalPut;