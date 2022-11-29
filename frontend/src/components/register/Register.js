import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Header from "../login/loginComponents/loginCard/Header";
import { FancyTheme,DarkTheme } from '../../themeProvider/CustomTheme'
import RegisterContainer from "./registerComponents/RegisterContainer";

const Register= () => {

    const [theme,setTheme] = useState(true);
    return(
        <ThemeProvider theme= {theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Header theme={theme} setTheme={setTheme}>
                </Header>
                <RegisterContainer/>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default Register;