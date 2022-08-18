import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { addUser } from '../store/action/user.action';

const ModalCreate = () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmai] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')


    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)

    const dispatch = useDispatch()

    function createDirHandler() {
        dispatch(addUser(email, name, password))
        setOpen(false)
    }


    return (
        <>
            <Button onClick={handleOpen} variant="contained">
                Создать пользователя
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={style}  component="form" noValidate>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Создать пользователя
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
                    label="Пароль" 
                    variant="outlined" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => createDirHandler()} variant="outlined" >
                    Создать
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

export default ModalCreate;