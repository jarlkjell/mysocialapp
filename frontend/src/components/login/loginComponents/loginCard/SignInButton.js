import { Button, ThemeProvider, Typography } from "@mui/material";

import {FancyTheme} from '../../../../themeProvider/CustomTheme'


const SignInButton = ({valueEmail,valuePassword,setEmail, setPassword, checkedBox}) => {
    const loginUser = () => { 
        console.log(checkedBox.current.checked);
        if(checkedBox.current.checked === true) { 
            setEmail(valueEmail.current.value);
            setPassword(valuePassword.current.value);
        } else {
            alert("Please check the consent box!");
            console.log(checkedBox.current.checked)
        }}

    return(
        <ThemeProvider theme= {FancyTheme}>
            
            <Button variant="contained"
                type="submit"
                sx= {{
                color: 'secondary.main',
                position: 'relative',
                top: "55vh",
                left: "12.5vw",
                width: "20vw",
                alignSelf: 'center',
                fontWeight: 'bold'            
            }} size="large" onClick={loginUser}>
                    <Typography sx= {{
                        color: 'text.primary'
                    }}>
                
                     SignIn</Typography>
            </Button>
        </ThemeProvider>
    );
}

export default SignInButton;