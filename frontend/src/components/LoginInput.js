import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../App.css'

const LoginInput = () => {
    return(
        <Box
            
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div class="input-box">
                <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
        </Box>
    );
}

export default LoginInput;