import { Box, ThemeProvider} from "@mui/system"
import Typography from '@mui/material/Typography';
import { FancyTheme } from "../../../themeProvider/CustomTheme";



const TextInfo = ({text}) => {
    return(
        <ThemeProvider theme={FancyTheme}>
            <Box sx={{
                textAlign: 'center',
                width: '50vw',
                justifySelf: 'center'
            }}>
                <Typography sx={{
                    typography: 'fontSize',
                    fontSize: "80%"
                }}>  
                {text}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}

export default TextInfo;