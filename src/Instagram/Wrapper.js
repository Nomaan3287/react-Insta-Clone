import React from 'react'
import styled from "styled-components";
import Topbar from './Topbar';
import Profile from './Profile'

const StyledWrapper = styled.div`
  width: 100%;
  background: black;
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 500px;
    
  }
`;

export default function Wrapper(){
return(
  <StyledWrapper>
    <Topbar/>
    <Profile/>
  </StyledWrapper>
)
}
