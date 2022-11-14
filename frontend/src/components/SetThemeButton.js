import {Switch} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const SetThemeButton = ({theme,setTheme}) => {
    return(
        <Switch 
        icon= {<LightModeIcon fontSize="inherit"/>}
        checkedIcon = {<ModeNightIcon fontSize="inherit"/>}
        onChange = {()=> {theme === true ? setTheme(!theme) : setTheme(!theme)}}>
            Change Theme
        </Switch>
    );
}

export default SetThemeButton;