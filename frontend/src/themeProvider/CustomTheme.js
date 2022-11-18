import {createTheme} from "@mui/material"
import "../App.css"

    const FancyTheme = createTheme({
        palette: {
            primary : {
                main: "#352B44",
                
            },
            secondary : {
                main: "#762AFE",
            },
            background: {
                default: "#352B44 "
            },
            text: {
                primary: "#FFFF"
            }
        },
        typography: {
            fontFamily:  'Space Grotesk, sans-serif',
            fontSize: 20  
        }
    });

    const DarkTheme = createTheme({
        palette: {
            mode: 'dark',
            text: {
                primary: "#FFFF"
            }
        },

        typography: {
            fontFamily:  'Space Grotesk, sans-serif',
            fontSize: 20  
        }
    });


export {FancyTheme,DarkTheme};