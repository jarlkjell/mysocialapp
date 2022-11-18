import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';





const CheckBoxText = ({text,checkedBox}) => {

    return(
        <FormGroup sx={{
            position: 'relative',
            top: "55vh",
            mt: 2
        }}>
            <FormControlLabel
                  
             control={<Checkbox inputRef={checkedBox} defaultChecked />}
             label= {<Typography sx={{
                fontSize: 12,
                fontWeight: 'light',
                
             }} >{text}</Typography>}
             
             //typo oder hier sx
            />
        </FormGroup>
    );
}


export default CheckBoxText;