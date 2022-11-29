import { Box } from "@mui/system";
import TextInfo from "./TextInfo";
import RegisterFields from "./RegisterFields";
import {infoText, consentText} from './texts';



const RegisterContainer = () => {

    return(
        <Box sx={{
            display: 'grid',
            gridTemplateRows: '2fr 4fr 1fr 1fr',
            justifyContent: 'center'
            
        }}>
            <TextInfo text={infoText} />
            <RegisterFields />
            <TextInfo text={consentText}/>
            <p>TEST</p>

            

        </Box>
    );
}

export default RegisterContainer;