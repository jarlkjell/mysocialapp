import { Box, ThemeProvider } from "@mui/system";
import { FancyTheme } from "../../../themeProvider/CustomTheme";
import { TextField } from "@mui/material";
import {FormControl} from "@mui/material";
import {InputLabel} from "@mui/material";
import {NativeSelect} from '@mui/material';




const RegisterFields = ({setValueYear,setValueCategory}) => {

    const handleGetYear = (event) => {
        event.preventDefault();
        setValueYear(event.currentTarget.value);
    }
    const handleGetCategory = (event) => {
        event.preventDefault();
        setValueCategory(event.currentTarget.value);
    }


    return(
        <ThemeProvider theme={FancyTheme}>
            <Box
             sx={{
                display:'grid',
                gridTemplateColumns: '1fr 1fr'
            }}>
                <Box
                        

                //hier kommt onSubmit={handleLogin}
                sx={{
                
                display: 'flex',
                flexFlow: 'column',
                flexWrap: 'wrap',
                gap: '10%'
                }}
                noValidate
                autoComplete="off">
            
                
                    <TextField
                    required
                    variant="filled"
                    id="outlined-required"
                    label="Email"
                    name="email"
                    color="info"
                    sx={{
                        bgcolor: "secondary.light"


                    }}

                    />
                    
                    <TextField
                        required
                        variant="filled"
                        id="text-input"
                        label="full name"
                        type="text"
                        name="fullname"
                        color="info"
                        sx={{
                            bgcolor: "secondary.light"
                        }}
            
                    />
                    <TextField
                        required
                        variant="filled"
                        id="password-input"
                        label="password"
                        name= "password"
                        type="password"
                        color="info"
                        sx={{
                            bgcolor: "secondary.light"
                        }}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'center',
                    ml: "10%"

                }}>
                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Category
                                </InputLabel>
                                <NativeSelect
                                    onChange={handleGetCategory}
                                    sx={{
                                        color: "secondary.light"
                                    }}
                                    defaultValue={''}
                                    inputProps={{
                                        name: 'category',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'work'}>Work</option>
                                    <option value={'meme'}>Meme</option>
                                    <option value={'celebrity'}>Celebs</option>
                                </NativeSelect>
                            </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                Year
                            </InputLabel>
                            <NativeSelect
                                onChange={handleGetYear}
                                sx={{
                                    color: "secondary.light",

                                }}                            
                                defaultValue={''}
                                inputProps={{
                                    name: 'year',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={2022}>2022</option>
                                <option value={2021}>2021</option>
                                <option value={2020}>2020</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default RegisterFields;