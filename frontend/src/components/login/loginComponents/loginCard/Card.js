import styled from "styled-components"
import Picture from "./Picture";
import LoginInput from "./LoginInput";


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(179, 155, 185);
    border: 1x solid black; 
    width: 100%;
    height: 100%; 
    z-index: 1;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;  

`

const text = "Das Melden von Inhalten, die deiner Ansicht nach im Sinne des Netzwerkdurchsetzungsgesetzes (NetzDG) rechtswidrig sind, ist auch dann möglich, wenn du nicht eingeloggt bist."

const Card = ({email,password,setEmail,setPassword}) => {
    return(
        <CardContainer sx= {{
            display: 'flex',
            flexDirection: 'column',

        }}>
            <Picture/>
            <LoginInput text={text} setEmail={setEmail} setPassword={setPassword} email={email} password={password} />
            
        </CardContainer>
    );
}

export default Card;