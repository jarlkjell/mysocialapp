import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material"
import Header from "./Header";


import {FancyTheme,DarkTheme} from "../themeProvider/CustomTheme"


import styled from "styled-components";

const Container = styled.div
`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    border: 10px solid yellow;
`

const AppContainer = () => {

    const [theme,setTheme] = useState(true);
    return(
        <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Header theme={theme} setTheme={setTheme}>
                </Header>
                <Container>
                    <div>something</div>
                    <div>somethingElese</div>
                </Container>
            </CssBaseline>
        </ThemeProvider>

    );
}



export default AppContainer;