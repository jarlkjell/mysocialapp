import styled from "styled-components"
import nft_place from '../pics/nft_place.jpg'
import wojak1 from '../pics/wojak1.png'



const PictureContainer = styled.div`
    @media screen and (orientation: landscape) {
        height: 70%;
        width: 45%;
        margin: 2.5% 1% 0 0;
        background-image: url(${nft_place});
        opacity: 0.6;
        mix-blend-mode: darken;
        align-self: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-color: transparent;
        z-index: 0;
    }
    @media screen and (orientation: portrait) {
        
        background-image: url(${wojak1});
        height: 30%;
        width: 50%;
        background-repeat: no-repeat;
        background-size : contain;
        background-position: center center;
        mix-blend-mode: darken;
        align-self: flex-end;
        margin: 2.5% 1% 0 0;

    }

`
const Picture = () => {
    return(
        <PictureContainer>
            
        </PictureContainer>
    );
}

export default Picture