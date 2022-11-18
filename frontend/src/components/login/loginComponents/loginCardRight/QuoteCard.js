import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import {useState} from 'react';
import ButtonOutline from "./ButtonOutline";


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

    
    return(
        <>
            <Box
                sx={{
                width: "50%",
                height: "70%",
                alignSelf: 'flex-start',
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
            
          
        </>
    );
}

export default QuoteCard;