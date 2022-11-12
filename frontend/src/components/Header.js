import styled from "styled-components";

import Headline from "./Headline";
import SetThemeButton from "./SetThemeButton";
const HeaderContainer = styled.div
`
    margin: 0;
    height: 10%;
    display: grid;
    grid-template-row: 1fr 1fr;
    justify-items: center;
`
const Header = ({theme,setTheme}) => {
    return(
        <HeaderContainer>
            <Headline>
                Test
            </Headline>
            <SetThemeButton theme={theme} setTheme={setTheme}/>
        </HeaderContainer>
    );
}


export default Header;