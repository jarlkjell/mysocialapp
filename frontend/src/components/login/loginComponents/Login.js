import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material"
import Header from "./loginCard/Header";
import Card from "./loginCard/Card"
import LoginReset from "./loginCardRight/LoginReset";
import {FancyTheme,DarkTheme} from "../../../themeProvider/CustomTheme"


import styled from "styled-components";

const Container = styled.div
`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    height: 70vh;
    margin: 0 2.5% 0 2.5%;
`

const Login = () => {

    const [email,setEmail] = useState("abc");
    const [password,setPassword] = useState("abc");


    const [theme,setTheme] = useState(true);
    return(
        <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Header theme={theme} setTheme={setTheme}>
                </Header>
                <Container>
                    <Card email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
                    <LoginReset/>
                </Container>
            </CssBaseline>
        </ThemeProvider>

    );
}



export default Login;