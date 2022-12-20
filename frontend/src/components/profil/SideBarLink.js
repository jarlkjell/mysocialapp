import React from 'react';
import styled from 'styled-components';


function SidebarLink() {
  return(

 
    <StyledSidebarLink>

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



