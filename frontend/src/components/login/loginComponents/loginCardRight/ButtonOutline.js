import { Button } from "@mui/material";


const ButtonOutline = ({text}) => {
    return(
        <Button variant="outlined" 
        
        size="medium" sx= {{
            color: "#7133BC",
            "&:hover": {
                backgroundColor: "transparent"
              }
            }}>
            {text}
        </Button>
    );
}

export default ButtonOutline;