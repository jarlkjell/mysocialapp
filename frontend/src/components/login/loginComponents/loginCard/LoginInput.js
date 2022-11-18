import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../../../App.css'
import FormHelperText from '@mui/material/FormHelperText';
import {useRef} from 'react'; 
import CheckBoxText from './CheckBoxText';
import SignInButton from './SignInButton';




const LoginInput = ({email,password,text,setEmail,setPassword}) => {

    const valueEmail = useRef(null);
    const valuePassword = useRef(null);
    const checkedBox = useRef(null);

    const InputHelperText = ({email,password}) => {
        if (email !== "saqib@gmail.com" && password !== "1234") { 
            return <FormHelperText sx={{m:0,color:"#FFFF"}}>Invalid Values</FormHelperText>;
        } 
        else { 
            return <FormHelperText sx={{m:0,color:"#FFFF"}}>success</FormHelperText>;
            }
    }

    // const loginUser = () => {
    //         setEmail(valueEmail.current.value);
    //         setPassword(valuePassword.current.value);
    //         console.log(valueEmail.current.value,valuePassword.current.value);
    //         valueEmail.current.value = "";
    //         valuePassword.current.value = "";


    // }

    return(
        <>
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
                    inputRef={valueEmail}
                    />
                    <InputHelperText email={email} password={password}/>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        inputRef={valuePassword}
                    />
                    <InputHelperText email={email} password={password}/>
                </div>
            </Box>
            <CheckBoxText text = {text} checkedBox={checkedBox}/> 
            <SignInButton valueEmail= {valueEmail} valuePassword={valuePassword} setEmail={setEmail} setPassword={setPassword} checkedBox={checkedBox} />
        </>
    );
}

export default LoginInput;