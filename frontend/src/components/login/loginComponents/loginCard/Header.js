// import styled from "styled-components";
import Container from '@mui/material/Container'
import { Box } from '@mui/system';


import Headline from "./Headline";
import SetThemeButton from "./SetThemeButton";
// const HeaderContainer = styled.div
// `
//     margin: 0;
//     height: 10%;
//     display: grid;
//     grid-template-row: 1fr 1fr;
//     justify-items: center;
// `
const Header = ({theme,setTheme}) => {
    
    return(
        
        <>
            <Box
                sx={{
                    display:'flex'
                }}>
                <SetThemeButton theme={theme} setTheme={setTheme}/>
                
            </Box>
            <Container maxWidth="sm" disableGutters={true}>
                <Headline>
                </Headline>
            </Container>
        </>
    );
}


export default Header;