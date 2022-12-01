import { Box } from "@mui/system";
import TextInfo from "./TextInfo";
import RegisterFields from "./RegisterFields";
import {infoText, consentText} from './texts';
import RegisterButton from "./RegisterButton";



const RegisterContainer = () => {

    return(
        
        <Box sx={{
            display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr 1fr',
            justifyContent: 'center'
            
        }}>
            <TextInfo text={infoText} />
            <RegisterFields />
            <TextInfo text={consentText}/>
            <RegisterButton/
            >

            

        </Box>
    );
}

export default RegisterContainer;