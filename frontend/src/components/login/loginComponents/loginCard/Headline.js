import styled from 'styled-components';



const Header = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Comic Sans MS", cursive, sans-serif;
  font-size: 200%;
  letter-spacing: 0px;
  word-spacing: 0px;
  font-weight: 400;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none; 
`


const Headline = () => {
    return (
      <>
        <Header>
          NFT-DEALERS
        </Header>
      </>
    );
  }

export default Headline;