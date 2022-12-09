import {Button, ThemeProvider} from '@mui/material'
import { FancyTheme } from '../../../themeProvider/CustomTheme';
const RegisterButton = () => {
    return(
        <ThemeProvider theme={FancyTheme}>
            <Button type='submit' variant="contained" sx={{
                width: "50%",
                justifySelf: "center",
                top: "20%",
                bgcolor: "text.primary",
                color: "secondary.light"
            }}>Register</Button>
        </ThemeProvider>
    );
}

export default RegisterButton;