import './App.css';
import { ThemeProvider, CssBaseline}  from "@mui/material";
import { useState } from 'react';
import {FancyTheme,DarkTheme} from "./themeProvider/CustomTheme"
import Headline from './components/Headline';



function App() {
  const [theme,setTheme] = useState(true);
  return (

      <ThemeProvider theme={theme ? FancyTheme : DarkTheme}>

        <CssBaseline>
            <div className="App">
                <Headline>
                  Test
                  </Headline>
                <input type="submit" onClick={()=> {theme === true ? setTheme(!theme) : setTheme(!theme)}}></input>
            </div>
          </CssBaseline>

      </ThemeProvider>
  );
}

export default App;
