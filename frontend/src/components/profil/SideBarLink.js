import React from 'react';
import styled from 'styled-components';


function SidebarLink({ Icon, text }) {
  return(

 
    <StyledSidebarLink>
        <StyledIcon><Icon /></StyledIcon>
        <StyledH2>{text}</StyledH2>
    </StyledSidebarLink>
 
  );
}

export default SidebarLink


const StyledSidebarLink = styled.div`
  display: flex;
  cursor: pointer;
  /* border: 1px solid black; */
  &:hover{
  color: blue;
  transition: color 100ms ease-out;
  }
`;

const StyledIcon = styled.div`
  padding: 20px;
  /* border: 1px solid red; */
  width: fit-content;
`;

const StyledH2 = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  margin-right: 20px;
  /* border: 1px solid red;  */
`;