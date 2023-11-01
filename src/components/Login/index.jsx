import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function Login() {

    let data = {};
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        data = {
            'username': username,
            'password': password,
        };
        console.log(data);
    };
    // console.log(username)



    return (
        <div>
            <h1>React-login page</h1>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField onChange={(event) => setUsername(event.target.value)} label="Username" variant="outlined" />
                <TextField onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" type="password" />
                <TextField label="Standard" variant="outlined" />
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Box>
        </div>

    )
}