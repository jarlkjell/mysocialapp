import Sidebar from "./sidebar/SideBar";
import { Box } from "@mui/system";
import Header from "../login/loginComponents/loginCard/Header";
import { FancyTheme,DarkTheme } from "../../themeProvider/CustomTheme";
import { ThemeProvider,CssBaseline } from "@mui/material";
import { useState } from "react";

const Profil = () => {
    const [theme,setTheme] = useState(true);
    return(
        <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>
            <CssBaseline>
                <Box 
                    sx={{
                        display: 'flex'
                    }}
                >
                    <Header theme={theme} setTheme={setTheme}>
                    </Header>
                    <Sidebar/>
                </Box>
  
            </CssBaseline>
        </ThemeProvider>
    );
}

export default Profil;