import { Box } from "@mui/system";
import TextInfo from "./TextInfo";
import RegisterFields from "./RegisterFields";
import {infoText, consentText} from './texts';
import RegisterButton from "./RegisterButton";
import { useState } from "react";
import axios from "axios"



const RegisterContainer = () => {
    const [valueYear,setValueYear] = useState();
    const [valueCategory, setValueCategory] = useState();
    const LOCAL_STORAGE_KEY = "token";
    const handleSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        console.log(formData.get('password'));
        const credentials = {
            email: formData.get('email'),
            name: formData.get('fullname'),
            password: formData.get('password'),
            year: valueYear,
            category: valueCategory
        }
        const config = {
            method: 'post',
            url: '/registerApi',
            headers: {
                'Content-type': 'application/json'
            },
            data: credentials
        }
        
        const res = await axios(config);
        console.log(res);

            
    }
    return(
   
        <Box 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr 1fr',
            justifyContent: 'center'
            
        }}>
            <TextInfo text={infoText} />
            <RegisterFields setValueYear={setValueYear} setValueCategory={setValueCategory}/>
            <TextInfo text={consentText}/>
            <RegisterButton/>

            

        </Box>
    );
}

export default RegisterContainer;