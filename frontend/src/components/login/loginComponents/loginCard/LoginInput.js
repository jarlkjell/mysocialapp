import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../../../App.css'
import FormHelperText from '@mui/material/FormHelperText';
import {useRef} from 'react'; 
import CheckBoxText from './CheckBoxText';
import SignInButton from './SignInButton'
import { AppContextProvider } from '../../../../provider/appContext';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';



const LoginInput = ({email,password,text,setEmail,setPassword}) => {
    



    const valueEmail = useRef(null);
    const valuePassword = useRef(null);
    const checkedBox = useRef(null);
    const navigate= useNavigate();
    const InputHelperText = ({email,password}) => {
        if (email !== "saqib@gmail.com" && password !== "1234") { 
            return <FormHelperText sx={{m:0,color:"#FFFF"}}>Invalid Values</FormHelperText>;
        } 
        else { 
            return <FormHelperText sx={{m:0,color:"#FFFF"}}>success</FormHelperText>;
            }
    }

    const handleSubmitLogin = async(event) => {

        event.preventDefault();
        const loginFormData = new FormData(event.currentTarget);
        //check working
        //console.log(`Credentials: ${loginFormData.get('password')}`);
        const credientials = {
            email: loginFormData.get('email'),
            password: loginFormData.get('password')
        }
        const config = {
            method : 'post',
            url: '/loginApi',
            headers: {
                'Content-type' : 'application/json'
            },
            data: credientials
        }
        //respond on axios login route call
        const res = await axios(config);
        console.log(res.data.access);
        navigate("/profile")
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
                
                
                //hier kommt onSubmit={handleLogin}
                component="form" 
                onSubmit = {handleSubmitLogin}
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
                    defaultValue="email"
                    name = "email"
                    inputRef={valueEmail}
                    />
                    <InputHelperText email={email} password={password}/>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        defaultValue="password"
                        type="password"
                        name ="password"
                        autoComplete="current-password"
                        inputRef={valuePassword}
                    />
                    <InputHelperText email={email} password={password}/>
                </div>
                <CheckBoxText text = {text} checkedBox={checkedBox}/> 
            <SignInButton  valueEmail= {valueEmail} valuePassword={valuePassword} setEmail={setEmail} setPassword={setPassword} checkedBox={checkedBox} />
            </Box>

        </>
    );
}

export default LoginInput;