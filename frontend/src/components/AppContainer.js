import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material"
import Header from "./Header";
import Card from "./Card"


import {FancyTheme,DarkTheme} from "../themeProvider/CustomTheme"


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

const AppContainer = () => {

    const [theme,setTheme] = useState(true);
    return(
        <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Header theme={theme} setTheme={setTheme}>
                </Header>
                <Container>
                    <Card/>
                    <div>somethingElese</div>
                </Container>
            </CssBaseline>
        </ThemeProvider>

    );
}



export default AppContainer;