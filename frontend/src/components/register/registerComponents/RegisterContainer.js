import { Box } from "@mui/system";
import TextInfo from "./TextInfo";
import RegisterFields from "./RegisterFields";



const RegisterContainer = () => {
    const infoText = "Register now to get the coolest NFTs from the hottest vendors. Make it yours to rate from likes to yikes!";
    return(
        <Box sx={{
            display: 'grid',
            gridTemplateRows: '2fr 4fr 1fr 1fr',
            justifyContent: 'center'
            
        }}>
            <TextInfo text={infoText}/>
            <RegisterFields/>
            <p>Test3</p>
            <p>Test4</p>

            

        </Box>
    );
}

export default RegisterContainer;