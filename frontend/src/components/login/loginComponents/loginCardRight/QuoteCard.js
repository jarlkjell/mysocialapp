import { Typography } from "@mui/material";
import ButtonOutline from "./ButtonOutline";
import {Link} from 'react-router-dom';
import { Box } from "@mui/system";
import axios from "axios";
import {useState} from 'react';
import MobileStoreButton from 'react-mobile-store-button'



const QuoteCard = () => {
    

    const [content,setContent] = useState("");
    const [author,setAuthor] = useState("");
    const getQuotes = async () => {
        var config = {
            method: 'get',
            url: 'https://api.quotable.io/random',
            headers: { }
        };
        const response = await axios(config);
        if(content==="" || author==="") {
            setContent(response.data.content);
            setAuthor(response.data.author);
        } else {
            return "No request needed";
        }
    }
    getQuotes();
    const applePlayStore = "https://apps.apple.com/de/app/itunes-store/id915061235";
    const googlePlayStore = "https://play.google.com/store/games?gl=DE&utm_source=emea_Med&utm_medium=hasem&utm_content=Sep2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-de-1001280-Med-hasem-py-Evergreen-Sep2020-Text_Search_BKWS%7CONSEM_kwid_43700006975732154&gclid=Cj0KCQiA4OybBhCzARIsAIcfn9m5LyBADSRxKS8pnIBM0H6dGh67QLZ28AqJ-FC2jNGsKmjf4OZnwxQaAtgVEALw_wcB&gclsrc=aw.ds&pli=1";
    
    return(
        <>
            <Box sx={{
                display: 'grid',
                gridTemplateRows: "3fr 1fr 1fr",
                justifyItems: 'center',
                
            }}>
                <Box
                    sx={{
                    width: "60%",
                    height: "40vh",
                    gridRowStart: 1,
                    alignSelf: 'start',
                    backgroundColor: '#D9D9D9',
                    '&:hover': {
                        backgroundColor: '#D9D9D9',
                        opacity: [0.9, 0.8, 0.7],
                        },
                    
                    }}
                
                ><Typography  align ='center' sx={{
                    zIndex: 1,
                    color: "#00000",
                    mt: "5%",
            
                    
                    fontStyle: "italic"
                }}>,,{content}"</Typography>
                <Typography  align ='center' sx={{
                    zIndex: 1,
                    color: "#00000",
                    mt: "5%"
                }}>-{author}</Typography>

                </Box>
                <Box sx= {{
                    position: 'relative',
                    top: "50%",
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                   
                    width: "60%",
                    height: "10vh",
                 

                    
                }}>
                    <Link to="/register" style={{textDecoration: 'none'}}>
                        <ButtonOutline text={"Register"}/>
                    </Link>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <ButtonOutline text={"Forgot Password?"}/>
                    </Link>
                </Box>
                <Box sx={{
                    mt: "5vh",
                    position: 'relative',
                    left: "20%",
                    display: 'flex',
                    justifySelf: 'center',
                    alignContent: 'center',
                    flexWrap: 'wrap',
                    width: "100%"
                    
                }}>
                    <MobileStoreButton
                    
                    store="ios"
                    url={applePlayStore}
                    height = "5vh"
                    linkProps={{ title: 'iOS Store Button'}}
                    />
                                        <MobileStoreButton
                    
                    store="android"
                    url={googlePlayStore}
                    height= "6vh"
                    linkProps={{ title: 'Store Button'}}
                    />
                </Box>
            </Box>
          
                
         
            
            
            

        </>
    );
}

export default QuoteCard;